
import React, { useState, useEffect } from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

function ExpenseItem({ date, title, amount }) {

    const [ name, setName ] = useState( title );

    

    function clickHandler() {
              
            setName( "Updated!" );
            console.log( name );
      
    };

    return (
        
        <Card className="expense-item">
            <ExpenseDate date={ date } />
            <div className="expense-item__description">
                <h2>{ name }</h2>
                <div className="expense-item__price">£{ amount }</div>
            </div>
            <button onClick={ clickHandler } >Change Title</button>           
        </Card>

    );

};

export default ExpenseItem;