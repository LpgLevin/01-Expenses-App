
import React, { useState, useEffect } from "react";
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

// This is what's known as a stateless/presentational/dumb component, because it doesn't have any internal state

function ExpenseItem({ date, title, amount }) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={ date } />
            <div className="expense-item__description">
                <h2>{ title }</h2>
                <div className="expense-item__price">£{ amount }</div>
            </div>
        </Card>
    );

};

export default ExpenseItem;