import React from "react";

// Stylesheet
import "./Track.css";

function Track(props) {
  function renderAction() {
    return(
      <button className="Track-action">{isRemoval ? "-" : "+"}</button>
    );
  }

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