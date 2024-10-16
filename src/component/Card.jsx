import React from "react";
import { Link } from "react-router-dom";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],  // Initialize data as an empty array
    };
  }

  componentDidMount() {
    // Fetching API data
    fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/cities")
      .then((response) => response.json())
      .then((res) => {
        // Update the state with the fetched data
        this.setState({ data: res });
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch error
  }

  render() {
    // Ensure this.state.data is available before trying to map it
    return (
      <div id="card">
        {/* Check if the data is loaded */}
        {this.state.data.length > 0 ? (
          this.state.data.map((el, index) => (
            <div className="card" key={index}>
              <Link to={`${el.id}`} >
                <img src={el.image} className="img" alt={`${el.name}`}/>
              </Link>
              <div className="text-onimage">
                {el.city} <p>{el.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading cities...</p> // Display loading message until data is fetched
        )}
      </div>
    );
  }
}
