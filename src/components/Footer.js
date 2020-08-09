import React from 'react';
import {Slider, Grid} from '@material-ui/core'
import {MdPlayCircleOutline, MdVolumeDown, MdSkipNext, 
MdSkipPrevious,MdPlaylistPlay, MdShuffle, MdRepeat, MdHearing} from 'react-icons/md'



const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-left">
                <img className='song-img' src="https://images.unsplash.com/photo-1576158114131-f211996e9137?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                 alt=""/>
                 <div className='song-info'>
                     <h4 className='songs-infotext'>Trance ooola</h4>
                     <p className='songs-infotext'>yeshudas</p>
                 </div>
                 <div>
                     <MdHearing size={26} />
                 </div>
            </div>
            <div className="footer-center">
                <MdShuffle className='footerIcon-green' size={26} />
                <MdSkipPrevious className='footerIcon' size={26} />
                <MdPlayCircleOutline className='footerIcon' size={45} />
                <MdSkipNext className='footerIcon' size={26}/>
                <MdRepeat className='footerIcon-green' size={26} />
            </div>
            <div className="footer-right">
                <Grid container spacing={2} >
                    <Grid item>
                        <MdPlaylistPlay size={26}/>
                    </Grid>
                    <Grid item>
                        <MdVolumeDown size={26}/>
                    </Grid>
                    <Grid item xs >
                        <Slider defaultValue={100} aria-labelledby="continuous-slider"  />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
