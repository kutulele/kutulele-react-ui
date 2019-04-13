import React, { Component } from "react"
import style from './style.less'
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";

const TextInput = ({ handler, touched, hasError, meta }) => (
  <div className='flex-column-container text-align--left position-relative'>
    <input name={meta.name} id={meta.name} type={meta.type} className='form__input' placeholder={`${meta.placeholder}`} {...handler()} />
    <label htmlFor={meta.name} className='form__input--label'> {meta.label} </label>
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
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  handleReset = () => {
    this.loginForm.reset()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form values", this.loginForm.value)
  }

  updateStateWithValue = (e) => {
    console.log(e);
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
                name="email"
                render={TextInput}
                meta={{ label: "Email", type: "text", name: "email", placeholder: "example@example.com"}}
              />

              <FieldControl
                name="password"
                render={TextInput}
                meta={{ label: "Password", type: "password", name: "password", placeholder: " " }}
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