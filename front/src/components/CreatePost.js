import React, { Component } from "react";
import { TextArea, Button, Grid, Form } from "semantic-ui-react";

class CreatePost extends Component {
  state = {
    textContent: ""
  };

  saveNewPost() {
    const { onNewPost, currentUser } = this.props;
    onNewPost({
      // TODO: Add user controlling kikkare, tyyliin propseihin tms.
      name: currentUser,
      textContent: this.state.textContent,
      date: new Date()
    });
    this.setState({ textContent: "" });
  }
  render() {
    return (
      <div>
        <Form>
          <TextArea
            style={{ width: "100%", minWidth: "100%", maxWidth: "100%" }}
            rows={3}
            placeholder="Write a post..."
            onChange={(event, data) => {
              this.setState({ textContent: data.value });
              //console.log("state vaihdettu");
            }}
            value={this.state.textContent}
          />
        </Form>
        <Grid>
          <Grid.Row textAlign="right">
            <Grid.Column>
              <Button
                primary
                style={{ clear: "both" }}
                onClick={() => this.saveNewPost()}
              >
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
