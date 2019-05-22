import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login"

export default function App () {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={Login}/>
        <Footer />
      </div>
    </Router>
  )
}