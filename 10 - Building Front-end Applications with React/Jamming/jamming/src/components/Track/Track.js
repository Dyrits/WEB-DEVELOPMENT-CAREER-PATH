import React from "react";

// Stylesheet
import "./Track.css";

function Track(props) {

  const renderAction = () => {
    return (
      <button
        className="Track-action"
        onClick={props.isRemoval ? removeTrack : addTrack}>
        {props.isRemoval ? "-" : "+"}
      </button>
    );
  }

  const addTrack = () => { props.onAdd(props.track); }
  const removeTrack = () => { props.onRemove(props.track) }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist}| {props.track.album}</p>
      </div>
      <button className="Track-action">{renderAction()}</button>
    </div>
  );

}

export default Track;