import React,{useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


export default function About() {
    const [myStyle,setStyle] = useState({
        color : 'Black',
        backgroundColor : 'White'
    })
    const [btnText,setBtnStyle] = useState("Enable Dark Mode");

    const toggerChange = () =>
        {
            if(myStyle.color === 'black')
                {
                    setStyle({
                        color : 'white',
                        backgroundColor : 'black',
                        border :'1px solid white'
                    },
                    setBtnStyle("Enable Light Mode"))
                }
            else
            {
                setStyle({
                    color : 'black',
                    backgroundColor : 'white',
                    border :'1px solid black'
                },
                setBtnStyle("Enable Dark Mode"))

            }
        }
    

  return (
    <>
    <div className='container' style={myStyle}>
        <h2 className='mx-3 my-3' >About Us</h2>
        <div className='container' >
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" >
                <Accordion.Header >Accordion Item #1</Accordion.Header>
                <Accordion.Body style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={myStyle}>
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        <div className='container'>
            <Button className="btn3 my-3 "onClick={toggerChange} variant="outline-primary"  >{btnText}</Button>
        </div>
    </div>
    </>
  );
}

