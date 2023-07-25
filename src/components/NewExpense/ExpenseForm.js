import React, { useState } from "react";
import "./ExpenseForm.css";
import ExpensesList from "../Expenses/ExpensesList";

function ExpenseForm( { onSaveExpenseData, setExpenseAdded }) {

    const [ enteredTitle, setEnteredTitle ] = useState( "" );
    const [ enteredAmount, setEnteredAmount ] = useState( "" );
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

    function submitHandler( event ) {

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        onSaveExpenseData( expenseData );
        setEnteredTitle( "" );
        setEnteredAmount( "" );
        setEnteredDate( "" );

    };

    function handleClickAddExpense() {
        setExpenseAdded( true );
    };

    return (

        <form onSubmit={ submitHandler } >
            <div className="new-expense__controls" >

                <div className="new-expense__control" >
                    <label> Title </label>
                    <input 
                        type="text" 
                        value={ enteredTitle }
                        onChange={ titleChangeHandler } 
                    />
                </div>

                <div className="new-expense__control" >
                    <label> Amount </label>
                    <input 
                        type="number"
                        min="0.01" 
                        step="0.01" 
                        value={ enteredAmount } 
                        onChange={ amountChangeHandler } 
                    />
                </div>

                <div className="new-expense__control" >
                    <label> Date </label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2023-07-07"
                        value={ enteredDate }
                        onChange={ dateChangeHandler } 
                    />
                    
                </div>

            </div>

            <div className="new-expense__actions" >
                <button 
                    type="submit"
                    onClick={ handleClickAddExpense }
                > Add Expense </button>
            </div>
        </form>

    );

};

export default ExpenseForm;