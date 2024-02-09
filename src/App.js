import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";

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
