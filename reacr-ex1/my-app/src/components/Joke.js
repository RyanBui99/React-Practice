import React from 'react';

let Joke = (props) => {
    return(
        <div>
            <h3>Question: {props.jokeQuestion}</h3>
            <h4>Punch line: {props.punchLine}</h4>
        </div>
    )
}

export default Joke