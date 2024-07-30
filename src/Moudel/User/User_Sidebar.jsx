import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Home as HomeIcon,
  Description as DescriptionIcon,
  MoveToInbox as MoveToInboxIcon,
  Receipt as ReceiptIcon,
  Assignment as AssignmentIcon,
  Inventory as InventoryIcon,
  Verified as VerifiedIcon,
  Person as PersonIcon,
  Security as SecurityIcon,
  Monitor as MonitorIcon,
  Settings as SettingsIcon,
  History as HistoryIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GrassIcon from '@mui/icons-material/Grass';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function User_Sidebar({ onMenuItemClick }) {
  return (
    <Box sx={{ width: 220, height: 'calc(100vh - 64px)', backgroundColor: '#f0f0f0', position: 'fixed', top: '64px', left: 0, overflowY: 'auto' }}>
      <List>
        <ListItem button onClick={() => onMenuItemClick('home')}>
          <ListItemIcon>
            <HomeIcon sx={{color:'blueviolet'}} />
          </ListItemIcon>
          <ListItemText primary="Home"  />
        </ListItem>
        <ListItem button onClick={() => onMenuItemClick('pr01')}>
        <ListItemIcon>
          <DescriptionIcon sx={{color:'blueviolet'}} />
        </ListItemIcon>
        <ListItemText primary="Create Purcahse Requestions" />
      </ListItem>
      <ListItem button onClick={() => onMenuItemClick('pr02')}>
      <ListItemIcon>
        <EditRoadIcon sx={{color:'blueviolet'}}/>
      </ListItemIcon>
      <ListItemText primary="Edit Purcahse Requestions" />
    </ListItem>
    <ListItem button onClick={() => onMenuItemClick('pr03')}>
    <ListItemIcon>
      <CheckCircleOutlineIcon sx={{color:'blueviolet'}}/>
    </ListItemIcon>
    <ListItemText primary="Check Purchase Requestion status" />
  </ListItem>
  <ListItem button onClick={() => onMenuItemClick('bb03')}>
  <ListItemIcon>
    <ReceiptIcon sx={{color:'blueviolet'}}/>
  </ListItemIcon>
  <ListItemText primary="Show The Bill Of Materails " />
</ListItem>
      </List>
    </Box>
  );
}
