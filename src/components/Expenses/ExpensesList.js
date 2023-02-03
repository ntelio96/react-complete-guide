import React from "react"

import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'
const ExpensesList = (props) => {

    // if (props.items.length === 0){
    //     return <h2 className="expenses-list__fallback"> Found no expenses</h2>  // this is fine using another way of programming!
    // }
return(
    <>
    {props.expenses.length === 0 && <h2 className="expenses-list__fallback">Found no expenses.</h2> }
        {props.expenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title}
          amount={expense.amount}
          date={expense.date}/>)
        }
    </>
)
}

export default ExpensesList