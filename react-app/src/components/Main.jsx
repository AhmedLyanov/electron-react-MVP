import React from "react";
import {NavLink} from 'react-router-dom';


export default function Main(){
    return(
      <div>
           <h1>Main</h1>
           <p>This is Main</p>
           <NavLink to='/edit'>Edit</NavLink>
      </div>
    )
}