import React from 'react';
import {Animation} from 'mdbreact';

const AboutTextEn = () => {
    return (
        <>
            <Animation type="lightSpeedIn" duration="2s">
                <div className="about-text">
                    <p>
                        With over 15 years of experience, Dr. Emerson Vicuña, DDS is a general
                        dentist that loves helping people who are in need of his dental expertise. His patients adore his
                        friendly personality, work ethic, and outstanding results.
                    </p>
                    <p>
                        Hailing from Lima, Peru, Dr. Vicuña earned his Doctor of
                        Dental Surgery degree from The Ohio State University after receiving his BS in Biology and Chemistry from
                        the University of New Mexico. He is also a member of the American Dental Association and Academy of
                        General Dentistry.
                    </p>
                    <p>
                        Since starting his own practice in 2005, Dr. Vicuña has been the only dentist
                        at his practice, which allows patients to get to know him personally and receive personalized care.
                    </p>
                </div>
            </Animation>
        </>
    )
};

export default AboutTextEn;