import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Checkbox, Typography } from 'antd';
import { Icon } from '@ant-design/compatible';
import { useDispatch } from "react-redux";
import '../../App.css';
import '../../Form.css';

const { Title } = Typography;

function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit))
            .then(response => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem('userId', response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                }
                props.history.push("/");
              } else {
                setFormErrorMessage('Check out your Account or Password again')
              }
            })
            .catch(err => {
              setFormErrorMessage('Check out your Account or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
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

            <p className="heading">Log In</p>
            <form className="form" onSubmit={handleSubmit} style={{ width: '102%' }}>

              <Form.Item required>
                <label className="form-label1">
                  EMAIL
                </label>

                <div className="form-input">
                  <input
                    id="email"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Enter your email"
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
                      style={{
                        color: 'red',
                      }}>
                      {errors.email}
                    </div>
                  )}
                </div>
              </Form.Item>

              <Form.Item required>
                <label className="form-label">
                  PASSWORD
              </label>

                <div className="form-input">
                  <input
                    id="password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                      style={{
                        color: 'red'
                      }}>
                      {errors.password}
                    </div>
                  )}
                </div>
              </Form.Item>

              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}

              <div className="form-input" style={{ paddingTop: "30px" }}>
                <Form.Item>
                  <Checkbox id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >Remember me</Checkbox>
                  <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' }}>
                    Forgot you password?
                  </a>
                  <div style={{ paddingTop: "30px" }}>
                    <button
                      type="primary"
                      htmlType="submit"
                      className="form-input-btn"
                      disabled={isSubmitting}
                      onSubmit={handleSubmit}
                      style={{ width: "102%" }}
                    >
                      SIGN IN
                  </button>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    Don't have an account? <a href="/register">Register now!</a>
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

export default withRouter(LoginPage);


