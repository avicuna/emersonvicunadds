import React from 'react';
import {Collapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, NavLink} from "mdbreact";
import tooth from "../../assets/happytooth.jpg";

class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }
    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    };

    render() {
        const {text} = this.props;
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
                                <NavLink to="/about">{text.nav.nav1}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/services">{text.nav.nav2}</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/forms">{text.nav.nav3}</NavLink>
                            </NavItem>
                            <NavItem>
                                <MDBDropdown size="sm">
                                    <MDBDropdownToggle nav caret color="primary">
                                        {text.nav.nav5}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        <MDBDropdownItem onClick={this.props.langSwitchEN}>{text.nav.nav6}</MDBDropdownItem>
                                        <MDBDropdownItem onClick={this.props.langSwitchES}>{text.nav.nav7}</MDBDropdownItem>
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
