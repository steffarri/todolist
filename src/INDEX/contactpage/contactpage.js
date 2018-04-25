import React, {Component} from 'react';
import Nav from '/Users/StephanieGulizia/todolist/src/INDEX/navigation/navigation.js';
import '/Users/StephanieGulizia/todolist/src/INDEX/contactpage/contactpage.css';
import image from '/Users/StephanieGulizia/todolist/src/pictures/react.png';



export default class ContactPage extends Component {

    
    render() {
        return (
            <div className="main">
            
            <Nav/>
            <br/><br/><br/><br/><br/><br/><br/>
      
            <div className="contactcontainer col-xs-12">

            
            
            <div className="col-xs-6 contact-section">
            <h2 class="contacttitle">Contact Information</h2> <br/>
            <div className="col-xs-3 hidden-xs"><img src={image} width="100" height="130" alt="reactlogo" /></div>
            <div id="content-thanks">Thank you for visiting my page, this is my new pet project in React and learning on how everything works.
            If you have some pointers or any questions, You can click the email me button below
            and I hope you enjoyed the website!</div>
            <br/><br/>
            <div className="btn_class_email">
                <button type="button" className="btn btn-default"><a href="mailto:stgulizia@gmail.com">Email Me</a></button>
            </div>
                
                
            </div>
           

          
          
           </div>
            
           
            </div>
        )
    }
}
