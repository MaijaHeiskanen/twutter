import React from "react";
import { Container, Grid } from "semantic-ui-react";
import "./App.css";
import Feed from "./components/feed";
import CreatePost from "./components/CreatePost";

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
      <Grid.Row>
        <Grid.Column width={2}>Sivupalkki</Grid.Column>
        <Grid.Column width={14}>
          <CreatePost />
          <Feed items={items} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
