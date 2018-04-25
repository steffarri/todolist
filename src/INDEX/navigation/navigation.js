import React, {Component} from 'react';
import logo from '/Users/StephanieGulizia/todolist/src/pictures/logo.svg';
import '/Users/StephanieGulizia/todolist/src/INDEX/navigation/navigation.css';
import Button from 'react-bootstrap/lib/Button';
import Collapse from 'react-bootstrap/lib/Collapse';

class Nav extends Component {
    constructor() {
        super();

        this.state = {open: false}
        

}

    render() {



        return(
            
           <div className="container">
                
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Button type="button" onClick={() => this.setState({open: !this.state.open})} className="navbar-toggle collapsed" 
                                data-toggle="collapse" data-target="#main-menu" aria-expanded="false" id="toggleButton">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                </Button>
                                <a href="/" className="navbar-brand">
                                    <img src={logo} className="App-logo" alt="logo" id="toplogo"/>
                                </a>
                            
              <ul className="bignavbar hidden-xs">
              <li className="active"><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            
       
                                    
                            </div>
                            <Collapse in={this.state.open}>
                            <div id="main-menu" className="collape" >
                                <ul className="smallnav nav navbar-nav navbar-right">
                                    <li className="active"><a href="/home">Home <span className="sr-only">(current)</span></a></li>
                                    <li className="active"><a href="/about">About <span className="sr-only">(current)</span></a></li>
                                    <li className="active"><a href="/contact">Contact <span className="sr-only">(current)</span></a></li>
                                    
                                    </ul>
                                    </div>
                                    </Collapse>      
                        </div>
                    </nav>
            </div>
        );
    }
}

export default Nav;