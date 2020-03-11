import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

ReactDOM.render(
    React.createElement(hot(App)),
    document.getElementById('app')
);

export default function App() {
    const containerStyle: React.CSSProperties = {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        minWidth: 960,
        minHeight: 540,
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to right, #310524, violet)',
    };

    const textStyle: React.CSSProperties = {
        color: 'white',
        width: '40%',
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'Arial'
    };

    return (
        <div style={containerStyle}>
            <div style={textStyle}>Fontend Starter Kit</div>
        </div>
    );
}