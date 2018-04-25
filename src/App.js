import React, { Component } from 'react';
import './style/App.css';
import WelcomeModal from './INDEX/loginpage/welcomemodal.js';
import Nav from './INDEX/navigation/navigation.js';
import LoginPage from './INDEX/loginpage/loginpage.js';
import CreateUserModal from './INDEX/loginpage/createusermodal.js';
import HomePage from './INDEX/homepage/homepage.js';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import AboutPage from './INDEX/aboutpage/aboutpage.js';
import ContactPage from './INDEX/contactpage/contactpage.js';

class App extends Component {
  constructor()
  {
    super();
    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.handleShowUser = this.handleShowUser.bind(this);
    this.handleBackToWelcome = this.handleBackToWelcome.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);
    this.state={
      showWelcome: true,
      showLogin: false,
      showUser: false,
      showHome: false
    }
  }

  handleShowLogin()
  {
    this.setState({
      showLogin: true,
      showWelcome: false,
      showUser: false,
      showHome: false
    });
  }
  handleShowUser() 
  {
    this.setState({
      showUser: true,
      showWelcome: false,
      showLogin: false,
      showHome: false
    });
  }
  handleBackToWelcome() {
    this.setState({
      showUser: false,
      showWelcome: true,
      showLogin: false,
      showHome: false
    });
  }

  handleHomePage() {
    console.log("handlehome");
    this.setState({
      showUser: false,
      showWelcome: false,
      showLogin: false,
      showHome: true
    })
  }



  render() {
    return (
    
      <div className="App">
          <Nav/>

        <br/><br/><br/><br/>
        <br/><br/><br/><br/>

        {this.state.showWelcome && <WelcomeModal
        onShowLogin={this.handleShowLogin} 
        onShowUser = {this.handleShowUser}/>}

      
    
        {this.state.showUser && <CreateUserModal
        onBackClickCreate = {this.handleBackToWelcome}/>}

        {this.state.showLogin && <LoginPage
        onBackClick = {this.handleBackToWelcome}/>}
        
        
       {this.state.showHome && <HomePage
       onLoginClick = {this.handleHomePage}/>}
       
      </div>
    
    );
  }
}
class Cap extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/home' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Router>
    )
  }
}
export default Cap;
