import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyleBtn} from "./components/Button.styled";
import {StyleLink} from "./components/Link.styled";
import {myTheme} from "./styles/Theme.styled";


function App() {
    return (
        <div className="App">

            <Box>


                <StyleBtn color={myTheme.colors.primary} primary>Hello</StyleBtn>
                <StyleBtn color={myTheme.colors.secondary} outlined>Hello</StyleBtn>

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

    @media ${myTheme.media.table} {
        flex-direction: column;

    }
`



