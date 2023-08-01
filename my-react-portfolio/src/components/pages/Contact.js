import React, { useState } from 'react';
// import './style.css';

import { validateEmail } from '../../utils/helpers';
// 

const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
    minHeight: '550px',
    padding: '20px'
  },
  content: {
    display: 'flex',
    padding: 15,
    width: '15%',
    justifyContent: 'left',
    alignContent: 'left',
  }
}

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    if (!message) {
      setErrorMessage(
        `You must leave a message, ${userName}`
      );
      return;
    }
    alert(`Thank you for visiting ${userName}!`);
    // <h5>Thank You for visiting!</h5>
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={styles.card}>
        <p>
          Goodbye
        </p>
      <div style={styles.content} >
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="please leave a message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
