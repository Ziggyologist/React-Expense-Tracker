import Expenses from "./components/Expenses/Expenses";
// import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 298.55,
      date: new Date(2021, 8, 2),
      category: "car",
    },
    {
      id: "e2",
      title: "Socks",
      amount: 11.0,
      date: new Date(2022, 5, 23),
      category: "clothes",
    },
    {
      id: "e3",
      title: "Udemy Courses",
      amount: 417.89,
      date: new Date(2022, 1, 20),
      category: "education",
    },
    {
      id: "e4",
      title: "New Laptop",
      amount: 969.69,
      date: new Date(2022, 1, 11),
      category: "technology",
    },
  ];
  const addExpenseHandler = function (objectExpense) {
    console.log(objectExpense);
    expenses.push(objectExpense);
    console.log(expenses);
  };
  const categories = expenses.flatMap(expense => expense.category);
  return (
    <div>
      <h2>Budget App</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <div>This is a div</div>
    </div>
  );
}

export default App;
