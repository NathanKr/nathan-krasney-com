import React from 'react';
// import * as moment from 'moment'

const Event = ({startDt , type , desc}) => {
    const dt = new Date(startDt);
    console.log(dt);
    

    return (
        <div>
            <p>startDt : {startDt}</p>
            <p>type : {type}</p>
            <p>desc : {desc}</p>
        </div>
    );
};

export default Event;