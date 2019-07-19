import React from 'react';
import Proptype from 'prop-types';
import { NavLink } from 'react-router-dom';

const UserCard = props => {
  return (
    <>
      <td className="User-item__body-head">{props.data.name}</td>
      <td className="User-item__body-info">{props.data.phone}</td>
      <td className="User-item__body-info">{props.data.email}</td>
      <td>
        {' '}
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">
            <NavLink to="/users/:id">
              <i className="fa fa-eye"></i>
            </NavLink>
          </button>
          <button type="button" className="btn btn-secondary">
            <NavLink to="/user/:id">
              <i className="fa fa-edit"></i>
            </NavLink>
          </button>
          <button type="button" className="btn btn-secondary" onClick={()=>props.delete()}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </td>
    </>
  );
};

UserCard.Proptype = {
  name: Proptype.string.isRequired,
  email: Proptype.string,
  phone: Proptype.number
};

UserCard.defaultProps = {
  email: 'a@test.com',
  phone: 123456
};

export default UserCard;
