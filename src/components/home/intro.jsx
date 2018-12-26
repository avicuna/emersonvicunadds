import React from 'react';
import { Jumbotron } from 'reactstrap';

 const Intro = (props) => {
     let {text} = props;
     return (
         <div className="intro">
             <Jumbotron>
                 <h1 className="intro-header display-3">{text.home.intro.header}</h1>
                 <p className="lead">{text.home.intro.p1}</p>
             </Jumbotron>
         </div>
     );
 };

 export default Intro;