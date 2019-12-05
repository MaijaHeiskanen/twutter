import React, { Component } from "react";

import { Button } from "semantic-ui-react";

class MyProfile extends Component {
  render() {
    return (
      <Button
        primary
        style={{ width: "100%", minWidth: "100%", maxWidth: "100%" }}
      >
        My profile
      </Button>
    );
  }
}

export default MyProfile;
