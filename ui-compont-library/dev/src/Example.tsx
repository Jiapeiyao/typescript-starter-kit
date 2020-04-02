import React from 'react';
import Button from '../../dist/Button';
import '../../dist/themes/default/index.less';

export default function Example() {
    const [text, setText] = React.useState('Hello!');
    return <Button text={text} onClick={() => { setText(text === 'Hello!' ? 'Bye!' : 'Hello!') }}/>;
}