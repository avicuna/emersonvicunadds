import React from 'react';
import FooterPage from "../footer/footer";
import MainNav from "../navbars/main-nav";

const Contact = (props) => {
    const {lang, text} = props;
    const langSwitchEN = (e) => {
        props.langSwitchEN(e);
    };
    const langSwitchES = (e) => {
        props.langSwitchES(e);
    };
    return (
        <div className="contact">
            <MainNav lang={lang} text={text} langSwitchEN={langSwitchEN} langSwitchES={langSwitchES}/>
            <h1>Welcome to the contact page</h1>
            <FooterPage text={text}/>
        </div>
    )
};
export default Contact;