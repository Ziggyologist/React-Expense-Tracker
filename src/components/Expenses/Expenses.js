import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFiltueredYear] = useState("2022");

  const filteredData = function (selectedYear) {
    setFiltueredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilter={filteredData} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
