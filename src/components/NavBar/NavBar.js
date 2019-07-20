import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { setLocale } from '../../store/actions/locale';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Seam Labs</span>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink to="/" exact className=" nav-link active">
            <FormattedMessage id="nav.dashboard" defaultMessage="Home" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" nav-link" to="/user/">
            <FormattedMessage id="nav.add" defaultMessage="Add User" />
          </NavLink>
        </li>
        <li className="nav-item  text-white ml-5 ">
          <button  onClick={() => props.setLocale('en')}>
            EN
          </button>{' '}
          |
          <button onClick={() => props.setLocale('ar')}>
            AR
          </button>
        </li>
      </ul>
    </nav>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setLocale
    },
    dispatch
  );
}
export default connect(
  null,
  mapDispatchToProps
)(NavBar);
