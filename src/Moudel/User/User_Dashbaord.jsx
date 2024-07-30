import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import User_TopBar from './User_TopBar';
import User_Sidebar from './User_Sidebar';
export default function User_Dashbaord() {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar is hidden by default
  const [content, setContent] = useState('home');

  const handleMenuItemClick = (menuItem) => {
    setContent(menuItem);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (searchTerm) => {
    const menuItem = searchTerm.toLowerCase();
    setContent(menuItem);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');



  if (error) return <div>{error}</div>;
  const renderContent = () => {
    switch (content) {
      case 'home':
        return<h1>Home Page</h1>;

      case 'pr01':
        return <h1>Create Purchase Requestions</h1>;
      case 'pr02':
        return <h1>Edit Purchase Requestions</h1>;
      case 'pr03':
        return <h1>Check  Purchase Requestions Status</h1>;
      
      default:
        return <h1>Pages is not found</h1>;
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <User_TopBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onSearch={handleSearch} />
      <Box sx={{ display: 'flex', pt: 12, mt: -5 }}>
        {isSidebarOpen && <User_Sidebar onMenuItemClick={handleMenuItemClick} />}
        <Box sx={{ flexGrow: 1, p: 2, ml: isSidebarOpen ? '220px' : '0' }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}
