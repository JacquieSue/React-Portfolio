import React from 'react';
import Portfolio from './Portfolio';

const project = {
    name: 'Steamin and Streamin',
    description: 'Collaborated with a team to create an application that allows a user to find randomly generated movies based on a keyword input and find a food recipe based on another keyword input. This was accomplished with the use of APIs from IMDB for movie information and Edamam for food recipes.  While developing this application, our team was able to strengthen our communication and task delegation skills',
    id: 1,
}
// {
//     name: 'Hello Wordl Game',
//     description: 'Created a full stack, fully functional and interactive web application as a team.  As a group, we agreed on building an application that would stimulate the mind in a fun and challenging new way by modifying a game-concept that was already familiar, and making it our own',
//     id: 2,
// }
// {
//     name: 'Work It!',
//     description: 'A workout app to post blogs',
//     id: 3,
// }
// {
//         name: 'Professional Portfolio',
//         description: '',
//         id: 4,
//     }
//     {
//     name: 'Note-Taker',
//     description: 'A simple note-taker application',
//     id: 5,
// }
// {
//     name: 'E-commerce Back-End',
//     description: 'Built a back end for an e-commerce site, and configured an Express API to use Sequelize to interact with a MySQL database',
//     id: 6,
// }

export default function Display() {
    return (
        <div>
            <Portfolio name={project.name} description={project.description} id={project.id} />
        </div>
    );
}

