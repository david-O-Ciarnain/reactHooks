import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'))

function tick(){
    
    const element = (
        <div>
            <h1>this is a clock</h1>
            <h4>the time is {new Date().toLocaleTimeString()}</h4>
        </div>
    );
    root.render(element)
}
setInterval(tick,1000)
root.render(<App />)


