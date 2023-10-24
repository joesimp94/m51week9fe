import "./App.css";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import UserContainer from "./components/user/userContainer/UserContainer";
import CardContainer from "./components/cards/cardContainer/CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />
      <UserContainer />
      <Footer />
    </div>
  );
}

export default App;
