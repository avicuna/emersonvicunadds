import React from 'react';
import { Jumbotron } from 'reactstrap';

 const Intro = (props) => {
     let {text} = props;
     return (
         <div className="custom-jumbotron">
             <Jumbotron>
                 <h1 className="intro-header display-4">{text.home.intro.header}</h1>
                 <p className="lead">{text.home.intro.p}</p>
             </Jumbotron>
         </div>
     );
 };

 export default Intro;