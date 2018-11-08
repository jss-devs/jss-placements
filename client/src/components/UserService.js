import React, { Component } from 'react';

import { UserContext } from '../contexts';

const UserProvider = UserContext.Provider;

class UserService extends Component {
  state = {
    user: {
      email: "",
      mobile: null,
      name: "",
      role: [],
      status: false
    },
    updateUser: (newUser) => {
      this.setState({ user: newUser });
    }
  }

  render() {
    return (
      <UserProvider value={this.state}>
        {this.props.children}
      </UserProvider>
    )
  }
};

export { UserService };
