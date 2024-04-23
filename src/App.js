// src/App.js

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import Routes and Route
import LoginPage from './components/loginForm'; // Update import path
import TodoHomePage from './components/TodoHomePage';
import TodoCreate from "./components/CreateTask"; // Update import path

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Use Route components directly with the 'element' prop */}
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/todo-home" element={<TodoHomePage/>}/>
                    <Route path="/create" element={<TodoCreate/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
