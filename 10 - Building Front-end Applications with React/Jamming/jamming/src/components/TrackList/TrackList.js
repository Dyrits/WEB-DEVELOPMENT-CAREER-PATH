import React from "react";

// Stylesheet
import "./TrackList.css";

// Components
import Track from "./../Track/Track";

function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks.map(track =>
        <Track
          onAdd={props.onAdd}
          onRemove={props.onRemove}
          isRemoval={props.isRemoval}
          key={track.id}
          track={track}
        />
      )}
    </div>
  );
}

export default TrackList;