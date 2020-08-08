import React from 'react';
import Body from '../components/Body';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const Player = () => {
    return (
        <div className='player'>
            <div className='player-body'>
            <SideBar />
            <Body />
            </div>
            <Footer />
        </div>
    );
}

export default Player;
