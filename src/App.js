import Expenses from "./components/Expenses/Expenses";
// import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";
const DUMMY_EXPENSES = [
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
    date: new Date(2019, 5, 23),
    category: "clothes",
  },
  {
    id: "e3",
    title: "Udemy Courses",
    amount: 417.89,
    date: new Date(2022, 3, 20),
    category: "education",
  },
  {
    id: "e4",
    title: "New Laptop",
    amount: 669.69,
    date: new Date(2022, 1, 11),
    category: "technology",
  },

  {
    id: "e5",
    title: "Muse Concert",
    amount: 85.99,
    date: new Date(2022, 6, 18),
    category: "travel",
  },
  {
    id: "e6",
    title: "Fix the car",
    amount: 200.0,
    date: new Date(2022, 3, 15),
    category: "car",
  },
];
const App = function () {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = function (expense) {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Budget App</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
