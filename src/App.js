import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import UserContainer from "./components/user/userContainer/UserContainer";
import CardContainer from "./components/cards/cardContainer/CardContainer";
import { authCheck } from "./utils";
import { getTokenFromCookie } from "./common";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null,
  });

  useEffect(() => {
    console.log("Hello from use effect");
    if (document.cookie) {
      console.log(document.cookie);
      let token = getTokenFromCookie("jwt_token");
      console.log("use effect token", token);
      if (token === false) {
        setUser({
          username: null,
          email: null,
          token: null,
        });
      } else {
        loginWithToken(token, setUser);
      }
    }
  }, []);

  const loginWithToken = async (token, setUser) => {
    const persistentUser = await authCheck(token);
    await setUser(persistentUser);
  };

  return (
    <div className="App">
      <Header user={user} />
      <CardContainer users={users} />
      <UserContainer user={user} setUser={setUser} setUsers={setUsers} />
      <Footer />
    </div>
  );
}

export default App;
