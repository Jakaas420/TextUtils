import React from 'react';
import './UserOutput.css';

const UserOutput = (props) =>
    {
        return(
            <div className='output'>
                <p >UserName is : {props.UserName}</p>
                {/* <p>Its 2nd Paragraph..</p> */}

            </div>
        )
    };

export default UserOutput;
