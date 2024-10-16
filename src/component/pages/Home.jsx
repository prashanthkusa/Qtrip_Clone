import React, { Component } from "react";
export default class Home extends Component{
    render(){
        return(
            <div id="b-home">
                <div id="b-home1"> 
                    <p id="p1">Explore all adventures
                    </p>
                    <p id="p2">
                    Here's a list of places that you can explore in city



                    </p>
                </div>


                <div id="b-home2">
                    <div className="home2-content">
                    Filters:

                    </div>
                    <div className="home2-content">
                        <input type="text" placeholder="Filter By Duration(Hours)" />
                        Clear

                    </div>
                    <div className="home2-content">
                        <input type="text"  placeholder="Add Category"/>
                        Clear

                    </div>
                    <div className="home2-content">
                        <input type="text"  placeholder="Search Adventures"/>
                        Clear

                    </div>
                    
                    
                    
                </div>


                
            
            </div>
        )
    }




}