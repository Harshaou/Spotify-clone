import React from 'react';

const SideBarTitle = ({title, Icon}) => {
    
    return (
        <div className='sidebar-title'>
            <strong>{Icon && <Icon size={30} className='sidebar-icons' />}</strong>
            {Icon ? <strong>{title}</strong> : <p className='playlist-p'>{title}</p>}
        </div>
    );
}

export default SideBarTitle;
