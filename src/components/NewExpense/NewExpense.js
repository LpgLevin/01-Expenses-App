import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

function NewExpense( { onAddExpense } ) {

    const [ expenseAdded, setExpenseAdded ] = useState( false );


    function saveExpenseDataHandler( enteredExpenseData ) {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        onAddExpense( expenseData );
    };

    if (expenseAdded)

    return (

        <div className="new-expense" >
            <ExpenseForm 
                expenseAdded={expenseAdded}
                setExpenseAdded={setExpenseAdded}
                onSaveExpenseData={ saveExpenseDataHandler } 
            />
        </div>

    );


};

export default NewExpense;