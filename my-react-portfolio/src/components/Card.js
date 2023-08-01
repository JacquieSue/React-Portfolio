import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
    card: {
        margin:20,
        background: '#e8eaf6',
    },
    heading: {
        background: '#3f51b5',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
    },
    content: {
        padding: 20,
    },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object

function Card() {
    return (
      <div  style={styles.card}>
        <div style={styles.heading}>Steamin' and Streamin</div>
        <div style={styles.content}>
        Collaborated with a team to create an application that allows a user to find randomly generated movies based on a keyword input and find a food recipe based on another keyword input. This was accomplished with the use of APIs from IMDB for movie information and Edamam for food recipes.  While developing this application, our team was able to strengthen our communication and task delegation skills
        </div>
        </div>
    );
}

export default Card;
    