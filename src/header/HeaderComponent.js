import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../img/artur.png';



const HeaderComponent =  () => {
    return(
        <AppBar position="relative">
            <div className='header-content'>
                <div>
                    <Typography variant="h1">Todo app</Typography>
                    <Typography variant='subtitle2' align='right'>by Betsin</Typography>
                </div>
                <div>
                    <Avatar  src={avatar} classes={{root: 'avatar'}} />
                </div>
            </div>
        </AppBar>
    );
};

export default HeaderComponent;