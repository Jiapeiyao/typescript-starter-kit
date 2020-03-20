import React from 'react';
import './Hello.css';

const textStyle: React.CSSProperties = {
    color: 'white',
    width: '40%',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Arial'
};

export default function Hello(): JSX.Element {
    return (
        <div className={'hello-container'}>
            <div style={textStyle}>Fontend Starter Kit</div>
        </div>
    );
}

