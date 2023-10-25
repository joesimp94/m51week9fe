import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import UserContainer from "./components/user/userContainer/UserContainer";
import CardContainer from "./components/cards/cardContainer/CardContainer";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(`http://localhost:5001/user`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users.");
      }
    } catch (error) {
      console.log("Error fetching users.", error);
    }
  };

  useEffect(() => {
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
