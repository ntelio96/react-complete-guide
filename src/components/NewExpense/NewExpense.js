import React from "react"
import ExpenseForm from "./ExpenseForm"

import './NewExpense.css'

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => { // callback function to retrieve data stored in ExpenseForm
        const expenseData = {
            ...enteredExpenseData,
            id: Date.now()
        }
        props.onAddExpense(expenseData)
    } 

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense