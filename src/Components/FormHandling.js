import React, { Component } from 'react'

export class FormHandling extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       username:'',
       comments:'',
       skill:'React'
    }
  }
  handleusernameChange = (event) =>{
        this.setState({
          username:event.target.value
        })
  }
  handlecommentsChange = (event) =>{
    this.setState({
      comments:event.target.value
    })
  }
  handleskillChange = (event) =>{
    this.setState({
      skill:event.target.value
    })
  }
  submithandler = (event)=>{
   
    alert(`${this.state.username} ${this.state.comments} ${this.state.skill}`)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.submithandler}>
      <div>
        <label>Username</label>
        <input type='text'
               value={this.state.username} 
               onChange={this.handleusernameChange}></input>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.handlecommentsChange}></textarea>

          </div>  
          <div>
            <label>topic</label>
            <select value={this.state.skill} onChange={this.handleskillChange}>
              <option value='react'>React</option>
              <option value='angular'>Angular</option>
              <option value='vue'>Vue</option>
            </select>
            </div>   
            <button type='submit'>Submit</button>  
      </div>
      </form>
    )
  }
}

export default FormHandling