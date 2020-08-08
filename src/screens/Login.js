import React from 'react';
import { accessUrl } from '../components/spotify'
// import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
        <img className='logo'
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
       <a className='a-login' href={accessUrl}>LOGIN TO SPOTIFY</a>
        </div>
    );
}

export default Login;
