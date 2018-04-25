import React, {Component} from 'react';
import $ from 'jquery';
import '../loginpage/login.css';
//import HomePage from './INDEX/homepage/homepage.js';




export default class LoginPage extends Component {
    constructor() {
        super();
        
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onFocusUser = this.onFocusUser.bind(this);
        this.onFocusPass = this.onFocusPass.bind(this);
        
    }

    
    onLoginClick() {
        console.log("your in the function so its working, so YAY");
        $.ajax({
            url: "http://localhost:5000/api/values",
            data: "json",
            success: function(data) {
               console.log("its works");
               //this.props.history.push('localhost:3000/home')
            },
            error: function(e) {
                console.log(e);
            }
            
        });

    }
    onFocusUser() {
        $('.username').attr('placeholder', '');
    }
    onFocusPass() {
        $('.password').attr('placeholder', '');
    }
    render(){
        
        return(
            <div className="container">
            <div className="login_form">
            <input type="text" placeholder="username" className="username" onFocus={this.onFocusUser}/><br/>
            <input type="text" placeholder="password" className="password" onFocus={this.onFocusPass}/><br/>
            <button id="back_btn" className="btn btn-primary" onClick={this.props.onBackClick}>Back</button>
            <button id="successlogin_btn" className="btn btn-primary" onClick={this.onLoginClick}>Submit</button>
            </div>
            </div>
        );
    }
}




