import React from "react"

import { StyledTitle, StyledSubTitle, StyledButton, ButtonGroup } from "./../components/Styles";


const Home = () => {
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "flex-start",
                }}
        >               
        </div>
        <StyledTitle size={65}>Welcome to our website</StyledTitle>
        <StyledSubTitle size={27}>Fell free to explore</StyledSubTitle>

        <ButtonGroup>
            <StyledButton to="/login">Login</StyledButton>
            <StyledButton to="/signup">Signup</StyledButton>
        </ButtonGroup>
        </div>
    )
}

export default Home
     

           



