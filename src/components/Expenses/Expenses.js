import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
        category={props.items[0].category}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
        category={props.items[1].category}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
        category={props.items[2].category}
      />
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
        category={props.items[3].category}
      />
    </Card>
  );
}
export default Expenses;
