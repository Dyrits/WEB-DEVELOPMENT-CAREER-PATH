import React from 'react';
import logo from './logo.svg';

// Components
import SearchBar from "../SearchBar/SearchBar";

// Stylesheet
import './App.css';

// Components
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component () {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: "NameTest", artist: "ArtistTest", album: "AlbumTest"}
      ],
      playlistName: "PlayListTest",
      playListTracks: [
        {name: "NameTest", artist: "ArtistTest", album: "AlbumTest", id: "IDTest"}
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playListName={this.state.playlistName} playListTracks={this.state.playListTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
