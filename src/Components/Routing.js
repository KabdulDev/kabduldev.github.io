import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Writings from './Pages/Writings';
import Contact from "./Pages/Contact";


function Routing() {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/writings">Writings</Link>
                <Link to="/contact">Contact</Link>
                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/writings">
                        <Writings />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>

                </Switch>



            </div>
        </Router>
    )
}

export default Routing;