import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const cities = [
    { name: "Bengaluru", path: "/bengaluru" },
    { name: "Goa", path: "/goa" },
    { name: "Kolkata", path: "/kolkata" },
    { name: "Paris", path: "/paris" },
    { name: "New York", path: "/new-york" },
    { name: "Singapore", path: "/singapore" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "Bangkok", path: "/bangkok" },
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions based on input
    const filteredCities = cities.filter((city) =>
      city.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredCities);
  };

  return (
    <div id="home">
      <div className="home-content">
        <br/>
        <br/>
        <br/>
        <h1> Welcome to Qtrip</h1>
        <br/>
        <br/>
        <h3>Explore the world with fantastic places to venture around</h3>
        <br />
        <br/>
        <div className="home-content">
          <input
            id="search"
            type="search"
            placeholder="Search a city"
            value={query}
            onChange={handleInputChange}
          />
          {/* Display search suggestions */}
          {query && (
            <ul className="suggestions">
              {suggestions.map((city) => (
                <li key={city.name}>
                  <Link to={city.path}>{city.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
    