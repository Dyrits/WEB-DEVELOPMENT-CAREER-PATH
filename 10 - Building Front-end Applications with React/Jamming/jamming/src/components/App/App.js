import React from 'react';
import logo from './logo.svg';

// Components
import SearchBar from "../SearchBar/SearchBar";

// Stylesheet
import './App.css';
import SearchResults from "../SearchResults/SearchResults";

class App extends React.Component () {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <!-- Add a SearchBar component -->
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <!-- Add a Playlist component -->
          </div>
        </div>
      </div>
    );
  }
}

export default App;
