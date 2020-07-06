import React, {Component} from 'react';

// Components
import SearchBar from "../SearchBar/SearchBar";

// Stylesheet
import './App.css';

// Components
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component () {
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

  // Arrow function for binding~
  addTrack = trackToAdd => {
    if (this.state.playListTracks[trackToAdd.id]) { return; }
    let updatedPlayListTracks = this.state.playListTracks;
    updatedPlayListTracks.push(trackToAdd);
    this.setState({playListTrack: updatedPlayListTracks})
  }

  // Arrow function for binding~
  removeTrack = trackToRemove => {
    let updatedPlayListTracks = this.state.playListTracks;
    updatedPlayListTracks = updatedPlayListTracks.filter(track => track.id !== trackToRemove.id);
    this.setState({playListTrack: updatedPlayListTracks});
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onRemove={this.removeTrack} playListName={this.state.playlistName} playListTracks={this.state.playListTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
