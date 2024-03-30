import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error('Error caught by ErrorBoundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          "Something went wrong... But we're not quite sure exactly what, we would have fixed it had we not been busy baking you this beautiful cake for your birthday!
          <br />
          <br />
          What? It's not your birthday? Well, I suppose it doesn't need to be.
          <br />
          <br />
          You do like cake don't you?
          <br />
          NO?!? What kind of monster doesn't like cake?
          <br />
          I think I'm going to have to ask you to try again please."
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
