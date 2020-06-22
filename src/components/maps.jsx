import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../services/currentLocation'
import Sidebar from './Sidebar'
import * as clinicData from "../data/defhacks-database-export.json"

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
                
                {clinicData.clinics.map(clinic => (
                    <Marker 
                        onClick={this.onMarkerClick}
                        onMouseover={this.onMouseoverMarker}
                        // animation={1}
                        position={{
                        lat:clinic.clinicLat,
                        lng:clinic.clinicLng}}
                        title={clinic.clinicNumOfPeople}
                        name={clinic.clinicName}
                    />
                ))}

                <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                    <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                    {this.state.selectedPlace.title} patients are currently at this location.


                    </div>
                </InfoWindow>
            </CurrentLocation>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCR2hVi8wufsDWO5hY7eaTe5zGpV1yeOYM'
})(MapContainer);