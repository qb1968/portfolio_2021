import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Loading from '../pages/loading/index'
import Project from '../pages/Projects/Projects'

const Nav = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Loading} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        <Route path="*" component={Home} />
            </Switch>
        </Router>
    )
}

export default Nav