
import React, {useState} from 'react';
import ExpenseForm from './NewExpense/ExpenseForm';

// don't change the Component name "App"
export default function App() {
    
    const [warningMessage, setWarningMessage] = React.useState(null);


    
    function handleClickDelete() {
        setWarningMessage(
            <div id="alert">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button onClick={ handleClickProceed } >Proceed</button>
            </div>
            )
    };
    
    
    function handleClickProceed() {
        setWarningMessage(null);
    };
    
    
    return (
      <div>
        <button onClick={ handleClickDelete }>Delete</button> 
       {warningMessage}
      </div>    
    );
}

// delete button = add expense button
// setWarningMessage = setExpenseForm
// warningMessage = ExpenseForm
// handleClickDelete changes warning message to the rendered message = handleClickSum
// proceed button = submit expense button

export default function App() {
    
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