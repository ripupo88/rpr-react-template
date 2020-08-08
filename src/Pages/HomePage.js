import React from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";

export const HomePage = () => {
    return (
        <>
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
        </>
    );
};
