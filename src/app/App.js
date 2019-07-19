import React from 'react';
import NavBar from '../components/NavBar/';
import { Route, Switch } from 'react-router-dom';
import UserListening from '../containers/UserCardListing/';
import UserForm from '../containers/UserForm/';
import UserDetails from '../components/UserDetails/';
const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/" exact component={UserListening } />
        <Route path="/user/" exact component={UserForm } />
        <Route path="/user/:id" exact component={UserForm } />
        <Route path="/users/:id" exact component={UserDetails} />
        {/* <Route path="/register" exact component={Register} />
          <Route path="/users/authenticate" exact component={Login} /> */}
      </Switch>
    </div>
  );
};

export default App;
