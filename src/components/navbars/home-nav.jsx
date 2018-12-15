import React from 'react';
import {Collapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink} from "mdbreact";
import tooth from "../../assets/happytooth.jpg";

class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <>
                <Navbar color="unique-color" dark expand="md" fixed="top" scrolling transparent>
                    <NavbarBrand href="/home">
                        <img src={tooth} alt="happy-tooth" className="logo"/>
                    </NavbarBrand>
                    <NavbarToggler onClick = { this.onClick } />
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                            <NavItem>
                                <NavLink to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/services">General Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/services">Cosmetic Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/forms">Forms</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <MDBDropdown size="sm">
                                    <MDBDropdownToggle nav caret color="primary">
                                        Select Language
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem>English</MDBDropdownItem>
                                        <MDBDropdownItem>Spanish</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </>
        )
    }
}

export default HomeNav;
