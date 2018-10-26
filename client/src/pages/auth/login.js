import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {
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
      this.props.history.push('/student/notices');
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
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
        <FormItem>
          <Link to="/auth/login" style={{ float: 'right' }}>
            Forgot password
          </Link>
        </FormItem>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form>
    );
  }
}

const Login = Form.create()(LoginForm);

export { Login };
