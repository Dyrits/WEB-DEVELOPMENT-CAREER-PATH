import React, {Component} from 'react';

// Stylesheet
import './App.css';

// Components
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: "NameTest", artist: "ArtistTest", album: "AlbumTest", id: "IDTest"}
      ],
      playlistName: "PlayListTest",
      playlistTracks: [
        {name: "NameTest", artist: "ArtistTest", album: "AlbumTest", id: "IDTest"}
      ]
    }
  }

  // Arrow function for binding~
  addTrack = trackToAdd => {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === trackToAdd.id)) { return; }
    let updatedPlaylistTracks = this.state.playlistTracks;
    updatedPlaylistTracks.push(trackToAdd);
    this.setState({playlistTrack: updatedPlaylistTracks})
  }

  // Arrow function for binding~
  removeTrack = trackToRemove => {
    let updatedPlaylistTracks = this.state.playlistTracks;
    updatedPlaylistTracks = updatedPlaylistTracks.filter(track => track.id !== trackToRemove.id);
    this.setState({playlistTracks: updatedPlaylistTracks});
  }

  // Arrow function for binding~
  updatePlaylistName = name => {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playListName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
