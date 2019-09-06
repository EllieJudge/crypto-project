import React from 'react';
import '../index.css';
import {AppBar, Toolbar } from '@material-ui/core';
import SwipeableTemporaryDrawer from './Hamburger';


class Navbar extends React.Component {
    render(){
        return(
            <div>
                <AppBar position="static">
                <Toolbar title="Crypto-App">
                        <SwipeableTemporaryDrawer />
                            Crypto-App
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default Navbar;
