// import logo from './logo.svg';
import "./View/App.css";
import Navbar from "./View/Navbar";
import Flow from "./Flow";
import FlowElk from "./FlowElk";
import "./View/home.css";

function App() {
  return (
    <div className="contain" style={{ display: "flex", flexDirection: "row" }}>
      <Navbar />
      <FlowElk />
    </div>
  );
}

export default App;
