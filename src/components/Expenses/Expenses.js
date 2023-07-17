import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses( { items } ) {

    const [ filteredYear, setFilteredYear ] = useState( "2020" );
   
    // let filterInfoText = "2019, 2021 & 2022";

    // if ( filteredYear === "2019" ) {
    //     filterInfoText = "2020, 2021 & 2022";
    // }
    // else if ( filteredYear === "2020" ) {
    //     filterInfoText = "2019, 2021 & 2022";
    // }
    // else if ( filteredYear === "2021" ) {
    //     filterInfoText = "2019, 2020 & 2022";
    // }
    // else if ( filteredYear === "2022" ) {
    //     filterInfoText = "2019, 2020 & 2021";
    // }


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
                {/* <p>Data for years { filterInfoText } is hidden.</p> */}
                { items.map( expense => <ExpenseItem 
                    title={ expense.title } 
                    amount={ expense.amount } 
                    date={ expense.date } 
                /> ) } 
            
            </Card>
        </div>
    )

};

export default Expenses;