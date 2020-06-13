import React, {Component} from 'react';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

// Stylesheet:
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  }
}

export default App;
