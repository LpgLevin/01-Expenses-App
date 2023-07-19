import React, { useState, useEffect } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses( { items } ) {

    const [ filteredYear, setFilteredYear ] = useState( "2020" );
    // const [ filteredList, setFilteredList ] = useState( items );

    function filterChangeHandler( selectedYear ) {

        setFilteredYear( selectedYear );  

        // if ( selectedYear === "2019" ) {
            //      filteredExpenses = items.filter( function( expense ) {
            //     return expense.date.getFullYear() === 2019;
            //   } );
             
        // }; 


        // if ( selectedYear === "2020" ) {
        //          filteredExpenses = items.filter( function( expense ) {
        //         return expense.date.getFullYear() === 2020;
        //       } );
        // };


        // if ( selectedYear === "2021" ) {
        //          filteredExpenses = items.filter( function( expense ) {
        //         return expense.date.getFullYear() === 2021;
        //       } );
        // };

         
        // if ( selectedYear === "2022" ) {
        //          filteredExpenses = items.filter( function( expense ) {
        //         return expense.date.getFullYear() === 2022;
        //       } );
              
        // };        
        
        // setFilteredList( filteredExpenses );
    };

        const filteredList = items.filter( function( expense ) {
            return expense.date.getFullYear().toString() === filteredYear;
        });

                
        let expensesContent = <p>No expenses found.</p>;

        if ( filteredList.length > 0 ) {

        expensesContent = filteredList.map( ( expense )=> (
                        
            <ExpenseItem 
                key={ expense.id }
                title={ expense.title } 
                amount={ expense.amount } 
                date={ expense.date } 
            /> 
          ) ); 
                        
        };

    return (

        <div>
            <Card className="expenses" >      
                <ExpensesFilter 
                    selected={ filteredYear }
                    onChangeFilter={ filterChangeHandler } 
                />    
                
                {/* { filteredList.length === 0 
                    ? 
                        ( <p>No expenses found.</p> ) 
                    : 
                        ( filteredList.map( expense => 
                        <ExpenseItem 
                            key={ expense.id }
                            title={ expense.title } 
                            amount={ expense.amount } 
                            date={ expense.date } 
                        /> ) )
                } */}
                {/* could also use:

                filteredList.length === 0 && <p>No expenses found.</p>
                filteredList.length > 0 && 
                    filteredList.map( expense => 
                        <ExpenseItem 
                            key={ expense.id }
                            title={ expense.title } 
                            amount={ expense.amount } 
                            date={ expense.date } 
                        /> ) 

                ...instead of the ternary operator used above
                
                OR
                
                for the if statement we did above we would just do:

                        
                
                
                */}
            { expensesContent }
            </Card>
        </div>
    )

};

export default Expenses;