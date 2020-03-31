import React from 'react';

interface ButtonAPI {
    text?: string;
    onClick?: () => void;
}
export default function Button(props: ButtonAPI) {
    const { text, onClick } = props;
    return <button className='ui-button' onClick={onClick}>{text || ''}</button>
}