import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, message } from 'antd';
import request from 'superagent';

import { UserContext } from '../../contexts';

const UserConsumer = UserContext.Consumer;
const FormItem = Form.Item;

class LoginForm extends Component {
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
      this.setState({ loading: true });
      try {
        const res = await request
          .post('http://jss-placements.herokuapp.com/auth/login')
          .withCredentials()
          .set('Content-Type', 'application/json')
          .send(values);
        this.props.updateUser(res.body.data);
        this.props.history.push('/student/notices');
      } catch (error) {
        this.setState({ loading: false });
        console.log(error);
        if (!error.response) {
          return message.error('Network Error Occurred, Please try again!');
        }
        const resError = error.response.body.error;
        message.error(Object.values(resError));
      }
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
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={this.state.loading}
        >
          Log in
        </Button>
      </Form>
    );
  }
}

const LoginSection = (props) => (
  <UserConsumer>
    {({ updateUser }) => <LoginForm updateUser={updateUser} {...props} />}
  </UserConsumer>
)

const Login = Form.create()(LoginSection);

export { Login };
