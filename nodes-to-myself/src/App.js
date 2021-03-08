import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from './components/Header'
import UserProfile from './components/UserProfilePage'
import Tabs from './components/Tabs'

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
            <Tabs></Tabs>
            <p>Images</p>
          </Route>
          <Route path="/links">
            <Tabs></Tabs>
            <p>Links</p>
          </Route>
          <Route path="/todos">
            <Tabs></Tabs>
            <p>ToDos</p>
          </Route>
          <Route path="/notes">
            <Tabs></Tabs>
            <p>Notes</p>
          </Route>
          <Route path="/profile">
            <Tabs></Tabs>
            <UserProfile></UserProfile>
          </Route>
          <Route path="/">
            <Tabs></Tabs>
            <p>Home</p>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
