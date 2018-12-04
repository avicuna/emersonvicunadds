import React from 'react';
import {Collapse, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink} from "mdbreact";
import tooth from "../../assets/happytooth.jpg";

class Nav extends React.Component {
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
                <Navbar color="white" expand="md" scrolling>
                    <NavbarBrand href="/intro">
                        <img src={tooth} alt="happy-tooth" className="logo"/>
                    </NavbarBrand>
                    <NavbarToggler onClick = { this.onClick } />
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                            <NavItem active>
                                <NavLink to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">Insurance Providers</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </>
        )
    }


}

export default Nav;
