import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from './components/Header'
import UserProfile from './components/UserProfilePage'
import Tabs from './components/Tabs'
import GuardedRoute from './components/GuardRoute'
import Home from './components/Home'

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const authenticateUser = (authState) => {
    setisAuthenticated(authState);
  }

  useEffect(() => {
    console.log(`Authenticated: ${isAuthenticated}`);
}, [isAuthenticated]);

  return (
    <Router>
      <Header auth={isAuthenticated} authenticate={authenticateUser}></Header>
      <main style = {{marginTop: 30}}></main>
      <Tabs></Tabs>
        <Switch>          
          <Route path="/login">
            <Login authenticate={authenticateUser}></Login>
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
          <GuardedRoute path='/profile' auth={isAuthenticated} component={UserProfile} />
          <Route path="/">

            <Home></Home>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
