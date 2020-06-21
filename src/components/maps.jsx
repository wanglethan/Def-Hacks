import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../services/currentLocation'
import Sidebar from './Sidebar'

const google = window.google
const mapStyles = {
    width: '80%',
    height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    //Events
    onMarkerClick = (props, marker, e) =>
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
    })

    mapClicked = (props) => {
    if (this.state.showingInfoWindow) {
        this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        })
        console.log("map was clicked")
    }
    }

    centerMoved = (mapProps, map) => {
        console.log("map was dragged")
    }

    onMouseoverMarker = (props, marker, e) => {
        console.log("marker hovered over")
    }

    render() {
        return (
            <CurrentLocation
                centerAroundCurrentLocation 
                google={this.props.google}

                // Properties
                zoom={11}
                style={mapStyles}
                visible={true}
                className={'map'}

                // Events
                onClick={this.mapClicked}
                onDragend={this.centerMoved}>
                <Sidebar />
                
                <Marker 
                onClick={this.onMarkerClick}
                onMouseover={this.onMouseoverMarker}

                title={"clinic"}
                position={{lat: 43.5, lng: -79.4}}
                name={"Ethan's Walk-in Clinic"} 
                label={"Ethan's Walk-in Clinic"}
                />

                <Marker
                onClick={this.onMarkerClick}
                onMouseover={this.onMouseoverMarker}
                
                title={"clinic"}
                position={{lat: 43.1, lng: -79.2}}
                name={"Angel's Walk-in Clinic"}
                label={"Angels's Walk-in Clinic"}
                />
            
                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                    <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    8 patients are currently here
                    </div>
                </InfoWindow>
            </CurrentLocation>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCR2hVi8wufsDWO5hY7eaTe5zGpV1yeOYM'
})(MapContainer);