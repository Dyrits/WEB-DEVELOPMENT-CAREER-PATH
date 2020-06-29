import React, {Component} from 'react';

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";


// Stylesheet:
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchYelp = this.searchYelp.bind(this);
    this.state = {
      businesses: []
    }
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses})
      console.log(businesses.imageSrc);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses}/>
      </div>
    )
  }
}

export default App;
