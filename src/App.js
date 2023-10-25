import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import UserContainer from "./components/user/userContainer/UserContainer";
import CardContainer from "./components/cards/cardContainer/CardContainer";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(`http://localhost:5001/user`);
      const data = await response.json();
      console.log(data);
      await setUsers(data.users);
      console.log(users);
    }

    getUsers();
  }, []);

  return (
    <div className="App">
      <Header />
      <CardContainer users={users} />
      <UserContainer users={users} />
      <Footer />
    </div>
  );
}

export default App;
