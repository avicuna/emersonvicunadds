import React from 'react';
import MapContainer from "../map/map-container";
import FooterPage from "../footer/footer";
import Header from "./header/header";
import HomeNav from "../navbars/home-nav";
import Intro from "./intro/intro";
import Insurance from "./insurance/insurance";
import Faq from "../faq/faq";

const Home = (props) => {
    const {lang, text} = props;
    const langSwitchEN = (e) => {
        props.langSwitchEN(e);
    };
    const langSwitchES = (e) => {
        props.langSwitchES(e);
    };
    return (
        <div className="home">
            <HomeNav lang={lang} text={text} langSwitchEN={langSwitchEN} langSwitchES={langSwitchES}/>
            <Header text={text}/>
            <Intro lang={lang} text={text}/>
            <Insurance text={text}/>
            <Faq text={text}/>
            <MapContainer/>
            <FooterPage text={text}/>
        </div>
    );
};

export default Home;