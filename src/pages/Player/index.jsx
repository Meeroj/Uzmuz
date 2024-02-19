import React from "react";

function Player({ track }) {
  return (
    <div>
      <h2>Player</h2>
      <audio controls>
        <source src={track} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Player;
