import {CLIENT_ID, REDIRECT_URI} from "./SpotifyAppSettings";
let accessToken;

const Spotify = {
  api: "https://api.spotify.com/v1",

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
      accessToken = window.location.href.match(/access_token=([^&]*)/);
      let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
      if (accessToken && expiresIn) {
        accessToken = accessToken[1];
        expiresIn = expiresIn[1];
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      }
      window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
    }
  },

  search(searchTerm) {
    accessToken = this.getAccessToken();
    return fetch(
      `${this.api}/search?type=track&q=${searchTerm}`,
      {headers: {Authorization: `Bearer ${accessToken}`}}
    ).then(response => response.json()).then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        } else {
          return jsonResponse.tracks.items.map(track => {
            return {
              id: track.id,
              name: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri
            };
          });
        }
      }
    )
  },

  async savePlaylist(playlistName, tracks) {
    accessToken = this.getAccessToken();
    try {
    const header = {Authorization: `Bearer ${accessToken}`};

    const fetchUserID = await fetch(`${this.api}/me`, {headers: header});
    const {id: userID} = await fetchUserID.json();

    const fetchPlaylistId = await fetch(`${this.api}/users/${userID}/playlists`, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ name: playlistName })
    });
    const {id: playlistID} = await fetchPlaylistId.json();

    return await fetch(`${this.api}/users/${userID}/playlists/${playlistID}/tracks`, {
      method: "POST",
      headers: header,
      body: JSON.stringify({ uris: tracks })
    });

    } catch ($exception) {
      console.error($exception);
    }
  }
}

export default Spotify;