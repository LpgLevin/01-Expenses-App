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
        
    };

    function amountChangeHandler( event ) {
        setEnteredAmount( event.target.value );
    };

    function dateChangeHandler( event ) {
        setEnteredDate( event.target.value );
    };

    return (

        <form>
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