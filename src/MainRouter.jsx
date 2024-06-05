import Home from "./components/Home/Home"
import {BrowserRouter as Router,Route,Routes, Navigate} from "react-router-dom"



function MainRouter() {
    return (
      <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
      </Router>
    )
  }
  
  export default MainRouter