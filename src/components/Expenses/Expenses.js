import React, { useState, useEffect } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses( { items } ) {

    const [ filteredYear, setFilteredYear ] = useState( "2020" );
    const [ filteredList, setFilteredList ] = useState( items );

    function filterChangeHandler( selectedYear ) {

        setFilteredYear( selectedYear );  

        let filteredExpenses = items;

        if ( selectedYear === "2019" ) {
                 filteredExpenses = items.filter( function( expense ) {
                return expense.date.getFullYear() === 2019;
              } );
             
        }; 


        if ( selectedYear === "2020" ) {
                 filteredExpenses = items.filter( function( expense ) {
                return expense.date.getFullYear() === 2020;
              } );
        };


        if ( selectedYear === "2021" ) {
                 filteredExpenses = items.filter( function( expense ) {
                return expense.date.getFullYear() === 2021;
              } );
        };

         
        if ( selectedYear === "2022" ) {
                 filteredExpenses = items.filter( function( expense ) {
                return expense.date.getFullYear() === 2022;
              } );
              
        };        
        
        setFilteredList( filteredExpenses );
    };

    return (

        <div>
            <Card className="expenses" >      
                <ExpensesFilter 
                    selected={ filteredYear }
                    onChangeFilter={ filterChangeHandler } 
                />    
                
                { filteredList.map( expense => <ExpenseItem 
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