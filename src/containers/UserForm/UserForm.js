import React, { useState, useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

// const intialState = {
//     name: '',
//     email: '',
//     phone: '',
//     Status: 'active',
//     role: 'user'
//   };
const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  phone: yup
    .number()
    .required()
    .max(11)
    .min(7),
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
        setUser(values);
        setTimeout(() => {
          actions.resetForm({
            name: '',
            email: '',
            phone: '',
            Status: 'active',
            role: 'user'
          });
          actions.setSubmitting(false);
        }, 2000);
      }}
      validationSchema={userSchema}
    >
      {props =>
        !props.isSubmitting ? (
          <form onSubmit={props.handleSubmit} className="mmm">
            <Field
              name="name"
              onChange={props.handleChange}
              value={props.values.name}
              type="text"
              placeholder="Enter Name"
              className="userform-input"
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
              className="userform-input"
            />

            {props.errors.email && props.touched.email ? (
              <span className="field_text">{props.errors.email}</span>
            ) : (
              ''
            )}

            <Field
              type="number"
              onChange={props.handleChange}
              name="phone"
              value={props.values.phone}
              placeholder="Enter Phone"
              className="userform-input"
            />

            {props.errors.phone && props.touched.phone ? (
              <span className="field_text">{props.errors.phone}</span>
            ) : (
              ''
            )}
            <Field component="select" name="Status">
              <option value="active">active</option>
              <option value="soft_deleted">soft_deleted</option>
            </Field>

            <Field component="select" name="role">
              <option value="user">user</option>
              <option value="admin">admin</option>
            </Field>

            <button
              type="submit"
              disabled={!props.dirty && !props.isSubmitting}
              className="button"
            >
              Submit
            </button>
            <button
              disabled={!props.dirty}
              onClick={props.handleReset}
              type="button"
              className="button"
            >
              Reset
            </button>
          </form>
        ) : (
          <div className="overlay" />
        )
      }
    </Formik>
  );
}

export default UserForm;
