import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {

    const [ enteredTitle, setEnteredTitle ] = useState( "" );
    const [ enteredAmount, setEnteredAmount ] = useState( "" );
    const [ enteredDate, setEnteredDate ] = useState( "" );

    //---------This is what we would do if we wanted to use one piece of state instead of three: -----------------------------------------------------
    
    // const [ userInput, setUserInput ] = useState( {
    //    enteredatitle: "",
    //    enteredAmount: "",
    //    enteredDate: ""
    // });
    

    function titleChangeHandler( event ) {
        setEnteredTitle( event.target.value );

        //------------------------- For one piece of state, to avoid losing the other values in the object, we use the spread operator to copy in hte existing user input before modifying the one value we are working with. ----------------------------------------------------------------------
        
        // setUserInput( { 
        //     ...userInput,
        //     enteredTitle: event.target.value,
        //      
        //  } );

        //**********HOWEVER***************
        // By using the spread operator in this way, we are depending on our previous state, which risks inaccuracy. By using instead the sytax below, react guaruntees that the previous state used will always be the most up to date state snapshot, keeping all scheduled state updates in mind.

        // setUserInput( ( prevState ) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // } );
        
    };

    function amountChangeHandler( event ) {
        setEnteredAmount( event.target.value );
    };

    function dateChangeHandler( event ) {
        setEnteredDate( event.target.value );
    };

    function submitHandler( event ) {

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData)

    };

    return (

        <form onSubmit={ submitHandler } >
            <div className="new-expense__controls" >

                <div className="new-expense__control" >
                    <label> Title </label>
                    <input 
                        type="text" 
                        onChange={ titleChangeHandler } 
                    />
                </div>

                <div className="new-expense__control" >
                    <label> Amount </label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        onChange={ amountChangeHandler } 
                    />
                </div>

                <div className="new-expense__control" >
                    <label> Date </label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2023-07-07"
                        onChange={ dateChangeHandler } 
                    />
                </div>

            </div>

            <div className="new-expense__actions" >
                <button type="submit" > Add Expense </button>
            </div>
        </form>

    );

};

export default ExpenseForm;