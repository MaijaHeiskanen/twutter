import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import Feed from "./components/feed";
import SideMenu from "./components/sidemenu";
import CreatePost from "./components/CreatePost";
import Header from "./components/header";
import LogIn from "./components/login";

function createTestData(name, text) {
  return {
    id: Math.random(),
    name: name,
    textContent: text,
    date: new Date()
  };
}

function App() {
  // Test data before backend things exist.
  const items = [
    createTestData("Keijo", "aaaaaa"),
    createTestData("Niilo22", "ON!"),
    createTestData("Kerpele", ":D"),
    createTestData("Kerpele", "A pu a"),
    createTestData("Kerpele", "Orava kiipes puuhun lapio Xd"),
    createTestData("Niilo22", "0/5"),
    createTestData("Keijo", "Nyt loppuu tommonen roskapostaaminen.."),
    createTestData("Kerpele", "ok.")
  ];

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
          <LogIn />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
