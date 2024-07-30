import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import boyserror from '../Asset/boyserror.png';
import { Home as HomeIcon } from '@mui/icons-material';

export default function DefaultPages({ onMenuItemClick }) {
  const [content, setContent] = useState('');

  const handleMenuItemClick = (menuItem) => {
    setContent(menuItem);
  };

  return (
    <Box
      sx={{
        width: '90%',
        margin: 'auto',
        padding: 2,
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        mt: 5,
        maxWidth: '1200px',
      }}
    >
      <Card
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh', // Adjust the height as needed
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardMedia component="img" image={boyserror} alt="Page Not Found" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Page Not Found. Please Enter The Correct Code
          </Typography>
        </CardContent>

        <CardActions>
          <List>
            <ListItem button onClick={() => onMenuItemClick('home')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
        </CardActions>
      </Card>
    </Box>
  );
}
