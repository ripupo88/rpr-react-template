import React, { useState, useContext } from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBFormInline,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { appContext } from "../../Core/context/context";

export const RPRNavbar = () => {
    const { state, dispatch } = useContext(appContext);
    const { siteName } = state.conf;

    console.log(siteName);
    return <RPRNavbar1 props={{ siteName }} />;
};

const RPRNavbar1 = React.memo(({ props }) => {
    const [isOpen, setisOpen] = useState(false);
    const { siteName } = props;

    const toggleCollapse = () => {
        setisOpen(!isOpen);
    };

    return (
        <Router>
            <MDBNavbar color="elegant-color" dark expand="md" fixed="top">
                <MDBNavbarBrand>
                    <strong>{siteName}</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav black-text left>
                        <MDBNavItem active>
                            <MDBNavLink to="#!">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Features</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Pricing</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Dropdown</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem href="#!">
                                        Action
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href="#!">
                                        Another Action
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href="#!">
                                        Something else here
                                    </MDBDropdownItem>
                                    <MDBDropdownItem href="#!">
                                        Something else here
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBFormInline waves>
                                <div className="md-form my-0">
                                    <input
                                        className="form-control mr-sm-2"
                                        type="text"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </div>
                            </MDBFormInline>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </Router>
    );
});
