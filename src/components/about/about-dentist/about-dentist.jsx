import React from 'react';
import dentist from '../../../assets/EVHeadshot.png';

const AboutDentist = () => {
    return (
        <>
            <p>Hello World!</p>
            <img
                src={dentist}
                alt="Dr.Vicuna"
                width="400"
                className="img-fluid z-depth-1 rounded-circle headshot"
            />
        </>
    )
}
export default AboutDentist;