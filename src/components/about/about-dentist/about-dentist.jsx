import React from 'react';
import {Animation} from 'mdbreact';
import dentist from '../../../assets/EVHeadshot.png';

const AboutDentist = (props) => {
    const {text} = props;
    return (
        <div className="about-dentist">
            <p className="about-dentist-header">{text.about.header}</p>
            <Animation type="zoomInDown" duration="1s">
                <img
                    src={dentist}
                    alt="Dr.Vicuña"
                    width="500"
                    className="img-fluid z-depth-1 rounded-circle headshot"
                />
            </Animation>
        </div>
    )
}
export default AboutDentist;