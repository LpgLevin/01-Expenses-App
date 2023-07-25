import ExpenseForm from "../NewExpense/ExpenseForm";

function AddExpenseButton() {

    function handleAddExpense() {
        return (
            <ExpenseForm />
        )
    }

    return (
        <button onClick={ handleAddExpense } >Add Expense</button>
    )
};

export default AddExpenseButton;

