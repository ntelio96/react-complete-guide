import React from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(props) {
    return (
        <Card className='expenses'>

{ props.expenses.map((expense, index) => <ExpenseItem key={index} title={expense.title}
        amount={expense.amount}
        date={expense.date}/>)
      }
        </Card>
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