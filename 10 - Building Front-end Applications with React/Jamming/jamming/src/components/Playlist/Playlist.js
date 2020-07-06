import React from "react";

// Stylesheet
import "./Playlist.css";

// Components
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList onRemove={props.onRemove} isRemoval={true} tracks={props.playlistTracks}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;