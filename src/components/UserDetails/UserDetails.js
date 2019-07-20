import React from 'react';
import { connect } from 'react-redux';

const UserDetails = props => {
  return (
    <React.Fragment>
      <div className="card User-container m-auto ">
        <div className="card-body mt-3">
          Name: <p className="card-text text-info"> {props.user.name}</p>
          Email: <p className="card-text text-info"> {props.user.email}</p>
          Phone Number:{' '}
          <p className="card-text text-info">{props.user.phone}</p>
          User Status:<p className="card-text text-info">{props.user.Status}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

UserDetails.defaultProps = {
  name: 'Not selected',
  email: 'Not selected',
  phone: 'Not selected',
  Status: 'Not selected'
};

const mapStateToProps = state => {
  return {
    user: state.users.selectedUser
  };
};
export default connect(mapStateToProps)(UserDetails);
