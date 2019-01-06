import React from 'react';
import FooterPage from "../footer/footer";
import MainNav from "../navbars/main-nav";
import Cards from "./cards";

const Forms = (props) => {
    const {lang, text} = props;
    const langSwitchEN = (e) => {
        props.langSwitchEN(e);
    };
    const langSwitchES = (e) => {
        props.langSwitchES(e);
    };

    return (
        <div className="forms">
            <MainNav lang={lang} text={text} langSwitchEN={langSwitchEN} langSwitchES={langSwitchES}/>
            <h1 className="h2 display-3">Forms</h1>
            <Cards lang={lang} text={text}/>
            <FooterPage text={text}/>
        </div>
    )
};
export default Forms;