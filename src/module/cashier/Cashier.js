import { Divider, Fab, List, ListItem, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './cashier.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Routes from '../../config/Routes';
import { Redirect, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  }
}));

export default function Cashier() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  
  const onLogout = () => {
    localStorage.removeItem('author');
    window.location.hash = '/home';
  }

  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div>
      <div>
        <SwipeableDrawer
          anchor='left'
          open={openMenu}
          onClose={() => { setOpenMenu(false) }}
          onOpen={() => { setOpenMenu(true) }}
        >
          <List>
            <ListItem button key='1' onClick={() => { window.location.hash = '/cashier/jual'; setOpenMenu(false); }}>
              <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
              <ListItemText>Cashier</ListItemText>
            </ListItem>
            <ListItem button key='2' onClick={() => { window.location.hash = '/cashier/stock'; setOpenMenu(false); }}>
              <ListItemIcon><ListAltIcon /></ListItemIcon>
              <ListItemText>Stock</ListItemText>
            </ListItem>
            <ListItem button key='3' onClick={() => { window.location.hash = '/cashier/penjualan'; setOpenMenu(false); }}>
              <ListItemIcon><ShowChartIcon /></ListItemIcon>
              <ListItemText>Data Penjualan</ListItemText>
            </ListItem>
            <Divider />
            <ListItem button key='4' onClick={onLogout}>
              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
      <div>
        <Switch>
          {
            Routes.RoutesLogged.map(
              (item, index) => <Route key={index.toString()} path={item.path} name={item.name} component={item.component} />
            )
          }
          <Redirect exact from='**' to='/cashier/jual' />
        </Switch>
      </div>
      <Fab className={classes.fab} color="primary" aria-label='open-menu' onClick={toogleMenu}>
        <MenuIcon />
      </Fab>
    </div>

  )
}