import React, { Component } from 'react'
import './form.css'

export class Form_Practice extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstname:'',
       lastname:'',
       email:'',
       password:'',
       skills:'',

    }
  }
  handleEmailChange = (event)=>{
      this.setState({
          email:event.target.value
      })
  }
  handleFnameChange = (event)=>{
      this.setState({
          firstname:event.target.value
      })
  }
  handleLnameChange = (event)=>{
      this.setState({
          lastname:event.target.value
      })
  }
  handlePasswordChange = (event)=>{
      this.setState({
          password:event.target.value
      })
  }
  handleSkillsChange = (event)=>{
      this.setState({
          skills:event.target.value
      })
  }
  handleSubmit = (event)=>{
      alert(`${this.state.firstname} 
             ${this.state.lastname} 
             ${this.state.password}
             ${this.state.email}
             ${this.state.skills}`)
      event.preventDefault()
  }
  render() {
    return (
      <div className='form'>
      <form  onSubmit={this.handleSubmit}>
          <div className='fname'>
              <label>First name</label>
              <input type='text' name='first-name' onChange={this.handleFnameChange}></input>
          </div>
          <div className='lname'>
              <br/> <br/>
              <label > Last Name</label>
              <input type='text' name='last-name' onChange={this.handleLnameChange}></input>
          </div>
          <div  className='email'>
              <br/> <br/>
              <label>Email</label>
              <input type='text' name='email' onChange={this.handleEmailChange}></input>
          </div>
          <div className='password'>
              <br/> <br/>
              <label >Password</label>
              <input type='password' name='password' onChange={this.handlePasswordChange}></input>
          </div>
          <div classname='skills'>
              <br/>
              <label>Select your skills [ctrl+select skills]</label>
              <br/>
              <select name='skills' multiple onChange={this.handleSkillsChange}>
                  <option value='react'>React</option>
                  <option value='angular'>Angular</option>
                  <option value='vue'>Vue</option>
                  <option value='node'>Node</option>
                  <option value='html-css-js'>HTML-CSS-JS</option>
              </select>
          </div>
          <div className='file'>
              <br/>
              <label>Upload Resume</label>
              <br/>
              <input type='file' name='image'></input>
              <br/>
          </div>
          <br/>
          
          <input id='submit' type='submit' ></input>
      </form>
      </div>
    )
  }
}

export default Form_Practice