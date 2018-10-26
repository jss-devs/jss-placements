import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class SignupForm extends Component {
  state = {
    passwordVisibile: false
  };

  handlePasswordVisibility = () => {
    this.setState(prevState => ({
      passwordVisibile: !prevState.passwordVisibile
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (error) {
        return console.error(error);
      }
      console.log('Received values of form: ', values);
      this.props.history.push('/management/placements');
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} noValidate>
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
        <Button type="primary" htmlType="submit" block>
          Signup
        </Button>
      </Form>
    );
  }
}

const Signup = Form.create()(SignupForm);

export { Signup };
