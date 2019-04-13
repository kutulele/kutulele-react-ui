import React, { Component } from "react"
import style from './style.less'
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div className='flex-column-container'>
    <input type={meta.type} className='form__input' placeholder={`${meta.label}`} {...handler()} />
    <div className='form__input--underline-container'>
      <div className='form__input--underline-active'></div>
      <div className='form__input--underline-passive'></div>
    </div>
    <span className='form__warning'>
      {touched && hasError('required') && `${meta.label} is required`}
    </span>
  </div>
)
export class LoginForm extends React.PureComponent {

  loginForm = FormBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  handleReset = () => {
    this.loginForm.reset()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form values", this.loginForm.value)
  }

  constructor(props) {
    super(props)
    this.state = {
      signUpActive: false
    }
  }

  render() {
    return (
      <div className='form__container'>
        <div className='form__card'>
        <div className='form__header'>
          <span className='form__title'>Sign in</span>
        </div>

        <FieldGroup id="form"
          control={this.loginForm}
          render={({ get, invalid }) => (
            <form className='form__login' onSubmit={this.handleSubmit}>

              <FieldControl
                name="username"
                render={TextInput}
                meta={{ label: "Username", type: "text" }}
              />

              <FieldControl
                name="password"
                type="password"
                render={TextInput}
                meta={{ label: "Password", type: "password" }}
              />

              <button className='form__button'
                type="submit"
                disabled={invalid}>

                Sign in
                    </button>
            </form>
          )}
        />
        <div className='signup'>
            <span className='signup__question'>
              Haven't signed up yet?
            </span>
            <div className='signup__iconlist'>
              <img className='signup__icon' src='src/assets/images/icons/facebook-logo.svg' />
              <img className='signup__icon' src='src/assets/images/icons/google-logo.svg' />
            </div>
        </div>
        </div>
      </div>
    );
  }
}