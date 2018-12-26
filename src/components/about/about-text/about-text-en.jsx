import React from 'react';
import {Animation} from 'mdbreact';

const AboutTextEn = (props) => {
    const {text} = props;
    return (
        <>
            <Animation type="lightSpeedIn" duration="2s">
                <div className="about-text">
                    <p>
                        {text.about.p1}
                    </p>
                    <p>
                        {text.about.p2}
                    </p>
                    <p>
                        {text.about.p3}
                    </p>
                </div>
            </Animation>
        </>
    )
};

export default AboutTextEn;