import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

/*
export default class SideMenu extends Component {
  render() {
    return (
      <div>
        <LogIn />
        <MyProfile />
      </div>
    );
  }
}
*/

export default class SideMenu extends Component {
  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible
          width="thin"
        >
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
        </Sidebar>
      </Sidebar.Pushable>
    );
  }
}
