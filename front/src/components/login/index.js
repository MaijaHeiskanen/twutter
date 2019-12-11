import React, { Component } from "react";

import { Input, Button, Grid, Form } from "semantic-ui-react";

export default class LogIn extends Component {
  state = {
    username: ""
  };

  render() {
    return (
      <div>
        <p>Nickname:</p>
        <Form>
          <Input
            fluid
            placeholder="anonymous"
            onChange={(event, data) => {
              this.setState({ username: data.value });
            }}
            value={this.state.username}
          />
        </Form>
        <Grid>
          <Grid.Row textAlign="right">
            <Grid.Column>
              <Button
                primary
                style={{ clear: "both" }}
                onClick={() => {
                  if (this.state.username === "") {
                    this.props.onUserChanged("anonymous");
                  } else {
                    this.props.onUserChanged(this.state.username);
                  }
                }}
              >
                Save
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
