import React from 'react';
import FooterPage from "../footer/footer";
import MainNav from "../navbars/main-nav";
import {Button} from 'mdbreact';
import {getMedicalHistory} from '../../firebase';

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
            <h1>Welcome to the forms page</h1>
            <Button onClick={getMedicalHistory}>Click me</Button>
            {/*<a id="download" target="_blank" download="MedicalHistory">Download</a>*/}
            <FooterPage text={text}/>
        </div>
    )
};
export default Forms;