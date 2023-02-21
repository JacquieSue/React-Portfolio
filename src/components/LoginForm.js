import React, { useState } from 'react';

function LoginForm(props) {
    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    
    const handleInputChange= (e) => {
        const { name, value } e.target,
        const { emailAddress, value } e.target,
        const { message, value } e.target;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Hello ${name}`);
        setName('');
    };


}