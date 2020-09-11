import React from 'react';

let Joke = (props) => {
    return(
        <div >
            <h3 style={{lineHeight: 1}}>Question: {props.jokeQuestion}</h3>
            <h4 style={{lineHeight: 3}}>Punch line: {props.punchLine}</h4>
        </div>
    )
}

export default Joke