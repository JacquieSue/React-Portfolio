import React from 'react';
// import '../styles/Resume.css';
// import LoginForm from '../LoginForm';

const styles = {
    background: {
        background: 'linear-gradient(90deg, #0062ff, #da61ff)',
        height: '100vh',
        width: '100vw'
    },
    content: {
        display: 'flex',
        alignContent: 'left',
        justifyContent: 'left',
        padding: '20px'
    },
    section: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    links: {
        display: 'flex',
        alignContent: 'end',
        justifyContent: 'end',
        padding: '20px'
    }
}

export default function Resume() {
    // console.log('Hello -> loggedIn, loggedIn');
    return (
        <div style={styles.background}>
            {/* {loggedIn} ? ( */}
            {/* <section style={styles.sectionStyles} className='section'> */}
            <h3>Experience and Skills</h3>
            <p
            >
                <div style={styles.content}>
                    Front-end Proficiencies:
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </p>
            <p
            >
                <section style={styles.section}>
                    Back-end Proficiencies:
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoD, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </section>
            </p>
            <div style={styles.links}>
                My Links
                <ul>
                    <li><a href='https://docs.google.com/document/d/1htzLFW8VeeEWYq1OaXThzPVQGpI-QVtsTywXOBWNX6w/edit?usp=sharing'>Resume</a></li>
                    <li><a href='https://github.com/JacquieSue'>GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/jacquelyn-suzette-pulliam-2194a497/'>LinkedIn</a></li>
                </ul>
            </div>
        </div >
    )
}