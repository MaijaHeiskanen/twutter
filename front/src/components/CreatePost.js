import React, { Component } from "react";

class CreatePost extends Component {
  //TODO: Do something for the given input?
  //Maybe save to database and update on the site?
  saveNewPost() {}
  render() {
    return (
      <div>
        <form>
          <label>
            <input type="text" />
          </label>
        </form>
        <input type="submit" value="Post" />
      </div>
    );
  }
}

export default CreatePost;
