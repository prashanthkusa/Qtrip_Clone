import React from "react";
import "../style.css"
export default class Nav extends React.Component{
    render(){
        return  ( 
           <>


             <div id="nav-div">
                <div id="nav-1">
                    Qtrip
                </div>
                <div id="list-div">
                    <ul>
                        <li>Home</li>
                        <li>Reservations</li>
                        <li id="login-btn">Login Here</li>
                        
                    </ul>
                    <button id="btn-nav">Register</button>



                </div>
                 </div>
           
           </>
        )
    }
}
