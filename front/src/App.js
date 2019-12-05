import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Feed from "./components/feed";
import CreatePost from "./components/CreatePost";

function createTestData(name, text) {
  return { name: name, textContent: text, date: new Date() };
}

function App() {
  // Test data before backend things exist.
  const items = [
    createTestData("Keijo", "aaaaaa"),
    createTestData("Niilo22", "ON!"),
    createTestData("Kerpele", ":D")
  ];

  return (
    <div>
      <CreatePost />
      <Feed items={items} />
    </div>
  );
}

export default App;
