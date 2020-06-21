import React, {Component} from "react";

// Stylesheet:
import "./Business.css";

class Business extends Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state} {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars}</h3>
            <p>90 {business.reviewCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Business;