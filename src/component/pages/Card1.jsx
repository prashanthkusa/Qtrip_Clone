import React from "react";
// import data from "./Db1.js"
import { Link } from "react-router-dom";

export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
       let api= fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=${this.props.city}`)
        api.then(x=>x.json()).then((res) =>{
            this.setState({ data: res });
            console.log(this.state);
          })
    }
    render(){
        return(
            <div>
            <div id="card1">
                {
                    this.state.data.map(el=>{
                        return(
                            <>
                            <div className="card1"> 
                           
                            
                           <Link to={"/banglore/niaboy"}>
                           <img src={el.image} id="img1"/>
                           </Link>
                           <div> 
                           <button id="p"> <h4>{el.category}</h4></button>
                           </div>
                           <div id="card1-foot">
                            <p>
                                {el.name}
                            </p>
                            <p className="pincard1">
                                ₹{ el.costPerHead}
                            </p>
                           </div>
                           <div id="card2-foot">
                            <p>
                            Duration
                            </p>
                            <p className="pincard2">
                                { el.duration}Hours
                            </p>
                           </div>
                           
                           
                           
                       
                           </div>
                           
                            </>
                            
                        )
                    })
                }
               
            </div>
            
            </div>

         




        )
    }

}