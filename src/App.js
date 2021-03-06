import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import About from "./pages/About";
import Credentials from "./Credentials";

const spotify = Credentials();

function App() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState(null);
  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      setToken(tokenResponse.data.access_token);

      axios(
        "https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe/albums?include_groups=album&market=US",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + tokenResponse.data.access_token,
          },
        }
      ).then((AlbumResponse) => {
        setAlbums(AlbumResponse.data.items);
        console.log(AlbumResponse.data.items);
      });
    });
  }, []);

  return (
    <div className="App">
      <About albums={albums}></About>
    </div>
  );
}

export default App;
