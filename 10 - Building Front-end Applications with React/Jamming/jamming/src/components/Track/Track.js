import React, {Component} from "react";

// Stylesheet
import "./Track.css";

class Track extends Component {

  renderAction() {
    return(
      <button className="Track-action" onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}>
        {this.props.isRemoval ? "-" : "+"}
      </button>
    );
  }

  // Arrow function for binding~
  addTrack = () => {
    this.props.onAdd(this.props.track);
  }

  // Arrow function for binding~
  removeTrack = () => {
    this.props.onRemove(this.props.track)
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}| {this.props.track.album}</p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
      </div>
    );
  }

}

export default Track;