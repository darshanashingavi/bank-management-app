import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const { withdraw } = useAuth();

  const handleWithdraw = () => {
    const val = Number(amount);
    if (val > 0) {
      withdraw(val);
    } else {
      alert("Enter valid amount");
    }
    setAmount("");
  };

  return (
    <div className="form-container">
      <h2>Withdraw Money</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
