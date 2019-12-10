import React, { Component } from "react";
import { TextArea, Button, Grid, Form } from "semantic-ui-react";

export default class WriteName extends Component {
  render() {
    return (
      <div>
        <p>Nickname:</p>
        <Form>
          <TextArea
            style={{ width: "100%", minWidth: "100%", maxWidth: "100%" }}
            placeholder="nick"
            rows="1"
          />
        </Form>
        <Grid>
          <Grid.Row textAlign="right">
            <Grid.Column>
              <Button primary style={{ clear: "both" }}>
                Save
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
