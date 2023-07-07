import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {

    const [ enteredTitle, setEnteredTitle ] = useState( "" );
    const [ enteredAmount, setEnteredAmount ] = useSate( "" );
    const [ enteredDate, setEnteredDate ] = useState( "" );
    

    function titleChangeHandler( event ) {
        setEnteredTitle( event.target.value );
    };

    function amountChangeHandler( event ) {
        setEnteredAmount( event.target.value );
    };

    function dateChangeHandler( event ) {
        setEnteredDate( event.target.value );
    };

    return (

        <form>
            <div classname="new-expense__controls" >

                <div classname="new-expense__control" >
                    <label> Title </label>
                    <input 
                        type="text" 
                        onChange={ titleChangeHandler } 
                    />
                </div>

                <div classname="new-expense__control" >
                    <label> Amount </label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        onChange={ amountChangeHandler } 
                    />
                </div>

                <div classname="new-expense__control" >
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