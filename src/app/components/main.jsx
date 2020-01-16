import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './About';
import { More } from './More';
import {} from '../../../public/css/main.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export const App = function App(){
  return(
    <Router>
    
    <div>
    <Navbar fixed="top" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/more">More</Nav.Link>
        </Nav>
      </Navbar>
    </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/more">
          <More />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Home() {
  return(

    <div style={{paddingTop:'5rem'}}>
      <h2 className="blue">Home</h2>

      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  ) 
}
