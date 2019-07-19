import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { bindActionCreators } from 'redux';
import { addUser, updateUser } from '../../store/actions/UserActions';
import ShortId from 'shortid';
import {NavLink} from 'react-router-dom';

const userSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .trim(),
  email: yup
    .string()
    .email()
    .required()
    .trim(),
  phone: yup
    .number()
    .required()
    .positive(),
  Status: yup.string().required(),
  role: yup.string().required()
});

function UserForm(props) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    Status: 'active',
    role: 'user'
  });
  return (
    <Formik
      initialValues={user}
      onSubmit={(values, actions) => {
        console.log(actions);
        actions.setSubmitting(true);
        const id = ShortId.generate();
        setUser({ id, ...values });
        props.addUser({ id, ...values });
      }}
      validationSchema={userSchema}
    >
      {props =>
        !props.isSubmitting ? (
          <form onSubmit={props.handleSubmit} className="User-container m-auto">
            <Field
              name="name"
              onChange={props.handleChange}
              value={props.values.name}
              type="text"
              placeholder="Enter Name"
              className="form-control mt-5 "
            />
            {props.errors.name && props.touched.name ? (
              <span className="field_text">{props.errors.name}</span>
            ) : (
              ''
            )}
            <Field
              type="email"
              placeholder="Enter email"
              onChange={props.handleChange}
              name="email"
              value={props.values.email}
              className="form-control mt-3"
            />

            {props.errors.email && props.touched.email ? (
              <span className="field_text">{props.errors.email}</span>
            ) : (
              ''
            )}

            <Field
              type="tel"
              onChange={props.handleChange}
              name="phone"
              value={props.values.phone}
              placeholder="Enter Phone"
              className="form-control mt-3"
            />

            {props.errors.phone && props.touched.phone ? (
              <span className="field_text">{props.errors.phone}</span>
            ) : (
              ''
            )}
            <Field
              component="select"
              name="Status"
              className="form-control mt-3"
            >
              <option value="active">active</option>
              <option value="soft_deleted">soft_deleted</option>
            </Field>

            <Field
              component="select"
              name="role"
              className="form-control mt-3 mb-3"
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </Field>

            <button
              type="submit"
              disabled={!props.dirty && !props.isSubmitting}
              className="btn btn-primary"
            >
              Submit
            </button>
            <button
              disabled={!props.dirty}
              onClick={props.handleReset}
              type="button"
              className="btn btn-dark ml-3"
            >
              Reset
            </button>
          </form>
        ) : (
          <NavLink to="/" exact className=" User-container m-auto">
          You add new user successfully
          </NavLink>
        )
      }
    </Formik>
  );
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addUser,
      updateUser
    },
    dispatch
  );
}
export default connect(
  null,
  mapDispatchToProps
)(UserForm);
