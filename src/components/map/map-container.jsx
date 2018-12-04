import {Map, Marker, GoogleApiWrapper} from "google-maps-react";
import React from "react";

export class MapContainer extends React.Component {
    render(){
        const style = {
            width: '100%',
            height: '400px'
        };
        const lat = 35.067539;
        const lng = -106.667059;
        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: lat,
                    lng: lng
                }}
                zoom={13}
                scrollwheel={false}
            >
                <Marker
                    title={'Emerson Vicuna DDS'}
                    name={'Emerson Vicuna DDS'}
                    position={{lat: lat, lng: lng}}
                />
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyChaXEys-6elNXJQ0vW9TxXqBquYeJAruA")
})(MapContainer)