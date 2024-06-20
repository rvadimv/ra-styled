import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">

            <Box>
                <StyleBtn>Hello</StyleBtn>
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
`
const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`