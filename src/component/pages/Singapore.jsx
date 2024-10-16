import React, { Component } from "react";
import Nav from "../Nav";
import Home from "./Home.jsx";
import Card1 from "./Card1"
import Fotter from "../Footer.jsx"
export default class Singapore extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        
        
        return(
            <>
            <Nav/>
            <Home/>
            <Card1 city="singapore"/>
            <Fotter/>
            </>

        )
    }
}
