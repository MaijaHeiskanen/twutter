import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Feed from "./components/feed";

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

  return <Feed items={items} />;
}

export default App;
