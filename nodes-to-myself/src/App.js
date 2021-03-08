import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header></Header>
      <main style = {{marginTop: 100}}></main>
    </Router>
  );
}

export default App;
