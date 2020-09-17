import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Map,
    GoogleApiWrapper
} from "react-google-maps";
import { useParams } from 'react-router-dom';


class GMap extends React.Component {
    render(props) {
        const {mapLocation} = this.props;
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>            
            <GoogleMap
                defaultZoom={14}
                defaultCenter={mapLocation}
            >
                <Marker
                    position={{ lat: 21.4508945, lng: 91.9678826 }}
                />
            </GoogleMap>
        ));
        return (
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDV8N5d0AJcKfe6O4vmOXfmPHqXZn44K0U&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}
export default GMap;