import React, { Component } from "react";
import { Grid, Divider } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Feed from "./components/feed";
import SideMenu from "./components/sidemenu";
import CreatePost from "./components/CreatePost";
import Header from "./components/header";
import LogIn from "./components/login";

/*
// Useless if backend is done.
function createTestData(name, text) {
  return {
    id: Math.random(),
    name: name,
    textContent: text,
    date: new Date()
  };
}
*/

class App extends Component {
  state = { items: [], currentUser: "anonymous" };

  login() {}

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
    const { items, currentUser } = this.state;

    return (
      <Router>
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
              <Switch>
                <Route path="/login">
                  <LogIn
                    onUserChanged={username =>
                      this.setState({ currentUser: username })
                    }
                  />
                </Route>
                <Route path="/my-blog">
                  <CreatePost
                    onNewPost={newPost => this.createPost(newPost)}
                    currentUser={currentUser}
                  />
                  <Divider />
                  <Feed
                    items={items.filter(item => item.name === currentUser)}
                  />
                </Route>
                <Route path="/" exact>
                  <CreatePost
                    onNewPost={newPost => this.createPost(newPost)}
                    currentUser={currentUser}
                  />

                  <Divider />
                  <Feed items={items} />
                </Route>
                <Route>
                  <p>Error: A pu a</p>
                </Route>
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
