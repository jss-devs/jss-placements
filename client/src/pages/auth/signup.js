import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, message } from 'antd';
import request from 'superagent';

const FormItem = Form.Item;

class SignupForm extends Component {
  state = {
    passwordVisibile: false,
    loading: false
  };

  handlePasswordVisibility = () => {
    this.setState(prevState => ({
      passwordVisibile: !prevState.passwordVisibile
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields(async (error, values) => {
      if (error) {
        return console.error(error);
      }
      console.log('Received values of form: ', values);
      this.setState({ loading: true });
      try {
        await request
          .post('http://jss-placements.herokuapp.com/auth/signup')
          .set('Content-Type', 'application/json')
          .send({
            name: values.name,
            email: values.email,
            password: values.password,
            password_confirmation: values.confirmPassword
          });

        this.props.history.push('/management/placements');
      } catch (error) {
        this.setState({ loading: false });
        if (!error.response) {
          return message.error('Network Error Occurred, Please try again!');
        }
        const resError = error.response.body.error;
        message.error(Object.values(resError));
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} noValidate>
        <FormItem label="Name" style={{ margin: 0 }}>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please enter your name!' }],
            validateTrigger: false
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              placeholder=" John Doe"
            />
          )}
        </FormItem>
        <FormItem label="Email" style={{ margin: 0 }}>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email' }
            ],
            validateTrigger: false
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="email"
              placeholder=" adi**@gmail.com"
            />
          )}
        </FormItem>
        <FormItem label="Password" style={{ margin: 0 }}>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please input your Password!' },
              { min: 8, message: 'Password should be atleast 8 characters!' }
            ],
            validateTrigger: false
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              suffix={
                <Icon
                  type="eye"
                  theme={this.state.passwordVisibile ? 'filled' : 'outlined'}
                  style={{
                    color: this.state.passwordVisibile
                      ? null
                      : 'rgba(0,0,0,.25)'
                  }}
                  onClick={this.handlePasswordVisibility}
                />
              }
              type={this.state.passwordVisibile ? 'text' : 'password'}
              placeholder=" adi123$5"
            />
          )}
        </FormItem>
        <FormItem label="Confirm Password" style={{ margin: 0 }}>
          {getFieldDecorator('confirmPassword', {
            rules: [
              {
                validator: (rule, confirmPassword, cb) => {
                  const password = getFieldValue('password');
                  if (
                    !(password && confirmPassword) ||
                    password !== confirmPassword
                  ) {
                    return cb(rule.message);
                  }
                  cb();
                },
                message: 'Passwords should match'
              }
            ],
            validateTrigger: false
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Link to="/auth/login" style={{ float: 'right' }}>
            Already a member?
          </Link>
        </FormItem>
        <Button
          type="primary"
          htmlType="submit"
          loading={this.state.loading}
          block
        >
          Signup
        </Button>
      </Form>
    );
  }
}

const Signup = Form.create()(SignupForm);

export { Signup };
