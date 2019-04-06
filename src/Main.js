import React, { Component } from "react"
import { Route, BrowserRouter } from "react-router-dom"

import { LoginForm } from './components/login/LoginForm'

export class Main extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="content">
                <Route path='/' component={ LoginForm }/>
            </div>
        </BrowserRouter>
    );
  }
}  
