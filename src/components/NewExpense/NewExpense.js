import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"

import './NewExpense.css'

const NewExpense = (props) => {

    const [toggleForm, setToggleForm] = useState(false)

    const renderForm = () => {
        setToggleForm(form => !form)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => { // callback function to retrieve data stored in ExpenseForm
        const expenseData = {
            ...enteredExpenseData,
            id: Date.now()
        }
        props.onAddExpense(expenseData)
    } 

    return(
        <div className="new-expense">
            {toggleForm === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} renderForm={renderForm}/>} 
            {toggleForm === false && <button onClick={renderForm}>Add expense</button>}
        </div>
    )
}

export default NewExpense