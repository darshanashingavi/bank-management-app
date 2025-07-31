import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Deposit = () => {
  const [amount, setAmount] = useState("");
  const { deposit } = useAuth();

  const handleDeposit = () => {
    const val = Number(amount);
    if (val > 0) {
      deposit(val);
      alert("Amount deposited!");
    } else {
      alert("Enter valid amount");
    }
    setAmount("");
  };

  return (
    <div className="form-container">
      <h2>Deposit Money</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default Deposit;
