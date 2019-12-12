import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { BrowserRouter as Link } from "react-router-dom";

export default class SideMenu extends Component {
  render() {
    return (
      <Menu vertical fluid>
        <Menu.Item as={Link} to="/login">
          <Icon name="sign in" />
          Log in
        </Menu.Item>
        <Menu.Item as={Link} to="/my-blog">
          <Icon name="user circle" />
          My blog
        </Menu.Item>
        <Menu.Item as={Link} to="/">
          <Icon name="th" />
          Feed
        </Menu.Item>
      </Menu>
    );
  }
}
