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
  const [mode, setMode] = useState("dark");

  const changeMode = ()=>{
    if(mode === "dark"){
      setMode("success");
      document.body.style.backgroundColor = "#212121";
      document.body.style.color = "white"
    }else{
      setMode("dark");
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
              <Textarea mode={mode}/>
            </div>
          </Route>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
      </Switch>
    </Router>
    </>
  )
}

export default App
