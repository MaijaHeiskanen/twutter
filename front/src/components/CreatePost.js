import React, { Component } from "react";
import { TextArea, Button, Grid, Form } from "semantic-ui-react";

class CreatePost extends Component {
  state = {
    textContent: "",
    charsLeft: 120,
    buttonState: true
  };

  saveNewPost() {
    if (this.state.textContent.length > 0) {
      const { onNewPost, currentUser } = this.props;
      onNewPost({
        // TODO: Add user controlling kikkare, tyyliin propseihin tms.
        name: currentUser,
        textContent: this.state.textContent,
        date: new Date()
      });
      this.setState({ textContent: "", charsLeft: 120, buttonState: true });
    }
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
              if (data.value.length <= 120) {
                this.setState({
                  textContent: data.value,
                  charsLeft: 120 - data.value.length
                });
                //console.log("state vaihdettu");
              }
              if (data.value.length > 0) {
                this.setState({ buttonState: false });
              } else {
                this.setState({ buttonState: true });
              }
            }}
            value={this.state.textContent}
          />
        </Form>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <p>Characters used: {120 - this.state.charsLeft}/120</p>
            </Grid.Column>
            <Grid.Column width={4} textAlign="right">
              <Button
                primary
                style={{ clear: "both" }}
                onClick={() => this.saveNewPost()}
                disabled={this.state.buttonState}
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
