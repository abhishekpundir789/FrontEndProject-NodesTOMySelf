import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header></Header>
      <main style = {{marginTop: 30}}></main>
        <Switch>          
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/images">
            <p>Images</p>
          </Route>
          <Route path="/links">
            <p>Links</p>
          </Route>
          <Route path="/todos">
            <p>ToDos</p>
          </Route>
          <Route path="/notes">
            <p>Notes</p>
          </Route>
          <Route path="/profile">
            <p>User Profile</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
