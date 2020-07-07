import {CLIENT_ID, REDIRECT_URI} from "./SpotifyAppSettings";
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) { return accessToken; }
    accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
    const expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
    if (accessToken && expiresIn) {
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    }
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
  }
}

export default Spotify;