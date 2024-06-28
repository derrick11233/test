// import logo from './logo.svg';
// import React, { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import About from "./components/About";
// import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

// let name = "<b>Harry</b>";
function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500); // Alert disappears after 3 seconds
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode has been enable", "success");
      document.title = 'HighTech - Dark Mode';
      // setInterval(() => {
      //   document.title = 'HighTech is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install HighTech Now';
      // }, 1000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enable", "success");
      document.title = 'HighTech - light Mode';
    }
  };
  return (
    <>
      {/* <Navbar title= "HightTech" aboutText= "About HighTech"/> */}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="HighTech" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About />}/> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
