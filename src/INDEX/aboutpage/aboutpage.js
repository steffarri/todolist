import React, {Component} from 'react';
import Nav from '/Users/StephanieGulizia/todolist/src/INDEX/navigation/navigation.js';
import '/Users/StephanieGulizia/todolist/src/INDEX/aboutpage/aboutpage.css';
import Places from './places';
import Map from './map';




export default class AboutPage extends Component {
    render() {
        const location = {
            lat: 40.7575285,
            lng: -73.9884469
        }
       
        return (
            <div>
            
            <Nav/>
            <br/><br/><br/><br/><br/><br/><br/>
            
            <div className="about">

            <div>map map map</div>

            </div>
            <div style={{width:300, height:600, backgroundColor: 'pink'}}>
            <Map />
            </div>
            
            <Places />
            
           
           
          
            </div>






        )
    }

    
               
                
}


    

