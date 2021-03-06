import React from "react";
import Album from "../components/Album";

function About({ albums }) {
  return (
    <div className="about">
      <header className="App-header">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/839px-Spotify_logo_with_text.svg.png"
          }
          className="spotifyLogo"
          alt="logo"
        />
      </header>
      <div className="albumsContainer">
        {albums && albums.map((albumState) => <Album album={albumState} />)}
      </div>
    </div>
  );
}

export default About;
