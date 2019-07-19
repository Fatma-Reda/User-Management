import React from 'react';
import { connect } from 'react-redux';
import UserCard from '../../components/UserCard/';
import Error from './Error';
import { bindActionCreators } from 'redux';
import { getAllUsers, deleteUser } from '../../store/actions/UserActions';
import Pagination from '../../components/Pagination/';

class UserCardListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      usersPerPage: 3
    };
  }
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    if (!this.props.userList || !this.props.userList.length) {
      return <Error />;
    }

    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage;
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
    const currentUsers = this.props.userList.slice(
      indexOfFirstUser,
      indexOfLastUser
    );

    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    const list = currentUsers.map(u => {
      return (
        <tr className="User-item" key={u.id}>
          <UserCard data={u} delete={() => this.props.deleteUser(u.id)} />
        </tr>
      );
    });

    return (
      <>
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
        <Pagination 
          usersPerPage={this.state.usersPerPage}
          totalusers={this.props.userList.length}
          paginate={paginate}
        />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    userList: state.users.userList
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
