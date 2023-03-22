import { useState, useEffect } from "react";

import Header from "./Header";
import Login from "./Login";
import Todo from "./Todo";
import Logout from "./Logout";

const userNameForLog = {
  user: "narupanarts@gmail.com",
  password: "1234567",
  task: [],
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("isLoggedIn");
    if (storedUser === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logInHandler = (enteredEmail, enteredPassword) => {
    console.log(enteredEmail, enteredPassword);
    if (
      enteredEmail === userNameForLog.user &&
      enteredPassword === userNameForLog.password
    ) {
      // Check valid email and password
      localStorage.setItem("isLoggedIn", "1");
      console.log(isLoggedIn);
      setIsLoggedIn(true);
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn && <Logout onLogout={logoutHandler} />}
      {<Header />}
      {!isLoggedIn && <Login onLogin={logInHandler} />}

      {isLoggedIn && <Todo />}
    </div>
  );
};

export default App;
