import React from "react";
import Nav from "./component/Nav.jsx";
import Home from "./Home.jsx";
import Card from "./component/Card.jsx";
import Fotter from "./component/Footer.jsx"; // Fixed spelling for Footer

class App extends React.Component {
  render() {
    return (
      <>
        {/* Navigation Bar */}
        <Nav/>
        
        {/* Home Section */}
        <Home/>

        {/* Cards Section */}
        <Card/>

        <Fotter />
      </>
    );
  }
}

export default App;
