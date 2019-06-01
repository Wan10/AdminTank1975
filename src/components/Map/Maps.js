import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 10.762622, lng: 106.660172 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        disableDefaultUI: true
      }}
    >
      <Marker position={{ lat: 10.762622, lng: 106.660172 }} />
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  return (
    <CustomMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCt-R6mjssE2OvNCmd8pc7DEN2BTpzN2eo"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `40vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Maps;
