import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// 'as Router' creates 'Router' as an alias of 'BrowserRouter'
import Home from "./components/Home"
import About from "./components/About"
import Pricing from "./components/Pricing"
import FindUs from "./components/FindUs"
import ErrorPage from "./components/ErrorPage"
import Choice from "./components/Choice"

import NavBar from './components/NavBar'

const App = ()=> {

  // ### old prop syntax ###
  // const initialPricing = [
  //   {level : "Hobby", cost:0 },
  //   {level : "Startup", cost:10 },
  //   {level : "Enterprise", cost:100 }
  // ];
  // const [PromiseRejectionEvent, setPrices] = useState(initialPrice)
  // ### in html rendering return
  // <Route path="/pricing" element={<Pricing prices={prices}/>}></Route>
  // ### and receive as a prop in "Pricing" element

  

  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/findus" element={<FindUs/>}></Route>
        <Route path="/choices/:choice" element={<Choice/>}></Route>
        {/* similar to 'path="/choice/<choice>" */}

        <Route path="*" element={<ErrorPage/>}></Route> //greedy route
      </Routes>
    </Router>
  )

}

export default App;


// track URL accessed through useState()

// initialise a variable containing the HTML to render

// conditional logic to check for URL being accessed
// then change the variable containing HTML

// render HTML from the variable
