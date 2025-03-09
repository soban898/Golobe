import React from "react";
import "../../styles/city.css"; // Importing separate CSS file
import Melbourne from "../../assets/img/Melbourne.png";
import Paris from "../../assets/img/Paris.png";
import London from "../../assets/img/London.png";
import Columbia from "../../assets/img/Columbia.png";

const destinations = [
  {
    id: 1,
    city: "Melbourne",
    tagline: "An amazing journey",
    price: "$700",
    image: Melbourne,
  },
  {
    id: 2,
    city: "Paris",
    tagline: "A Paris Adventure",
    price: "$600",
    image: Paris,
  },
  {
    id: 3,
    city: "London",
    tagline: "London eye adventure",
    price: "$350",
    image: London,
  },
  {
    id: 4,
    city: "Columbia",
    tagline: "Amazing streets",
    price: "$700",
    image: Columbia,
  },
];

const City = () => {
    return (
        <div className="container">
          <h2 className="title">Fall into travel</h2>
          <p className="subtitle">
            Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the travel tools to get you to your destination.
          </p>
          <div className="card-container">
            {destinations.map((destination) => (
              <div key={destination.id} className="card">
                <img src={destination.image} alt={destination.city} className="card-image" />
                <div className="card-content">
                  <h3 className="card-title">{destination.city}</h3>
                  <p className="card-text">{destination.tagline}</p>
                  <p className="card-price">{destination.price}</p>
                  <button className="card-button">Book a Hotel</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default City;
