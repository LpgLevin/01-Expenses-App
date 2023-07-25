import Expenses from "./components/Expenses/Expenses.js"; 
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";
import AddExpenseButton from "./components/Expenses/AddExpenseButton.js";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [ expenses, setExpenses ] = useState( DUMMY_EXPENSES );
  const [ expenseAdded, setExpenseAdded ] = useState( false );

  const [form, setForm] = React.useState(null);


  
  function handleClickAddExpense() {
      setForm(
         <ExpenseForm 
          setForm={ setForm } 
          handleClickSubmitExpense={ handleClickSubmitExpense }
        />
          )
  };
  
  
  function handleClickSubmitExpense() {
      setForm(null);
  };
  
  
  return (
    <div>
      <button onClick={ handleClickAddExpense }>Add Expense</button> 
     {form}
    </div>    
  );
}
  function addExpenseHandler( expense ) {

    setExpenses( ( prevExpenses ) => {
      return [ expense, ...expenses ];
    } );
    
  };

  return (
    <div>
      <AddExpenseButton />
      <NewExpense onAddExpense={ addExpenseHandler } />
      <Expenses items={ expenses } />
    </div>
  );

};

export default App;
