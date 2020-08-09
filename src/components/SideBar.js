import React from 'react';
import {useSelector} from 'react-redux'
import SideBarTitle from './SideBarTitle';
import {MdHome} from 'react-icons/md'
import {MdSearch} from 'react-icons/md'
import {MdLibraryMusic} from 'react-icons/md'


const SideBar = () => {

    const {playlists} = useSelector(state => state)
    console.log(playlists)

    return (
        <div className='sidebar'>
        <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="img" />
        <SideBarTitle Icon={MdHome} title='Home' />
        <SideBarTitle Icon={MdSearch} title='Search' />
        <SideBarTitle Icon={MdLibraryMusic} title='Your Library' />
        <br/>
        <div className='mini-title'>
            <strong className='playlist'>Playlists</strong>
            <hr/>
            {playlists?.items?.map((item,index) => {
                return (
                    <SideBarTitle key={index} title={item.name} />
                )
            })}
        </div>


         </div>
    );
}

export default SideBar;
