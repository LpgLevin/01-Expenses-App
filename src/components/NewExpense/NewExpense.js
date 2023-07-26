import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

function NewExpense( { onAddExpense } ) {

    const [ isEditing, setIsEditing ] = useState( false );


    function saveExpenseDataHandler( enteredExpenseData ) {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        onAddExpense( expenseData );
        setIsEditing( false );
    };


    function startEditingHandler() {
        setIsEditing( true );
    };

    function stopEditingHandler() {
        setIsEditing( false );
    };


    return (

        <div className="new-expense" >
            { !isEditing && (<button onClick={ startEditingHandler }>Add New Expense</button>) }
           { isEditing && (
            <ExpenseForm 
                onSaveExpenseData={ saveExpenseDataHandler }
                onCancel={ stopEditingHandler } 
            />) }
        </div>

    );


};

export default NewExpense;