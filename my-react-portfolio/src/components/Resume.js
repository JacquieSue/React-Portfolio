import React from 'react';
// import LoginForm from '../LoginForm';

export default function Resume() {
    // console.log('Hello -> loggedIn, loggedIn');

    return (
        <div>
            {/* {loggedIn} ? ( */}
                <div>
                    <h3>Thank you for visiting!</h3>
                    <a href='https://docs.google.com/document/d/1htzLFW8VeeEWYq1OaXThzPVQGpI-QVtsTywXOBWNX6w/edit?usp=sharing'>View my Resume</a>
                    <p>
                        Front end:
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                            <li>responsive design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </p>
                    <p>
                        Back end:
                        <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoD, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                        </ul>
                    </p>
                </div>
            {/* ) */}
        </div>
    )
}