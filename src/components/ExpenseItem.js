import './ExpenseItem.css';

function ExpenseItem(expenseProps) {

    return (

        <div className="expense-item">
            <div>{ expenseProps.date.toISOString() }</div>
            <div className="expense-item__description">
                <h2>{ expenseProps.title }</h2>
            </div>
            <div className="expense-item__price">£{ expenseProps.amount }</div>
        </div>

    );

};

export default ExpenseItem;