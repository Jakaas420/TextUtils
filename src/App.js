import React,{useState} from 'react'
import './App.css';
// import About from './Componets/About.js';
import Navigation from './Componets/Navigation';
import TextForm from './Componets/TextForm.js';
import Notification from './Componets/Notification.js';
// import { Routes, Route } from "react-router-dom"
// import { createRoot } from "react-dom/client";



function App() {
  const [Mode,setMode] = useState('light');


  const [alert,setAlert] = useState({
    msg:"Light Mode Has Been Enable",
    type:"success"
  });

  const showAlert = (messege,type) =>
    {
      console.log(messege,type);
      setAlert ({
        msg:messege,
        type:type
      })
  
    }

  const toggelMode = () =>
    {
      if(Mode === 'dark')
        {
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light Mode Has Been Enable","success");
          document.title="TextUtils-LightMode";
        }
      else
      {
        setMode('dark');
        document.body.style.backgroundColor='#1a1625'; //
        showAlert("Dark Mode Has Been Enable","success");
        document.title="TextUtils-NightMode";

      }
    }


  return (
    <>
      <Navigation Title = "TextUtils"  About="About Us"  Mode={Mode}  toggleMode={toggelMode} />
      <Notification alert={alert} />
{/* <TextForm heading="Enter Text" Mode={Mode} showAlert={showAlert} /> */}



      <div className='container'>

      <TextForm heading="Enter Text" Mode={Mode} showAlert={showAlert} />
        
      {/* <Routes> */}
        {/* <Route exact path="/about" element={ <About/> } /> */}
        {/* <Route exact path="/TextForm" element={<TextForm heading="Enter Text" Mode={Mode} showAlert={showAlert} />} /> */}
      {/* </Routes> */}

      </div>


    </>
  );
}

export default App;








































// function App() {
//   return(
//     <>
//    <nav ClassName="navbar navbar-expand-lg bg-body-tertiary bg-primary">
//   <div ClassName="container-fluid">
//     <a ClassName="navbar-brand" href="/">Navbar</a>
//     <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span ClassName="navbar-toggler-icon"></span>
//     </button>
//     <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
//         <li ClassName="nav-item">
//           <a ClassName="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li ClassName="nav-item">
//           <a ClassName="nav-link" href="/">Link</a>
//         </li>
//       </ul>
//       <form ClassName="d-flex" role="search">
//         <input ClassName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button ClassName="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//  </>
//   );

// }
// export default App;









































// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// import { click } from '@testing-library/user-event/dist/click';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';


// ClassName App extends Component {

//   //PRECTISE SETS..

//   // state = {
//   //     UserName:"Sagathiya"
//   // };
//   //  UserNameChangedHandler = (event) =>
//   //   {
//   //     this.setState({UserName:event.target.value});
//   //   }
//   // render(){
//   //   return(
//   //     <div ClassNameName='App'>
//   //       <UserInput Changed={this.UserNameChangedHandler} curruntName={this.state.UserName}/>
//   //       <UserOutput UserName={this.state.UserName} />
//   //       <UserOutput UserName={this.state.UserName} />
//   //     </div>
//   //   );
//   // }
// // }
//   state = {
//     person:[
//       { id:'abc1', name :'Jaydeep',age :20},
//       { id:'pqr1', name :'Paras' ,age :21},
//       { id:'xyz1', name :'Bhavin' ,age :22}
//     ],
//     showPerson : false
//     // person:{ name:'Jaydeep' ,age:20}
//   }


//   // switchNameHandler = (newName) =>
//   //   {
//   //     console.log('Times Clicked !');
//   //     this.setState({ person:[
//   //       { name :newName ,age :20},
//   //       { name :'Rahul' ,age :21},
//   //       { name :'Bhavin' ,age :22}
//   //     ]});
//   //   }

//   deletePersonHandler = (PersonIndex) =>
//     {
//       // const person = this.state.person;
//       const person = [...this.state.person];
//       person.splice(PersonIndex,1);
//       this.setState({person:person}); 

//     }
//     nameChangedHandler = (event) =>
//       {
//         this.setState({
//            person:[
//           { name :'Utsav' ,age :20},
//           { name :event.target.value ,age :21},
//           { name :'Bhavin' ,age :22}
//         ]});
//       }
//       togglePersonHandler = () =>
//         {
//           const doesshow = this.state.showPerson;
//           this.setState({showPerson: !doesshow});
//         }
//   render(){
//     let person = null;
//     if (this.state.showPerson)
//       {
//         person = (
//           <div>

//             {this.state.person.map((person,Index) =>
//             {
//               return <Person 
//                 click = {() => this.deletePersonHandler(Index)}
//                 name = {person.name} 
//                 age={person.age}
//                 key={person.id} />
//             })}
//              {/* <Person 
//              name={this.state.person[0].name}
//              age={this.state.person[0].age} />
  
//              <Person 
//              name={this.state.person[1].name} 
//              age={this.state.person[1].age} 
//              click={this.switchNameHandler.bind(this,"Brothers")}
//              changed={this.nameChangedHandler} > 
//              </Person>
  
//              <Person
//              name={this.state.person[2].name} 
//              age={this.state.person[2].age} /> */}
//           </div>
//           );
//       }
//     return (
//       <div ClassNameName="App">
//           <h1>Its React App !!</h1>
//           <p>Its Working !!</p>
//           <button onClick = {() =>{this.togglePersonHandler()}} >Submit !</button>
//           {person}  
//       </div>
//     );
//       // return react.createElement('div',{ClassNameName:'App'},react.createElement('h1',null,'Its React Developing !!'),react.createElement('h2',null,"Its JavaScript !!"));
//   }
 
// }

// export default App;
