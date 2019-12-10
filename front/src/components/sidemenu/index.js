import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

export default class SideMenu extends Component {
  render() {
    return (
      <Menu vertical fluid>
        <Menu.Item as="a">
          <Icon name="sign in" />
          Log in
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="user circle" />
          My blog
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="th" />
          Feed
        </Menu.Item>
      </Menu>
    );
  }
}
