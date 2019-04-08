import React, { Component } from "react"
import style from './style.less'
 
export class LoginForm extends React.PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <section id='login-form'>
      <div className={ style.title }>Kutule login</div>
      <div class='login-content'>
      <input type='text' className={ style.textbox }></input>
      </div>

      </section>
    )
  }
}