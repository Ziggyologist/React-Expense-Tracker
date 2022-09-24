import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCategory, setCategory] = useState("");

  //////////////   handle Title
  const handleTitle = function (event) {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
  };

  //////////////   Handle Amount
  const handleAmount = e => {
    setEnteredAmount(e.target.value);
    // console.log(e.target.value);
  };

  //////////////   Handle Date
  const handleDate = function (e) {
    setEnteredDate(e.target.value);
    // console.log(e.target.value);
  };

  // ////////////// Handle category
  const handleCategory = function (e) {
    setCategory(e.target.value);
    // console.log(e.target.value);
    if (e.target.value === "car") {
      e.target.classList.add("car");
    } else {
      e.target.classList.remove("car");
    }
  };

  /////////////   Handle Submit
  const handleSubmit = function (e) {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      category: enteredCategory,
    };
    //////////// Pass data to parent
    props.onSaveExpenseData(expenseData);
    /////////// Empty strings
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setCategory("");

    console.log("submitted");
    // console.log(expenseData);
    // console.log(expenseData.category);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={handleTitle}
            placeholder="title"
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmount}
            placeholder="amount"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            onChange={handleDate}
            value={enteredDate}
          />
        </div>

        <div className="new-expense__control">
          <label>Category</label>
          {/* <input
            value={enteredCategory}
            type="text"
            onChange={handleCategory}
            placeholder="category"
          /> */}
          <select name="category" onChange={handleCategory}>
            <option value>-- select an option --</option>
            <option value="home">home</option>
            <option value="car">car</option>
            <option value="education">education</option>
            <option value="clothes">clothes</option>
            <option value="entertainment">entertainment</option>
            <option value="transportation">transportation</option>
            <option value="travel">travel</option>
          </select>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit" onClick={handleSubmit}>
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
