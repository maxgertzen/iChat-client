import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import Entrance from './pages/Entrance';
import Lobby from './pages/Lobby';
import './App.css';

function App() {
    const [response, setResponse] = useState("")
    // useEffect(() => {
    //     const socket = io('http://localhost:8000');
    //     socket.on('FromAPI', data => {
    //         setResponse(data)
    //     })
    // }, [])
    return (
        <div className="App">
            {false ? <Entrance /> : <Lobby />}
        </div>
    );
}

export default App;
