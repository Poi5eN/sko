import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Events from './components/Events';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Media from './components/Media';
import Toppers from './components/Toppers';
import Registration from './components/Registration';
import Gallery from './components/Gallery';
import Books from './components/Books';
import Contact from './components/Contact';
import Home from './components/Home'
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login'

function App() {
  const [mode, setMode] = useState('orange'); //Whether dark is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'orange') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextMod - Dark Mode'
      // setInterval(() =>{
      //   document.title = 'TextMod is amazing';
      // }, 2000);
      // setInterval(() =>{
      //   document.title = 'Install TextMod now';
      // }, 1500);
    }
    else {
      setMode('orange');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextMod - orange Mode'
    }
  }
  return (
    <>
      <Router>
        <Header/>
        <Navbar title="TextMod" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
          <Route exact path="/">
              <Home mode={mode} />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/event">
              <Events showAlert={showAlert} heading="Try TextMod - Word counter, Character Counter, Remove extra Spaces" mode={mode} />
            </Route>
            <Route exact path="/media">
              <Media mode={mode} />
            </Route>
            <Route exact path="/toppers">
              <Toppers mode={mode} />
            </Route>
            <Route exact path="/registration">
              <Registration mode={mode} />
            </Route>
            <Route exact path="/gallery">
              <Gallery mode={mode} />
            </Route>
            <Route exact path="/contact">
              <Contact mode={mode} />
            </Route>
            <Route exact path="/https://shikshakiore.com/popup/booklet%201-4.pdf">
              <Books mode={mode} />
            </Route>
            <Route exact path="/login">
              <Login mode={mode} />
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>

    </>
  );
}

export default App;