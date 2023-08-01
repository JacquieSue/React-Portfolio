import React from 'react';
// import Card from './Card';

const styles = {
    card: {
        margin: 20,
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

function Card() {
    return (
        <ul>
            < div style={styles.card} >
                <div style={styles.heading}>Steamin and Streamin'</div>
                <div style={styles.content}>
                    Collaborated with a team to create an application that allows a user to find randomly generated movies based on a keyword input and find a food recipe based on another keyword input. This was accomplished with the use of APIs from IMDB for movie information and Edamam for food recipes.  While developing this application, our team was able to strengthen our communication and task delegation skills
                </div>
                <ul>
                    <li><a href="https://github.com/camdenvs/Steamin-And-Streamin">GitHub Repo  </a></li>
                    <li><a href="https://camdenvs.github.io/Steamin-And-Streamin/">  Live URL</a></li>
                </ul>
            </div >
            < div style={styles.card} >
                <div style={styles.heading}>Hello Wordl Game</div>
                <div style={styles.content}>
                    Created a full stack, fully functional and interactive web application as a team.  As a group, we agreed on building an application that would stimulate the mind in a fun and challenging new way by modifying a game-concept that was already familiar, and making it our own
                </div>
                <ul>
                    <li><a href="https://github.com/uabcHelloWordl/hello-wordl-game">GitHub Repo  </a></li>
                    <li><a href="https://hello-wordl.herokuapp.com/">  Live URL</a></li>
                </ul>
            </div >
            < div style={styles.card} >
                <div style={styles.heading}>Work It!</div>
                <div style={styles.content}>
                    A workout app to post blogs (In Progress)
                </div>
                <ul>
                    <li><a href="https://github.com/arellanoe/workit-app">GitHub Repo  </a></li>
                    <li><a href="https://git.heroku.com/work-your-app-off.git">  Live URL</a></li>
                </ul>
            </div >
            < div style={styles.card} >
                <div style={styles.heading}>Portfolio (Front-end)</div>
                <ul>
                    <li><a href="https://github.com/JacquieSue/Professional-Portfolio">GitHub Repo  </a></li>
                    <li><a href="https://jacquiesue.github.io/Professional-Portfolio/">  Live URL</a></li>
                </ul>
            </div >
            < div style={styles.card} >
                <div style={styles.heading}>Note-Taker</div>
                <div style={styles.content}>
                A simple note-taker application
                </div>
                <ul>
                <li><a href="https://github.com/JacquieSue/Note-Taker">GitHub Repo  </a></li>
                <li><a href="https://whispering-wildwood-dfc2935a7bfa.herokuapp.com/">  Live URL</a></li>
                </ul>
                </div >
            < div style={styles.card} >
                <div style={styles.heading}>E-commerce Back-End</div>
                <div style={styles.content}>
                Built a back end for an e-commerce site, and configured an Express API to use Sequelize to interact with a MySQL database
                </div>
                <ul>
                <li><a href="https://github.com/JacquieSue/E-commerce-Back-End">GitHub Repo  </a></li>
                </ul>
                </div >
        </ul>
    )
}

export default Card;









