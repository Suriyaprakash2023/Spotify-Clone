import { useEffect, useState } from 'react'

import './App.css'
import Login from './components/Login'
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js'; //install this package
import Player from './components/Player';
import { useDataLayerValue } from './components/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [token,setToken] = useState();
  const [{user,token},dispatch] = useDataLayerValue();
  useEffect(()=>{
    const token = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token
      })
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        dispatch({
          type:'SET_USER',
          user:user
        })
      })
    }
  },[]);
  return (
    <>
      {
        token ?( <Player spotify={spotify} /> ) : ( <Login />)
      }
      
    </>
  )
}

export default App
