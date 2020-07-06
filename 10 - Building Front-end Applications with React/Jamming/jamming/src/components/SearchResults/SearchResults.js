import React from "react";

// Stylesheet
import "./SearchResults.css";

// Components
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={props.searchResults}/>
    </div>
  );
}

export default SearchResults;