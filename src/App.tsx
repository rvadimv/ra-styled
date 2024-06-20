import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyleBtn, SuperBtn} from "./components/Button.styled";
import {StyleLink} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";

function App() {
    return (
        <div className="App">

            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>

            <Box>
                <StyleBtn as={"a"} href={"#"}>Link</StyleBtn>
                <StyleBtn as={StyleLink} href={"#"}>LinkComponenet</StyleBtn>
                <StyleBtn>Hello</StyleBtn>
                <SuperBtn>SuperBtn</SuperBtn>
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
`



