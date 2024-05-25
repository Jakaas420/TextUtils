import React from 'react';

const UserInput = props =>
    {
        // const style = {
        //     color:'black',
        //     fontWeight:"500",
        //     margin:"20px",
        // }
        return <input type='text' onChange={props.Changed} value={props.curruntName} ></input>;
    };

export default UserInput;

