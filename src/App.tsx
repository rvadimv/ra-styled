import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyleBtn} from "./components/Button.styled";
import {StyleLink} from "./components/Link.styled";


function App() {
    return (
        <div className="App">

            <Box>
                {/*<StyleBtn color="red" fontSize="20px" >Hello</StyleBtn>
                <StyleBtn color="green">Hello</StyleBtn>
                <StyleBtn fontSize="30px">Hello</StyleBtn>*/}

                <StyleBtn primary>Hello</StyleBtn>
                <StyleBtn outlined>Hello</StyleBtn>

            </Box>


        </div>
    );
}

export default App;


const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
        cursor: pointer;
    }

    ${StyleLink} {
        cursor: zoom-in;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;

    }
`



