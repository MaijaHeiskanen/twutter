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

async function fetchPosts() {
  const res = await window.fetch("//localhost:5000/posts");
  return res.json();
}

class App extends Component {
  state = { items: [] };

  componentDidMount() {
    fetchPosts().then(posts => this.setState({ items: posts }));
  }

  render() {
    // Test data before backend things exist.
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
            <CreatePost />
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
