import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = (props) => {
    return (
        <button className={props.className}>
            <Link to='/contact'>contact us</Link>
        </button>
    )
}

export default Button;