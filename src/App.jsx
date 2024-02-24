import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  //useState and function for changing mode
  const [mode, setMode] = useState("success");

  const changeMode = ()=>{
    if(mode === "success"){
      setMode("dark");
      document.body.style.backgroundColor = "#212121";
      document.body.style.color = "white"
    }else{
      setMode("success");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#212121"
    };
  };

  return (
    <>
    <Router>
      <Navbar mode={mode} changeMode={changeMode}/>
      <Switch>
          <Route exact path="/">
            <div className='container'>
              <Textarea />
            </div>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App
