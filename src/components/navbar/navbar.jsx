import React from 'react';
import { Animation } from "mdbreact";

const Navbar = (props) => (
  <div>
      <Animation type="bounce" infinite>
          <img className="img-fluid" src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"/>
      </Animation>
      <p>Hello World!</p>
  </div>
);
export default Navbar;
