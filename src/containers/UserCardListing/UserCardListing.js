import React from 'react';
import { connect } from 'react-redux';
import UserCard from '../../components/UserCard/';
import Error from './Error';
import { bindActionCreators } from 'redux';
import { getAllUsers, deleteUser } from '../../store/actions/UserActions';

class UserCardListing extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state={

  //   }
  // }
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    if (!this.props.userList || !this.props.userList.length) {
      return <Error />;
    }

    const list = this.props.userList.map(u => {
      return (
        <tr className="User-item" key={u.id}>
          <UserCard data={u} delete={() => this.props.deleteUser(u.id)} />
        </tr>
      );
    });

    return (
      <table className="table User-container m-auto">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Controls</th>
          </tr>
        </thead>
        <tbody className="User-item__body">{list}</tbody>
      </table>
    );
  }
}
const mapStateToProps = state => {
  return {
    userList: state.users.filteredList
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllUsers,
      deleteUser
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCardListing);
