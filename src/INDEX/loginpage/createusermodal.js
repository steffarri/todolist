import React, { Component } from 'react';
import '../loginpage/login.css';
import logo from '/Users/StephanieGulizia/todolist/src/pictures/logo.svg';


export default class CreateUserModal extends Component {
    render() {
        return(
            <div className="container">
                <div className="login_form create">
                <img src={logo} className="App-logo" alt="logo" /><br/><br/>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" id="fist" placeholder="First"/>
                        </div>
                        <div className="col-sm-6">
                            <input type="email" id="last" placeholder="Last"/>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                        <input type="text" id="email" placeholder="Email"/><br/>
                        </div>
                        <div className="col-sm-6">
                        <input type="text" id="password" placeholder="Password"/>
                        </div>
                    </div><br/><br/>
                    <button className="back_btn" className="btn btn-primary" onClick={this.props.onBackClickCreate}>Back</button>
                    <button className="createlogin_btn" className="btn btn-primary">Create</button>
                </div>
                
                
                
                </div>
                </div>
        );
    }
}