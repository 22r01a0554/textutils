import './App.css';
import React, {useState } from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'; 
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`);
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
    //   setInterval(()=>{
    //     document.title='TextUtils is Amazing Mode';
    // },2000);
    // setInterval(()=>{
    //     document.title='Install TextUtils Now';
    // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }
 

  return (
    <>
      {/* <Router> */}
      <Navbar title="Text Utils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Switch> */}
          {/* If we dont write exact path react will do partial matching butu not complete matching
          if we press home also but react will only go upto users but not upto home
          /users--->Component1
          /users/home---->---->Component2 */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
      </div>
    
    </>
  );
}
export default App;

// import './App.css';
// import React, { useState } from 'react';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   }

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = 'gray';
//       showAlert('Dark mode has been enabled', 'success');
//       document.title = 'TextUtils - Dark Mode';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert('Light mode has been enabled', 'success');
//       document.title = 'TextUtils - Light Mode';
//     }
//   }

//   console.log('Current mode:', mode);

//   return (
//     <Router>
//       <Navbar title="Text Utils" aboutText="About" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className="container my-3">
//         <Switch>
//           <Route path="/about">
//             <About />
//             {console.log('Rendering About component')}
//           </Route>
//           <Route path="/">
//             <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
//             {console.log('Rendering TextForm component')}
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
