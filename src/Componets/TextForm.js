import React ,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function TextForm(props) {

    const [Text,SetText] = useState("");

    const UpperClickHandler = () =>
        {
            const newText = Text.toUpperCase();
            SetText(newText);
            props.showAlert("Converted To UpperCase","success");

        }
    const LowerClickHandler = () =>
        {
            const newText = Text.toLowerCase();
            SetText(newText);
            props.showAlert("Converted To LowerCase","success");
        }
    const ClearTextHandler = () =>
        {
            const newText = ('');
            SetText(newText);
            props.showAlert("Clear Succesfull","success");
        }
    const CopyTextHandler = () =>
        {
            let text = document.getElementById("exampleForm.ControlTextarea1");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied !","success");
        }
    const ClickHandler = (event) =>
        {
           SetText(event.target.value);
        }

  return (
    <div>
        <h1  style={{color: props.Mode === 'dark'?'white':'black'}}>{props.heading}</h1>
        <div>
            <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Control as="textarea" style={{backgroundColor: props.Mode === 'dark'?'#1a1625':'white',color: props.Mode === 'dark'?'white':'black'}} value={Text} onChange={ClickHandler} rows={8} />
            </Form.Group>

            </Form>
        <Button className="btn" variant="outline-primary" onClick={UpperClickHandler}>UpperCase</Button>
        <Button className="btn2" variant="outline-primary mx-2"  onClick={LowerClickHandler}>LowerCaseCase</Button>
        <Button className="btn3" variant="outline-primary mx-1"  onClick={CopyTextHandler}>Copy</Button>
        <Button className="btn4" variant="outline-primary mx-2"  onClick={ClearTextHandler}>Reset</Button>


            <div className='container my-3' style={{color: props.Mode === 'dark'?'white':'black'}}>
                <h2>Text Summury</h2>
                <p>{Text.split(" ").length-1} Words and {Text.length} Character Here.</p>
                <p>{0.008* Text.split(" ").length} Minutes.</p>
                <h2>Preview</h2>
                <p>{Text}</p>
            </div>
        </div>
    </div>
  );
}

