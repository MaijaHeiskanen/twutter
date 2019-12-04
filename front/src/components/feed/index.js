import React, { Component } from "react";
import FeedItem from "./FeedItem";
import "./styles.css";

export default class Feed extends Component {
  render() {
    const { items } = this.props;
    const components = items.map(item => (
      <FeedItem
        key={item.id}
        name={item.name}
        textContent={item.textContent}
        date={item.date}
      />
    ));
    return <div className="feed">{components}</div>;
  }
}
