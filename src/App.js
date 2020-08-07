import React, { Component, useReducer } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import { appContext } from "./Core/context/context";
import { reducer } from "./Core/reducer/reducer";
import { RPRNavbar } from "./Components/RPRNavbar/RPRNavbar";
import { RPRFooter } from "./Components/RPRFooter/RPRFooter";
import { store } from "./Core/store/store";

export const App = () => {
    const [state, dispatch] = useReducer(reducer, store);

    return (
        <appContext.Provider value={{ state, dispatch }}>
            <RPRNavbar />

            <MDBContainer>
                <MDBRow center style={{ height: "100vh" }}>
                    <MDBCol middle={true} sm="8" className="text-center">
                        <h1>RPR Template-React-App</h1>
                        <p className="mb-2">
                            Plantilla de proyecto para aplicaciones web con
                            ReactJS
                        </p>
                        <MDBBtn
                            href="https://mdbootstrap.com/docs/react/"
                            target="blank"
                            color="light-blue"
                        >
                            <strong>Check out our docs!</strong>
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <RPRFooter />
        </appContext.Provider>
    );
};
