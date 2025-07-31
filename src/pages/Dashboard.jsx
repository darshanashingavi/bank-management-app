const Dashboard = () => {
  return (
    <div className="form-container">
      <h2>Bank Dashboard</h2>
      <ul>
        <li><a href="/deposit">Deposit Money</a></li>
        <li><a href="/withdraw">Withdraw Money</a></li>
        <li><a href="/balance">Check Balance</a></li>
      </ul>
    </div>
  );
};

export default Dashboard;
