import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">

            <Menu>
                <ul>
                    <li><a href="#">menu item 1</a></li>
                    <li><a href="#">menu item 2</a></li>
                    <li><a href="#">menu item 3</a></li>
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

const StyleBtn = styled.button`
    border: none;
    background-color: blueviolet;
    padding: 10px 20px;
    border-radius: 5px;
    color: aliceblue;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: brown;
    }

    &:last-child {
        background-color: darkslateblue;
    }
`

const StyleLink = styled.a`
    color: aquamarine;
    font-size: 2rem;
    font-weight: bold;
    background: transparent;
    padding: 0;
`

const SuperBtn = styled(StyleBtn)`
    background: aqua;
    color: #363434;
`

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

const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;

        li > a {
            color: #264706;
        }

        li + li {
            margin-left: 20px;
        }
    }
`

