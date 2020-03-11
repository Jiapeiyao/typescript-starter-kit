import React from 'react';

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
    backgroundImage: 'linear-gradient(to right, #003366, #669999)',
};

const textStyle: React.CSSProperties = {
    color: 'white',
    width: '40%',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Arial'
};

export default function Hello() {
    return (
        <div style={containerStyle}>
            <div style={textStyle}>Fontend Starter Kit</div>
        </div>
    );
}

