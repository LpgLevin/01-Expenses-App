import React, { useState, useEffect } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses( { items } ) {

    const [ filteredYear, setFilteredYear ] = useState( "2020" );

    function filterChangeHandler( selectedYear ) {

        setFilteredYear( selectedYear );  

    };

        const filteredList = items.filter( function( expense ) {
            return expense.date.getFullYear().toString() === filteredYear;
        });

                
        

    return (

        <div>
            <Card className="expenses" >      
                <ExpensesFilter 
                    selected={ filteredYear }
                    onChangeFilter={ filterChangeHandler } 
                />    
                <ExpensesList filteredList={ filteredList }/>
               
            </Card>
        </div>
    )

};

export default Expenses;