import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
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
        }
    },[token, dispatch]);

   
    return (
        <div>
            {token ? <h1>loged in</h1> : <h2><Link to='/login'>Authenticate</Link></h2> }
            <Route exact path='/' component={Player} />
            <Route path='/login' component={Login} />
        </div>
    );
}

export default App;
