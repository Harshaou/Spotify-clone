import React from 'react';
import {MdSearch} from 'react-icons/md'
import { Avatar } from '@material-ui/core';

const BodyHeader = () => {
    return (
        <div className='body-header'>
            <div className="header-left">
                <MdSearch size={26} />
                <input
                placeholder='Search for Songs' type="text"/>
            </div>
            <div className="header-right">
                <Avatar src='' alt='' />
                <h4 className='name'>Harshad M</h4>
            </div>
        </div>
    );
}

export default BodyHeader;
