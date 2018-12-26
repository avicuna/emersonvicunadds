import React from 'react';
import MapContainer from "../map/map-container";
import FooterPage from "../footer/footer";
import Header from "./header";
import HomeNav from "../navbars/home-nav";
import Intro from "../home/intro";
import {Button} from "mdbreact";

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
            <Header/>
            <Intro lang={lang} text={text}/>
            <MapContainer/>
            <FooterPage text={text}/>
            {/*<p>{"Current language is " + props.lang}</p>*/}
            {/*<Button value="English" type="button" onClick={langSwitchEN}>Click Me for English</Button>*/}
            {/*<Button value="Spanish" type="button" onClick={langSwitchES}>Click Me for Spanish</Button>*/}
        </div>
    );
};

export default Home;