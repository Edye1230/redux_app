import { deposit, withdraw } from "../../store/monto/action.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    amount: state.amountReducer.amount,
  };
};

const Counter = ({ amount, deposit, withdraw }) => {
  return (
    <div>
      <h1> {amount} </h1>
      <button onClick={() => deposit()}>Depositar 10$</button>
      <button onClick={() => withdraw()}>Retirar 10$</button>
    </div>
  );
};

export default connect(mapStateToProps, { deposit, withdraw })(Counter);
