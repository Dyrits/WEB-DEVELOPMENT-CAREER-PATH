import {CLIENT_ID, REDIRECT_URI} from "./SpotifyAppSettings";
let accessToken;

const Spotify = {
  api: "https://api.spotify.com",
  endpoint: "/v1/search?type=track&q=",

  getAccessToken() {
    if (accessToken) { return accessToken; }
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
  },

  search(searchTerm) {
    accessToken = this.getAccessToken();
    return fetch(
      `${this.api}${this.endpoint}${searchTerm}`,
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
  }
}

export default Spotify;