import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import AdminSideBar from './AdminSideBar';
import AdminTopbar1 from './AdminTopbar1';
import DefulatPages from '../../page/DefulatPages';
import CreateCompany from '../../page/CreateCompany'

export default function AdminDashbaord() {
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
        case 'cc01':
          return <CreateCompany/>;
  
      default:
        return <DefulatPages onMenuItemClick={handleMenuItemClick}/>;
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <AdminTopbar1 isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onSearch={handleSearch} />
      <Box sx={{ display: 'flex', pt: 12, mt: -5 }}>
        {isSidebarOpen && <AdminSideBar onMenuItemClick={handleMenuItemClick} />}
        <Box sx={{ flexGrow: 1, p: 2, ml: isSidebarOpen ? '220px' : '0' }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}
