import React from 'react';
import MapContainer from "../map/map-container";
import FooterPage from "../footer/footer";
import Header from "./header";

const Intro = () => {
    return (
        <div className="intro">
            <Header/>
            <MapContainer/>
            <FooterPage/>
        </div>
    );
};

export default Intro;