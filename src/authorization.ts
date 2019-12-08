import config from "./config.json";

const appUrl = window.location.protocol + "//" + window.location.host;

export const createDropboxAuthUrl = () => (
  "https://www.dropbox.com/oauth2/authorize?client_id=" +
  config.dropboxAppKey +
  "&response_type=token&redirect_uri=" + appUrl
);
