

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri ="http://localhost:5173/";

const clientId = "cff76213089a4e228206c8bf120d67cb";

const scopes=[
  "user-read-currenty-playing",
  "user-read-reacently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () =>{
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((intial,item)=>{
      // accessToken=ouraccesstokenkey&name=ourname
      let parts = item.split('=');
      intial[part[0]] = decodeURIComponent(parts[1]);
    })
}

export const loginUrl =`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;