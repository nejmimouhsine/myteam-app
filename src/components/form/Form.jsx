import React from 'react';
import './Form.scss';

const Form = () => {
    return (
        <form method='post' className='form'>
            <input type='text' placeholder='Name' className='form_input' />
            <input type='email' placeholder='Email Adress' className='form_input' />
            <input type='text' placeholder='Company Name' className='form_input' />
            <input type='text' placeholder='Title' className='form_input' />
            <textarea type='text' placeholder='Message' className='form_input form_textarea' />
            <button type='submit' className='form_button'>submit</button>
        </form>
    )
}

export default Form;