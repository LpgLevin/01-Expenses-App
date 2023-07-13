import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses( { items } ) {

    const [ filteredYear, setFilteredYear ] = useState( "2020" );
    const [ filterInfoText, setFilterInfoText ] = useState( "2019, 2021 & 2022" );
    function filterChangeHandler( selectedYear ) {
        setFilteredYear( selectedYear );

        if ( selectedYear === "2019" ) {
            setFilterInfoText( "2020, 2021 & 2022" );
        }
        else if ( selectedYear === "2020" ) {
            setFilterInfoText( "2019, 2021 & 2022" );
        }
        else if ( selectedYear === "2021" ) {
            setFilterInfoText( "2019, 2020 & 2022" );
        }
        else if ( selectedYear === "2022" ) {
            setFilterInfoText( "2019, 2020 & 2021" );
        }
    };

    return (

        <div>
            <Card className="expenses" >      
                <ExpensesFilter 
                    selected={ filteredYear }
                    onChangeFilter={ filterChangeHandler } 
                />    
                <p>Data for years { filterInfoText} is hidden.</p>
                <ExpenseItem 
                    title={ items[0].title }
                    amount={ items[0].amount }
                    date={ items[0].date }
                ></ExpenseItem>

                <ExpenseItem 
                    title={ items[1].title }
                    amount={ items[1].amount }
                    date={ items[1].date }
                ></ExpenseItem>

                <ExpenseItem 
                    title={ items[2].title }
                    amount={ items[2].amount }
                    date={ items[2].date }
                ></ExpenseItem>

                <ExpenseItem 
                    title={ items[3].title }
                    amount={ items[3].amount }
                    date={ items[3].date }
                ></ExpenseItem>
            </Card>
        </div>
    )

};

export default Expenses;