
import './App.css';
import { UserProvider } from './userContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';

function App() {
  const [user ,setUser] = useState({isLoggedIn: true});
  return (
    <UserProvider value={[user ,setUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <PrivateRoute path="/destination/:id">
             <Destination/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
