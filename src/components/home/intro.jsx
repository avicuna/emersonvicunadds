import React from 'react';
import { Jumbotron } from 'reactstrap';

 const Intro = (props) => {
     let {text} = props;
     return (
         <div className="intro">
             <Jumbotron>
                 <h1 className="intro-header display-3">{text.home.intro.header}</h1>
                 <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
             </Jumbotron>
         </div>
     );
 };

 export default Intro;