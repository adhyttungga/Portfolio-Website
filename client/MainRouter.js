import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from './core/Home'
import Menu from './core/Menu'
import Footer from './core/Footer'
import Contact from './core/Contact'
import Resume from './core/Resume'

const MainRouter = () => {
    return (
        <div>
            <Menu/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/resume' component={Resume}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default MainRouter