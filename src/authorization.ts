import config from "./config.json";

const appUrl = window.location.protocol + "//" + window.location.host;

export const createDropboxAuthPageUrl = () => (
  "https://www.dropbox.com/oauth2/authorize?client_id=" +
  config.dropboxAppKey +
  "&response_type=token&redirect_uri=" + appUrl
);

// TODO: implement negative scenario
// We don't know how this function handles token absence
export const extractAccessTokenFromUrl = (): string => (
  window.location.hash.split("&")[0].split("=")[1]
);
