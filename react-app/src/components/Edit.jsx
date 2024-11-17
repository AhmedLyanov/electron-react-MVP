import React from "react";
import {NavLink} from 'react-router-dom';

export default function Edit(){
    return(
      <div>
           <h1>Edit</h1>
           <p>This is Edit</p>
           <NavLink to='/'>Main</NavLink>
      </div>
    )
  }