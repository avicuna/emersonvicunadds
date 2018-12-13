import React from 'react';
import MapContainer from "../map/map-container";
import FooterPage from "../footer/footer";
import Header from "./header";
import HomeNav from "../navbars/home-nav";

const Intro = (props) => {
    return (
        <div className="intro">
            <HomeNav/>
            <Header/>
            <h1>Business Intro</h1>
            <MapContainer/>
            <FooterPage/>
            {/*<p>{"Current language is " + props.lang}</p>*/}
            {/*<button type="button">Click Me</button>*/}
        </div>
    );
};

export default Intro;