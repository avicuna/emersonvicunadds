import React from 'react';
import { Jumbotron } from 'reactstrap';

 const Intro = (props) => {
     let {text} = props;
     return (
         <div className="custom-jumbotron">
             <Jumbotron>
                 <p className="home-intro-1">{text.home.intro.header}</p>
                 <p className="home-intro-2">{text.home.intro.p}</p>
             </Jumbotron>
         </div>
     );
 };

 export default Intro;