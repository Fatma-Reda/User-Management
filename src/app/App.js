import React from 'react';
import NavBar from '../components/NavBar/';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UserListening from '../containers/UserCardListing/';
import UserForm from '../containers/UserForm/';
import UserDetails from '../components/UserDetails/';
import { IntlProvider } from 'react-intl';
import messages from "../messages";

const App = (props) => {
  return (
    <IntlProvider locale={props.lang} messages={messages[props.lang]}>
      <div className="container-fluid">
        <NavBar />
        <Switch>
          <Route path="/" exact component={UserListening} />
          <Route path="/user/" exact component={UserForm} />
          <Route path="/user/:id" exact component={UserForm} />
          <Route path="/users/:id" exact component={UserDetails} />
        </Switch>
      </div>
    </IntlProvider>
  );
};
const mapStateToProps = state => {
  return {
    lang: state.locale.lang
  };
};

export default connect(mapStateToProps)(App);
