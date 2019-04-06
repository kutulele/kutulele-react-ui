import React, { Component } from "react"
import { Route, BrowserRouter } from "react-router-dom"

import { HW } from './components/HelloWorld'

export class Main extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="content">
                <Route path='/' component={ HW }/>
            </div>
        </BrowserRouter>
    );
  }
}  
