import React, { Component } from "react";

class FeedItem extends Component {
  render() {
    const { name, textContent, date } = this.props;
    return (
      <div className="feed-item">
        <h3>{name}</h3>
        <p>{textContent}</p>
        <p>{date.toString()}</p>
      </div>
    );
  }
}

export default FeedItem;
