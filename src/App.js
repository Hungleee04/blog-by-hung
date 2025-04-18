import logo from './logo.svg';
import './App.css';
import {AppLayout} from "./AppLayout";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
