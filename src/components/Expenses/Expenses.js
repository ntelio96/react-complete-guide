import React, { useState } from "react";
import Card from "../UI/Card";

import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(filteredYear);
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filteredChangedHandler}
          selected={filteredYear}
        />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
