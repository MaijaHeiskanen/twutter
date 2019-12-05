import React, { Component } from "react";

import { Button } from "semantic-ui-react";

class LogIn extends Component {
  render() {
    return (
      <Button
        primary
        style={{
          width: "100%",
          minWidth: "100%",
          maxWidth: "100%"
        }}
      >
        Log in
      </Button>
    );
  }
}

export default LogIn;
