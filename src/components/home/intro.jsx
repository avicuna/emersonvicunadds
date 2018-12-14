import React from 'react';
import { Jumbotron } from 'reactstrap';

 const Intro = () => {
     return (
         <div className="intro">
             <Jumbotron>
                 <h1 className="intro-header display-3">Welcome to Emerson Vicuna, DDS Family Dentistry</h1>
                 <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
             </Jumbotron>
         </div>
     );
 };

 export default Intro;