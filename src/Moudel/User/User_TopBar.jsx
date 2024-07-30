// src/AdminTopBar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, TextField, Badge, Avatar } from '@mui/material';
import { Menu as MenuIcon, AccountCircle, Close as CloseIcon, Notifications as NotificationsIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function User_TopBar({ isSidebarOpen, toggleSidebar, onSearch }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsMenu = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNotificationsAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    navigate('/'); // Redirect to the login page
    window.location.reload(); // Reload the page to clear the state
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      user Dashbaord
        </Typography>
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
          variant="outlined"
          placeholder="Search"
          size="small"
          sx={{
            backgroundColor: 'white',
            borderRadius: 1,
            mr: 2,
            display: { xs: 'none', sm: 'block' }, // Hide on small screens
          }}
        />
        <IconButton
          edge="end"
          aria-label="show notifications"
          aria-controls="menu-notifications"
          aria-haspopup="true"
          color="inherit"
          onClick={handleNotificationsMenu}
        >
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Menu
          id="menu-notifications"
          anchorEl={notificationsAnchorEl}
          keepMounted
          open={Boolean(notificationsAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem>Notification 1</MenuItem>
          <MenuItem>Notification 2</MenuItem>
          <MenuItem>Notification 3</MenuItem>
        </Menu>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={handleMenu}
        >
          <Avatar src="/path/to/default-avatar.png" alt="User Photo" />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
