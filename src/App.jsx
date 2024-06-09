import "./App.css"
import 'react-toastify/dist/ReactToastify.css'
import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

export class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </>
    )
  }
}

export default App