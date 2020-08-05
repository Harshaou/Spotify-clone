import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'
import { getTokenFromResponse } from './components/spotify'
import Login from './screens/Login';
import Home from './screens/Home';


const App = () => {
    const [token, setToken] = useState(null );

    useEffect(() => {
        let hash = getTokenFromResponse()
        window.location.hash = ''
        setToken(hash.access_token) 
    }, []);

   
    return (
        <div>
            {token ? <h1>loged in</h1> : <h2><Link to='/login'>Authenticate</Link></h2> }
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
        </div>
    );
}

export default App;
