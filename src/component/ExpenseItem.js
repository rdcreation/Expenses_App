import './ExpenseItem.css'
export const ExpenseItem = (props) => {
  return (
    <div className="expenses">
      <div className="expenses-item-description"></div>
      <h2>{props.title}</h2>
      <div className="expenses-item-price">{props.price}</div>
    </div>
  );
};
