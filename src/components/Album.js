import React from "react";

function Album({ album }) {
  return (
    <div>
      {console.log(album)}
      <div className="allAlbums">
        <div className="album">
          <img
            src={album.images[1].url}
            className="albumPhoto"
            alt={album.name}
          />
          <h2>{album.name}</h2>
          <h3>{album.release_date}</h3>
        </div>
      </div>
    </div>
  );
}

export default Album;
