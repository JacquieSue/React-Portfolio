import React from 'react';
// import LoginForm from '../LoginForm';

export default function Resume() {
    console.log('Hello -> loggedIn, loggedIn');

    return (
        <div>
            {/* {loggedIn ? ( */}
                <div>
                    <h3>Thank you visiting!</h3>
                    <a href='/Resume'>View my Resume(COMING SOON!)</a>
                    <p>
                        Front end:
                            <ul>
                                HTML,
                                CSS,
                                JavaScript,
                                JQuery,
                                responsive design,
                                React,
                                Bootstrap
                            </ul>
                    </p>
                    <p>
                        Back end:
                            <ul>
                                APIs,
                                Node,
                                Express,
                                MySQL, Sequelize,
                                MongoD, Mongoose,
                                REST,
                                GraphQL
                            </ul>
                    </p>
                </div>
            {/* )} */}
        </div>
    )
}