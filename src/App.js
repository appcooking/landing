import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { AppProvider } from "./components/AppProvider";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <AppProvider>
      <Header>
        <Navbar />
      </Header>
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        React Application
      </main>
    </AppProvider>
  );
}

export default App;
