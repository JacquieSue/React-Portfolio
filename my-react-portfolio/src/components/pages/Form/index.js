// import React, { useState } from 'react';
// import './style.css';

// import { checkMessage, validateEmail } from '../../utils/helpers';

// const styles = {
//   content: {
//     display: 'flex',
//     padding: 15,
//     width: '25%',
//     justifyContent: 'center',
//     alignContent: 'center',
//   }
// }

// function Form() {
//   // Create state variables for the fields in the form
//   // We are also setting their initial values to an empty string
//   const [userName, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     // Getting the value and name of the input which triggered the change
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     // Based on the input type, we set the state of either email, username, and password
//     if (inputType === 'userName') {
//       setUserName(inputValue);
//     } else if (inputType === 'email') {
//       setEmail(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//     if (!validateEmail(email) || !userName) {
//       setErrorMessage('Email or username is invalid');
//       // We want to exit out of this code block if something is wrong so that the user can correct it
//       return;
//       // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//     }
//     if (!checkMessage(message)) {
//       setErrorMessage(
//         `You must leave a message, ${userName}`
//       );
//       return;
//     }
//     alert(`Hello ${userName}`);
//     <h5>Thank You for visiting!</h5>
//     // If everything goes according to plan, we want to clear out the input after a successful registration.
//     setUserName('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <div >
//       <p>
//       Thank you for visiting! {userName}
//       </p>
//       <form className="form" style={styles.content}>
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="email"
//         />
//         <input
//           value={userName}
//           name="userName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="username"
//         />
//         <input
//           value={message}
//           name="message"
//           onChange={handleInputChange}
//           type="message"
//           placeholder="message"
//         />
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Form;
