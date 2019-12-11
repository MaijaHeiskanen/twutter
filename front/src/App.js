import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import Feed from "./components/feed";
import SideMenu from "./components/sidemenu";
import CreatePost from "./components/CreatePost";
import Header from "./components/header";
import LogIn from "./components/login";

// Useless if backend is done.
function createTestData(name, text) {
  return {
    id: Math.random(),
    name: name,
    textContent: text,
    date: new Date()
  };
}

class App extends Component {
  state = { items: [], currentUser: "anonymous" };

  async fetchPosts() {
    const res = await window.fetch("//localhost:5000/posts");
    const data = await res.json();
    const posts = data.map(post => {
      return {
        ...post,
        date: new Date(post.date)
      };
    });
    this.setState({ items: posts });
  }

  async createPost(newPost) {
    await window.fetch("//localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify(newPost)
    });

    this.fetchPosts();
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { items } = this.state;

    return (
      <Grid container stackable>
        <Grid.Row centered>
          <Grid.Column>
            <Header />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <SideMenu />
          </Grid.Column>
          <Grid.Column width={12}>
            <CreatePost
              onNewPost={newPost => this.createPost(newPost)}
              currentUser={this.state.currentUser}
            />
            <Feed items={items} />
            {
              //TODO: remove login from here. Is only for test purposes.
            }
            <LogIn />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
