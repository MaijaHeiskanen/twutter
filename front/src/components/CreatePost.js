import React, { Component } from "react";
import { TextArea, Button, Grid, Form } from "semantic-ui-react";

class CreatePost extends Component {
  // TODO: Do something for the given input?
  // Maybe save to database and update on the site?
  saveNewPost() {}
  render() {
    return (
      <div>
        <Form>
          <TextArea
            style={{ width: "100%", minWidth: "100%", maxWidth: "100%" }}
            rows={3}
            placeholder="Write a post..."
          />
        </Form>
        <Grid>
          <Grid.Row textAlign="right">
            <Grid.Column>
              <Button primary style={{ clear: "both" }}>
                Post
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default CreatePost;
