import React from 'react';
import { Menu, Star } from '@material-ui/icons';
import {ListItemIcon, ListItemText, SwipeableDrawer, makeStyles, Divider, List } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
      width: 250,
    }
  });
  
  export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false
    });
  
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [side]: open });
      };

      const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {['Home', 'Favourites', 'About', 'Coin Info'].map((text, index) => (
            //   <ListItem button key={text}>
              <NavLink to={'/' + text} key={text} >
                {/* <ListItemIcon>{index % 2 === 0 ? <Home /> : <Star />}</ListItemIcon> */}
                {/* WHAT DOES THIS MEAN!? I just want a different icon for each god dammit!! */}
                <ListItemIcon>{index % 2 === 0 ? <MonetizationOnIcon /> : <Star />}</ListItemIcon>
                <ListItemText primary={text} />
            {/* //   </ListItem> */}
            </NavLink>
            ))}
          </List>
          <Divider />
        </div>
      );
      return (
        <div>
          <Menu onClick={toggleDrawer('left', true)} />
          <SwipeableDrawer
            open={state.left}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}>
            {sideList('left')}
          </SwipeableDrawer>
        </div>
      );
    }
    
