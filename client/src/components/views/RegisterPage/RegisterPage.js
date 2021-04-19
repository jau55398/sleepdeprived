import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import '../../App.css';
import '../../Form.css';
import {
  Form,
  Input
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        email: '',
        lastName: '',
        name: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required('Name is required'),
        lastName: Yup.string()
          .required('Last Name is required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            lastname: values.lastname,
            image: null
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/");
            } else {
              alert(response.payload.err.errmsg)
            }
          })

          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <p className="heading">Create Account</p>

            <form className="form" onSubmit={handleSubmit}>

              <Form.Item required>
                <label className="form-label1">
                  FIRST NAME
                </label>
              <div className="form-input">
                <Input
                  id="name"
                  placeholder="Enter your First Name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    display: "inline-block",
                    marginleft: "auto",
                    marginright: "auto",
                    paddingleft: "10px",
                    outline: "black",
                    borderradius: "2px",
                    height: "40px",
                    width: "102%"
                  }}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div 
                    className="input-feedback"
                    style={{color: 'red'}}
                  >
                    {errors.name}
                  </div>
                )}
              </div>
              </Form.Item>

              <Form.Item required>
                <label className="form-label">
                  LAST NAME
                </label>

              <div className="form-input">
                <Input
                  id="lastName"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    display: "inline-block",
                    marginleft: "auto",
                    marginright: "auto",
                    paddingleft: "10px",
                    outline: "black",
                    borderradius: "2px",
                    height: "40px",
                    width: "102%"
                  }}
                  className={
                    errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div 
                  className="input-feedback"
                  style={{color: 'red'}}
                  >
                    {errors.lastName}
                  </div>
                )}
              </div>
              </Form.Item>

              <Form.Item hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <label className="form-label">
                  EMAIL
                </label>
              
              <div className="form-input">
                <Input
                  id="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    display: "inline-block",
                    marginleft: "auto",
                    marginright: "auto",
                    paddingleft: "10px",
                    outline: "black",
                    borderradius: "2px",
                    height: "40px",
                    width: "102%"
                  }}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div 
                  className="input-feedback"
                  style={{color: 'red'}}
                  >
                  {errors.email}
                </div>
                )}
              </div>
              </Form.Item>

              <Form.Item required hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                <label className="form-label">
                  PASSWORD
                </label>

              <div className="form-input">
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    display: "inline-block",
                    marginleft: "auto",
                    marginright: "auto",
                    paddingleft: "10px",
                    outline: "black",
                    borderradius: "2px",
                    height: "40px",
                    width: "102%"
                  }}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div 
                  className="input-feedback"
                  style={{color: 'red'}}
                  >
                  {errors.password}
                </div>
                )}
              </div>
              </Form.Item>

              <Form.Item required hasFeedback>
                <label className="form-label">
                  CONFIRM PASSWORD
                </label>

              <div className="form-input">
                <Input
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    display: "inline-block",
                    marginleft: "auto",
                    marginright: "auto",
                    paddingleft: "10px",
                    outline: "black",
                    borderradius: "2px",
                    height: "40px",
                    width: "102%"
                  }}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div 
                  className="input-feedback"
                  style={{color: 'red'}}
                >
                  {errors.confirmPassword}
                </div>
                )}
              </div>
              </Form.Item>

              <div className="form-input">
              <Form.Item>
              <div style={{paddingTop: "30px"}}>
                <button 
                  onClick={handleSubmit} 
                  type="primary" 
                  disabled={isSubmitting}
                  className="form-input-btn"
                  style={{width:"102%"}}
                  >
                  CREATE ACCOUNT
                </button>
                </div>
              </Form.Item>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};


export default RegisterPage
