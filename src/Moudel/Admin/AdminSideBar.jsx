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
export default function AdminSideBar({ onMenuItemClick }) {
  return (
    <Box sx={{ width: 220, height: 'calc(100vh - 64px)', backgroundColor: '#f0f0f0', position: 'fixed', top: '64px', left: 0, overflowY: 'auto' }}>
      <List>
        <ListItem button onClick={() => onMenuItemClick('home')}>
          <ListItemIcon>
            <HomeIcon sx={{color:'blueviolet'}} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => onMenuItemClick('cc01')}>
        <ListItemIcon>
          <GrassIcon sx={{color:'blueviolet'}} />
        </ListItemIcon>
        <ListItemText primary="Create Comapnay" />
      </ListItem>
       
      </List>
    </Box>
  );
}
