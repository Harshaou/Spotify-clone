import React, { useEffect, useState } from 'react';
import { Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromResponse } from './components/spotify'
import Login from './screens/Login';
import Player from './screens/Player';

const spotify = new SpotifyWebApi()

const App = () => {
    const [token, setToken] = useState(null);
    const dispatch = useDispatch()


    useEffect(() => {
        let hash = getTokenFromResponse()
        window.location.hash = ''
        setToken(hash.access_token) 
        spotify.setAccessToken(token)
        if(token){
        spotify.getMe()
        .then(user => {
            dispatch({type: 'SET_USER', payload: user})
        })
        spotify.getUserPlaylists()
        .then(response => {
            dispatch({type: 'SET_PLAYLIST', payload: response})
        })
        }
        
    },[token, dispatch]);
    


    return (
        <div>
            <Route exact path='/' render={() => (
                <Player spotify={spotify} />
            )} />
            <Route path='/login' component={Login} />
        </div>
    );
}

export default App;
