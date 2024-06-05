import "./App.css"
import 'react-toastify/dist/ReactToastify.css'
import React, { Component } from 'react'
import MainRouter from "./MainRouter"

export class App extends Component {

  render() {
    return (
      <>
        <MainRouter/>
      </>
    )
  }
}

export default App