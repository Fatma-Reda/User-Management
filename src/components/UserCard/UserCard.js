import React from 'react';
import Proptype from 'prop-types';
import { NavLink } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

const UserCard = props => {
  let controls = null;
  if (props.currentUser.role === 'admin') {
    controls = (
      <>
        {' '}
        <button type="button" className="btn btn-secondary">
          <NavLink to="/user/:id">
            <i className="fa fa-edit"></i>
          </NavLink>
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => props.delete()}
        >
          <i className="fa fa-trash"></i>
        </button>
      </>
    );
  }
  return (
    <>
      <td className="User-item__body-head">
        {/* <FormattedMessage
                  id="name1"
                  defaultMessage={props.data.name}
                /> */}
        {props.data.name}
      </td>
      <td className="User-item__body-info">{props.data.phone}</td>
      <td className="User-item__body-info">{props.data.email}</td>
      <td>
        {' '}
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">
            <NavLink to="/users/:id">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => props.getuser()}
              >
                <i className="fa fa-eye"></i>
              </button>
            </NavLink>
          </button>
          {controls}
        </div>
      </td>
    </>
  );
};

UserCard.Proptype = {
  name: Proptype.string.isRequired,
  email: Proptype.string,
  phone: Proptype.number,
  lang: Proptype.string.isRequired
};

UserCard.defaultProps = {
  email: 'a@test.com',
  phone: 123456
};

const mapStateToProps = state => {
  return {
    currentUser: state.users.user,
    lang: state.locale.lang
  };
};
export default connect(mapStateToProps)(UserCard);
