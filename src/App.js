import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter, Route, Routes}from "react-router-dom";


function App() {
  const[mode, setMode]= useState('light');//whether dark mode is enabnle or not
  const[alert, setAlert]=useState(null);
// Method
  const showAlert =(message, type) =>{
      setAlert({
        msg:message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#461036';
      showAlert("Dark mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextUtils - amazing Mode";
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  
  return (
    <>
  <BrowserRouter>
    <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path='/' element={<About/>}/>
          <Route exact path='/text'  element = {<TextForm heading = "Enter the text to analize" mode={mode} showAlert={showAlert} /> }/> 
     </Routes>
  </div>
  </BrowserRouter>
   </>
  );
}

export default App;
