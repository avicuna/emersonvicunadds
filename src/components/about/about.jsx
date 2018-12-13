import React from 'react';
import AboutDentist from "./about-dentist/about-dentist";
import FooterPage from "../footer/footer";
import AboutTextEn from "./about-text/about-text-en";
import MainNav from "../navbars/main-nav";

const About = () => {
    return (
        <>
            <MainNav/>
            <AboutDentist/>
            <AboutTextEn/>
            <FooterPage/>
        </>
    )
}
export default About;
