import './ExpenseItem.css';

function ExpenseItem({ date, title, amount }) {

    const day = date.toLocaleString( "en-UK", { day: "2-digit" } );
    const month = date.toLocaleString( "en-UK", { month: "long" } );
    const year = date.getFullYear();

    return (

        <div className="expense-item">
            <div>
                <div>{ day }</div>
                <div>{ month }</div>
                <div>{ year }</div> 
            </div>

            <div className="expense-item__description">
                <h2>{ title }</h2>
            </div>
            
            <div className="expense-item__price">£{ amount }</div>
        </div>

    );

};

export default ExpenseItem;