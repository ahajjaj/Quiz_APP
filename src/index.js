import React from 'react'
import ReactDOM from 'react-dom'
import Quiz from './Quiz'
import {Login} from './Login'

import './App.css';
import { QuizData } from './QuizData';

function App() {
    return (
        <div className="App">
            <Quiz />
            <Login />
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App></App>, rootElement) 