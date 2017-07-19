import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <div>
            <Navbar color="faded" light toggleable>
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="/">React Starter</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <Link to="/">
                            <NavItem>
                                Home                        
                            </NavItem>
                        </Link>
                        &nbsp;
                        <Link to="/counter">
                            <NavItem>
                                Counter                        
                            </NavItem>
                        </Link>
                    </Nav>
                </Collapse>
            </Navbar>
            <div className="container">
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default App;