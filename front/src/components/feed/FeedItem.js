import React, { Component } from "react";
import { Card } from "semantic-ui-react";

/*
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
*/

function dateToDMY(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return "" + (d <= 9 ? "0" + d : d) + "." + (m <= 9 ? "0" + m : m) + "." + y;
}

class FeedItem extends Component {
  render() {
    const { name, textContent, date } = this.props;
    return (
      <Card>
        <Card.Content>
          <Card.Meta content={name} />
          <Card.Description content={textContent} />
          <Card.Meta content={dateToDMY(date)} />
        </Card.Content>
      </Card>
    );
  }
}

export default FeedItem;
