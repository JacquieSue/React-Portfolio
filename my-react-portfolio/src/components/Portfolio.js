import React, { useState } from 'react';

export default function Portfolio(props) {
    
        // const cardStyle = {
        //     width: '18rem',
        // };
    
        // return (
        //     <div className="container">
        //         <div className="card" style={cardStyle}>
        //             <img
        //                 className="card-img-1"
        //                 <a href={`Screenshot 2023-03-05 at 5.10.49 PM.png`}</a>
        //                 alt="1"
        //             />
        //             <div className="card-body">
        //                 <h5 className="card-title">Name: {props.name}</h5>
        //                 <p className="card-text">Description: {props.description}</p>
        //                 <p className="card-text">ID: {props.id}</p>
        //                 <a href="#" className="btn btn-primary">
        //                     Adopt {props.name}
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        //    );
    <div>
        <h1>Portfolio</h1>
        <ul>
            <li>
                <div>
                    <h3>Steamin' and Streamin'</h3>
                    <p>Collaborated with a team to create an application that allows a user to find randomly generated movies based on a keyword input and find a food recipe based on another keyword input. This was accomplished with the use of APIs from IMDB for movie information and Edamam for food recipes.  While developing this application, our team was able to strengthen our communication and task delegation skills</p>
                    <ul>
                        <li><a href="https://github.com/FarmFreshYeets/Steamin-And-Streamin">GitHub Repo</a></li>
                        <li><a href="https://farmfreshyeets.github.io/Steamin-And-Streamin/">Live URL</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <h3>Hello Wordl Game</h3>
                    <p>Created a full stack, fully functional and interactive web application as a team.  As a group, we agreed on building an application that would stimulate the mind in a fun and challenging new way by modifying a game-concept that was already familiar, and making it our own</p>
                    <ul>
                        <li><a href="https://github.com/uabcHelloWordl/hello-wordl-game">GitHub Repo</a></li>
                        <li><a href="https://hello-wordl.herokuapp.com/">Live URL</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <h3>Work It!</h3>
                    <p>A workout app to post blogs(In Progress)</p>
                    <ul>
                        <li><a href="https://github.com/arellanoe/workit-app">GitHub Repo</a></li>
                        <li><a href="https://git.heroku.com/work-your-app-off.git">Live URL</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <h3>Professional Portfolio</h3>
                    <ul>
                        <li><a href="https://github.com/JacquieSue/Professional-Portfolio">GitHub Repo</a></li>
                        <li><a href="https://jacquiesue.github.io/Professional-Portfolio/">Live URL</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <h3>Note-Taker</h3>
                    <p>A simple note-taker application</p>
                    <ul>
                        <li><a href="https://github.com/JacquieSue/Note-Taker">GitHub Repo</a></li>
                        <li><a href="https://whispering-wildwood-85860.herokuapp.com/">Live URL</a></li>
                    </ul>
                </div>
            </li>
            <li>
                <div>
                    <h3>E-commerce Back-End</h3>
                    <p>Built a back end for an e-commerce site, and configured an Express API to use Sequelize to interact with a MySQL database.</p>
                    <ul>
                        <li><a href="https://github.com/JacquieSue/E-commerce-Back-End">GitHub Repo</a></li>
                    </ul>
                </div>
            </li>
        </ul>
      </div>
;
}



