import React from "react";
import { Grid } from "semantic-ui-react";
import "./App.css";
import Feed from "./components/feed";
import SideMenu from "./components/sidemenu";
import CreatePost from "./components/CreatePost";
import Header from "./components/header";

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
    createTestData("Kerpele", ":D")
  ];

  return (
    <Grid container stackable>
      <Grid.Row centered>
        <Header />
      </Grid.Row>
      <Grid.Row>
        {/* TODO: Miten nää leveyksien säädöt toimii a pu a */}
        <Grid.Column width={4}>
          <SideMenu />
        </Grid.Column>
        <Grid.Column width={12}>
          <CreatePost />
          <Feed items={items} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
