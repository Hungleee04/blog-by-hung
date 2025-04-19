import logo from './logo.svg';
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
