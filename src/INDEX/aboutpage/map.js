import React, {Component} from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import '/Users/StephanieGulizia/todolist/src/INDEX/aboutpage/map.css'

export default class Map extends Component {
    constructor() {
        super();

        this.initMap = this.initMap.bind(this);
    }

    initMap() {
       
    }

    render() {
        return (
           <div id="map"></div>
               )
    }
            
}



