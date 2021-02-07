import React, { Component } from "react";

export default class ErrorBoundary extends Component {

  state = { hasError: false };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1 className="text-center pt-4">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
