import React, { Component } from 'react';
import '../loginpage/login.css';
import $ from 'jquery';
import logo from '/Users/StephanieGulizia/todolist/src/pictures/logo.svg';

export default class WelcomeModal extends Component {
    constructor() {
        super();
    }
  
    render() {

        
        return(     
            <div className="container">
            <div className="login_form">
            <img src={logo} className="App-logo" alt="logo" /><br/><br/>
            <button id="login_btn" className="btn btn-primary" onClick={this.props.onShowLogin}>Log In</button>
            <button id="newuser_btn" className="btn btn-primary"onClick={this.props.onShowUser}>New User</button>
            </div>
           
            </div>
        );  
    
  

}
}
