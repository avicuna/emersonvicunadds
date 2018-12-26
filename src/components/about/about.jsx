import React from 'react';
import AboutDentist from "./about-dentist/about-dentist";
import FooterPage from "../footer/footer";
import AboutTextEn from "./about-text/about-text-en";
import MainNav from "../navbars/main-nav";

const About = (props) => {
    const {lang, text} = props;
    const langSwitchEN = (e) => {
        props.langSwitchEN(e);
    };
    const langSwitchES = (e) => {
        props.langSwitchES(e);
    };
    return (
        <>
            <MainNav lang={lang} text={text} langSwitchEN={langSwitchEN} langSwitchES={langSwitchES}/>
            <AboutDentist text={text}/>
            <AboutTextEn text={text}/>
            <FooterPage text={text}/>
        </>
    )
}
export default About;
