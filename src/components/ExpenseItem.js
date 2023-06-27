import './ExpenseItem.css';

function ExpenseItem(expenseProps) {

    const expenseDate = new Date(2021, 2, 28);
    const expesnseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    

    return (

        <div className="expense-item">
            <div>{ expenseDate.toString()}</div>
            <div className="expense-item__description">
                <h2>{ expesnseTitle }</h2>
            </div>
            <div className="expense-item__price">£{ expenseAmount }</div>
        </div>

    );

};

export default ExpenseItem;