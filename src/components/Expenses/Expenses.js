import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses( { items } ) {

    const [ filteredYear, setFilteredYear ] = useState( "2020" );

    function filterChangeHandler( selectedYear ) {
        setFilteredYear( selectedYear );     
    };

    return (

        <div>
            <Card className="expenses" >      
                <ExpensesFilter 
                    selected={ filteredYear }
                    onChangeFilter={ filterChangeHandler } 
                />    
                
                { items.map( expense => <ExpenseItem 
                    key={ expense.id }
                    title={ expense.title } 
                    amount={ expense.amount } 
                    date={ expense.date } 
                /> ) } 
            
            </Card>
        </div>
    )

};

export default Expenses;