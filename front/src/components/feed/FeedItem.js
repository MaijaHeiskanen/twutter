import React, { Component } from "react";
import { Card } from "semantic-ui-react";

function dateToDMY(date) {
  if (!date) {
    return "";
  }
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return "" + (d <= 9 ? "0" + d : d) + "." + (m <= 9 ? "0" + m : m) + "." + y;
}

class FeedItem extends Component {
  render() {
    const { name, textContent, date } = this.props;
    return (
      <Card style={{ width: "100%", minWidth: "100%", maxWidth: "100%" }}>
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
