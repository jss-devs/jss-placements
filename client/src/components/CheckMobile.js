import React, { Component } from 'react';

class CheckMobile extends Component {
  constructor(props) {
    super(props);
    this.query = window.matchMedia('(max-width: 768px)');
    this.state = {
      isMobile: this.query.matches
    };
  }

  componentDidMount() {
    this.query.addListener(this.monitorSizeChange);
  }

  componentWillUnmount() {
    this.query.removeListener(this.monitorSizeChange);
  }

  monitorSizeChange = query => {
    this.setState({
      isMobile: query.matches
    });
  };

  render() {
    return this.state.isMobile ? this.props.yes : this.props.no;
  }
}

export { CheckMobile };
