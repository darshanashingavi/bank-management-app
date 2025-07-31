import { useAuth } from "../context/AuthContext";

const Balance = () => {
  const { balance } = useAuth();

  return (
    <div className="form-container">
      <h2>Current Balance</h2>
      <p>₹ {balance}</p>
    </div>
  );
};

export default Balance;
