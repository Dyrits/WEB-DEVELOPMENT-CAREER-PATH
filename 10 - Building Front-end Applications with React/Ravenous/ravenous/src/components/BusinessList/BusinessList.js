import React, {Component} from "react";
import Business from "../Business/Business";

// Stylesheet:
import "./BusinessList.css"

class BusinessList extends Component {
  render() {
    return(
      <div className="BusinessList">
        {this.props.businesses.map(business => {
          return <Business business={business} />;
        })}
      </div>
    )
  }
}

export default BusinessList;