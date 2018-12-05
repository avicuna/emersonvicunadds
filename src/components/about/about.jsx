import React from 'react';
import AboutDentist from "./about-dentist/about-dentist";
import FooterPage from "../footer/footer";
import AboutTextEn from "./about-text/about-text-en";

const About = () => {
    return (
        <>
            <AboutDentist/>
            <AboutTextEn/>
            <FooterPage/>
        </>
    )
}
export default About;
