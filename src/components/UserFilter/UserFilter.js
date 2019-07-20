import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilter, setSort } from '../../store/actions/UserActions';

const UserFilter = props => {
  const handleChangeSort = () => {
    const value = !props.sortstatus;
    console.log(value);
    props.setSort(value);
  };
  const handleChangeFilter = e => {
    const value = e.target.value;
    console.log(value);
    props.setFilter(value);
  };
  return (
    <form className="d-flex justify-content-around mt-5 mb-3">
      <span>
        <label htmlFor="nameSorting" className="mr-3">
          Sort By Name
        </label>
        <input
          id="nameSorting"
          type="checkbox"
          checked={props.sortstatus}
          onChange={() => handleChangeSort()}
        />
      </span>
      <span>
        <label htmlFor="statusFilter" className="mr-3">
          Filter By Status
        </label>
        <select
          id="statusFilter"
          onChange={e => handleChangeFilter(e)}
          className="rounded-pill"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="soft_deleted">Soft_Deleted</option>
        </select>
      </span>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    sortstatus: state.users.sortstatus
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setFilter,
      setSort
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFilter);
