import React, {Component, createRef} from 'react';

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
      searchResults: [],
      playlistName: "",
      playlistTracks: []
    }
    this.SearchBar = React.createRef();
  }

  // Arrow function for binding~
  addTrack = trackToAdd => {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === trackToAdd.id)) { return; }
    // Remove from search results:
    let updatedSearchResults = this.state.searchResults;
    const indexToRemove = updatedSearchResults.indexOf(trackToAdd)
    updatedSearchResults.splice(indexToRemove, 1);
    // Add to playlist:
    let updatedPlaylistTracks = this.state.playlistTracks;
    updatedPlaylistTracks.push(trackToAdd);
    // Update component;
    this.setState({searchResults: updatedSearchResults, playlistTrack: updatedPlaylistTracks})
  }

  // Arrow function for binding~
  removeTrack = trackToRemove => {
    // Remove from playlist:
    let updatedPlaylistTracks = this.state.playlistTracks;
    updatedPlaylistTracks = updatedPlaylistTracks.filter(track => track.id !== trackToRemove.id);
    // Update the search results:
    this.SearchBar.current.search();
    this.setState({playlistTracks: updatedPlaylistTracks});
  }

  // Arrow function for binding~
  updatePlaylistName = name => {
    this.setState({playlistName: name});
  }

  // Arrow function for binding~
  savePlaylist = async () => {
    const tracksURIs = this.state.playlistTracks.map(track => track.uri);
    await Spotify.savePlaylist(this.state.playlistName, tracksURIs)
    this.setState({playlistTracks: []});
  }

  // Arrow function for binding~
  search = searchTerm => {
    Spotify.search(searchTerm).then(tracks => {
      const playlistTracksID = this.state.playlistTracks.map(track => track.id)
      tracks = tracks.filter(track => !playlistTracksID.includes(track.id));
      this.setState({searchResults: tracks})
      });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar ref={this.SearchBar} onSearch={this.search} />
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
