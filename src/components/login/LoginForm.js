import React, { Component } from "react"
import style from './style.less'
 
export class LoginForm extends React.PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section id='login-form'>
      <div className={ style.title }>Kutule Login</div>
      <div class='login-content'>
      </div>

      </section>
    )
  }
}