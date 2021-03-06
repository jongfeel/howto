import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
            <Menu inverted fixed="top">
              <Container>
                <Menu.Item header>
                  <img src="../../public/logo.jpg" alt="logo" />
                  Howto
                </Menu.Item>
                <Menu.Item name="Board" />
                {/* <Menu.Item>
                  <Button floated="right" positive inverted content="Create Event" />
                </Menu.Item> */}
                <Menu.Item position="right">
                  <Button basic inverted content="My profile" />
                  <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                </Menu.Item>
              </Container>
            </Menu>
    )
  }
}
export default NavBar;
