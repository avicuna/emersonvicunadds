import React from 'react';
import FooterPage from "../footer/footer";
import MainNav from "../navbars/main-nav";
import ServiceList from "./service-list";

const Services = (props) => {
    const {lang, text} = props;
    const langSwitchEN = (e) => {
        props.langSwitchEN(e);
    };
    const langSwitchES = (e) => {
        props.langSwitchES(e);
    };
    return (
        <div className="services">
            <MainNav lang={lang} text={text} langSwitchEN={langSwitchEN} langSwitchES={langSwitchES}/>
            <h1 className="display-4">{text.services.header}</h1>
            <ServiceList text={text}/>
            <FooterPage text={text}/>
        </div>
    )
};
export default Services;