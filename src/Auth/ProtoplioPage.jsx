import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Aligend_logo from '../Asset/Aligend_logo.png';

export default function ProtoplioPage() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (route) => {
        setAnchorEl(null);
        if (route) navigate(route);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <img alt="logo" src={Aligend_logo} height="40" style={{ marginRight: '16px' }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Aligend Automation Services Private Limited
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Button color="inherit" onClick={() => handleClose('/')}>Home</Button>
                    <Button color="inherit" onClick={() => handleClose('/about')}>About</Button>
                    <Button color="inherit" onClick={() => handleClose('/login')}>Login</Button>
                    <Button color="inherit" onClick={() => handleClose('/feature')}>Feature</Button>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => handleClose()}
                    >
                        <MenuItem onClick={() => handleClose('/')}>Home</MenuItem>
                        <MenuItem onClick={() => handleClose('/about')}>About</MenuItem>
                        <MenuItem onClick={() => handleClose('/login')}>Login</MenuItem>
                        <MenuItem onClick={() => handleClose('/feature')}>Feature</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
