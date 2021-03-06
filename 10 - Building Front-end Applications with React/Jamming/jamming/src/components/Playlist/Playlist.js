import React from "react";

// Stylesheet
import "./Playlist.css";

// Components
import TrackList from "../TrackList/TrackList";

function Playlist(props) {

  const handleNameChange = $event => {
    props.onNameChange($event.target.value);
  }

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New playlist~"} />
      <TrackList onRemove={props.onRemove} isRemoval={true} tracks={props.playlistTracks}/>
      <button onClick={props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;