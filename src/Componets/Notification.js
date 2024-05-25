import React, { useState } from 'react';

export default function Notification(props) {
  const [show, setShow] = useState(true);
  console.log(props);
  const handleClose = () => {
    setShow(false);
  };
  
  const Capitalized = (word) =>
    {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (

    <>
  
        {show &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>{Capitalized(props.alert.type)}</strong> :{props.alert.msg} 
          <button type="button" className="btn-close" aria-label="Close" onClick={handleClose} ></button>
        </div>
      }
    </>
  );
}


