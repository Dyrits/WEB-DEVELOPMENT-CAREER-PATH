import React, {Component} from "react";

// Stylesheet
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
  }

  // Arrow function for binding~
  search = () => {
    this.props.onSearch(this.state.searchTerm);
  }

  // Arrow function for binding~
  handleTermChange = $event => {
    this.setState({searchTerm: $event.target.value});
  }

  render () {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist"/>
        <button onClick={this.search} className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;