import React from 'react';
import Nav from "../navbar/navbar";
import FooterPage from "../footer/footer";
import AboutDentist from "./about-dentist/about-dentist";

class About extends React.Component {
    render(){
        return (
            <>
                <Nav/>
                <p>About page</p>
                <AboutDentist/>
                <FooterPage/>
            </>
        )
    }
}
export default About;
