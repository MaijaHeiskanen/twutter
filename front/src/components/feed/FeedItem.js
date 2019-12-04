import React, { Component } from "react";

class FeedItem extends Component {
  render() {
    const { name, textContent, date } = this.props;
    return (
      <div className="feed-item">
        <h4 className="name">{name}</h4>
        <p className="text-content">{textContent}</p>
        <p className="date">{date.toString()}</p>
      </div>
    );
  }
}

export default FeedItem;
