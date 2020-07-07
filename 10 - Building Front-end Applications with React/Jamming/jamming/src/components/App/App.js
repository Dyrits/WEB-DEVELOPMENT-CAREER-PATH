import React, {Component} from 'react';

// Stylesheet
import './App.css';

// Components
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: "NameTest", artist: "ArtistTest", album: "AlbumTest", id: "IDTest", uri: "URITest"}
      ],
      playlistName: "PlayListTest",
      playlistTracks: [
        {name: "NameTest", artist: "ArtistTest", album: "AlbumTest", id: "IDTest", uri: "URITest"}
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

  // Arrow function for binding~
  savePlaylist = () => {
    const tracksURIs = this.state.playlistTracks.map(track => track.uri);
  }

  // Arrow function for binding~
  search = searchTerm => {
    this.setState({searchResults: Spotify.search(searchTerm)}) ;
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} onRemove={this.removeTrack} playListName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
