import React, { useContext, useEffect, useState } from 'react'
// import Header from './components/Headers'
import Login from './components/Login'
import Register from './components/Register'
import { UserContext } from './context/UserContext'
import './App.css'
import Table from './components/Table'
// import Home from './components/Home'
import {BasicTable} from './components/table/BasicTable'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header1 from './components/Header1'
import CustomerCreate from './Pages/CustomerCreate'
import Sidebar from "./components/SideBar/Sidebar"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {AboutUs,OurAim,OurVision} from "./Pages/About"
import {Services,ServicesOne,ServicesTwo,ServicesThree} from "./Pages/Services"
import { Events, EventsOne, EventsTwo } from "./Pages/Events";
import Contact from "./Pages/ContactUs";
import Support from "./Pages/Support";





const App = () => {
  const [message, setMessage] = useState("")
  const [token] = useContext(UserContext)
  


  const getWelcomeMessage = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
    const response = await fetch("/api", requestOptions)
    const data = await response.json()

    if (!response.ok) {
      console.log("Some thing when wrong")
    } else {
      setMessage(data.message)
    }
  }
  useEffect(() => {
    getWelcomeMessage()
  }, [])
  return (
    <>
    {/* <LoginIcon/> */}
      {/* <Header title={message} /> */}
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          {
            !token ? (
              <div className="column">
                <Register /><Login/>
              </div>
            ) : (
                <Table />
                // <Header1/>
                // <Sidebar/>
                
                
                
              )
          }
        </div>
      </div>
      
      {/* <Router>
        
        <Switch>
          <Route path="/about-us" exact component={AboutUs}/>
          <Route path="/about-us/aim" exact component={OurAim} />
        <Route path="/about-us/vision" exact component={OurVision} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/services1" exact component={ServicesOne} />
        <Route path="/services/services2" exact component={ServicesTwo} />
        <Route path="/services/services3" exact component={ServicesThree} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/events" exact component={Events} />
        <Route path="/events/events1" exact component={EventsOne} />
        <Route path="/events/events2" exact component={EventsTwo} />
        <Route path="/support" exact component={Support} />
        </Switch>
      </Router> */}
    </>
  )
}

export default App;