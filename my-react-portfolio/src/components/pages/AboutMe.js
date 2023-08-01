import React from 'react';


const styles = {
    card: {
        margin: 20,
        background: '#e8eaf6',
        minHeight: '550px',
        padding: '20px'
    },
    content: {
        display: 'flex-box',
        fontSize: 24,
    },
};

export default function Introduction() {
    return (
        <div style={styles.card} >
            <div style={styles.content} >Greetings! I am a full stack web developer, that has experience primarily in JavaScript and MERN. Prior to Web Development, I was working in Customer Service, but have always had a strong desire to obtain new skills and grow exceptionally within a field. I was on the waitlist to begin the Radiology Program at PCC, but switched my field of study to Web Development. As a developer, there is substantial amount of knowledge to access, and with each new skill acquired, I feel my passion growing intensely. My goal is to work with senior developers to enhance my knowledge and continue to develop my skills within this job field, so I can contribute and eventually become a senior developer/engineer myself.
            </div>
        </div>
    );
}