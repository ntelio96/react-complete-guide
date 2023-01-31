import React, { useState } from 'react';
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020')
  
  const filteredChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  console.log(filteredYear)
    return (
    <>
      <Card className='expenses'>
        <ExpensesFilter onChangeFilter = {filteredChangedHandler} selected = {filteredYear}/>
        { props.expenses.map((expense, index) => <ExpenseItem key={index} title={expense.title}
          amount={expense.amount}
          date={expense.date}/>)
        }
        </Card>
        
    </>   

    );
  }
  
  export default Expenses;


  {/* <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
    />
    <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
    />
    <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
    />
    <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
    /> */}