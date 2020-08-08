// import { Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
  } from "react-google-maps";

function Map() {
    return (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
        //   defaultOptions={{ styles: mapStyles }}
        />
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

class map extends React.Component {
    constructor(props) {
      super(props);
    //   const mapStyles = {
    //     width: '100%',
    //     height: '100%',
    //   };
    }
    render(){
        return (
            <div style={{ width: "100vw", height: "100vh" }}>
                <MapWrapped
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA1YAAJWYr-OO5FtrauV71WtxAtkzcQ-Xw`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default map