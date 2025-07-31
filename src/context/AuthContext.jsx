import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("bankUser"));
  const [user, setUser] = useState(storedUser || null);
  const [balance, setBalance] = useState(
    Number(localStorage.getItem("balance")) || 0
  );

  useEffect(() => {
    localStorage.setItem("bankUser", JSON.stringify(user));
    localStorage.setItem("balance", balance);
  }, [user, balance]);

  const login = (email, password) => {
    if (user && user.email === email && user.password === password) {
      return true;
    }
    return false;
  };

  const register = (userData) => {
    setUser(userData);
    setBalance(0);
  };

  const deposit = (amount) => setBalance((prev) => prev + amount);
  const withdraw = (amount) => {
    if (amount <= balance) setBalance((prev) => prev - amount);
    else alert("Insufficient balance");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        balance,
        deposit,
        withdraw,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
