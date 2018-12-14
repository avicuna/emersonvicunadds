import React from 'react';
import MapContainer from "../map/map-container";
import FooterPage from "../footer/footer";
import Header from "./header";
import HomeNav from "../navbars/home-nav";
import Intro from "../home/intro";

const Home = (props) => {
    return (
        <div className="home">
            <HomeNav/>
            <Header/>
            <Intro/>
            <MapContainer/>
            <FooterPage/>
            {/*<p>{"Current language is " + props.lang}</p>*/}
            {/*<button type="button">Click Me</button>*/}
        </div>
    );
};

export default Home;