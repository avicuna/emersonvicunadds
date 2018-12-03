import React from 'react';
import abq from "../../assets/albuquerque-skyline.jpg";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Mask, View } from 'mdbreact';

class FullPageIntroWithNonFixedTransparentNavbar extends React.Component {
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
            <div>
                <header>
                        <Navbar color="light-blue darken-3" dark expand="md" scrolling>
                            <NavbarBrand href="/">
                                <strong>Navbar</strong>
                            </NavbarBrand>
                            <NavbarToggler onClick = { this.onClick } />
                            <Collapse isOpen = { this.state.collapse } navbar>
                                <NavbarNav left>
                                    <NavItem active>
                                        <NavLink to="#">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#">Link</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="#">Profile</NavLink>
                                    </NavItem>
                                </NavbarNav>
                            </Collapse>
                        </Navbar>
                    <View>
                        <img
                            src={abq}
                            alt="stuff"
                            className="img-fluid"
                        />
                        <Mask overlay="indigo-light"
                              style={{ flexDirection: "column" }}
                              className="flex-center  text-white text-center"
                        >
                            <h1 className="display-4">Emerson Vicuna, DDS Family Dentistry</h1>
                        </Mask>
                    </View>
                </header>

                {/*<img*/}
                    {/*src={abq}*/}
                    {/*alt="stuff"*/}
                    {/*className="img-fluid"*/}
                {/*/>*/}
            </div>
        );
    }
}

export default FullPageIntroWithNonFixedTransparentNavbar;