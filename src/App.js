import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtoplioPage from './Auth/ProtoplioPage';
import HomePage from './Auth/HomePage';
import AboutPage from './Auth/AboutPage';
import LoginPage from './Auth/LoginPage';
import FeaturePage from './Auth/FeaturePage';
import ProtectedRoute from './Auth/ProtectedRoute';
import AdminDashbaord from './Moudel/Admin/AdminDashbaord';
import User_Dashbaord from './Moudel/User/User_Dashbaord';

function App() {
    return (
        <>
<BrowserRouter>
<Routes>
<Route path='/Admin' element={<AdminDashbaord/>}></Route>
<Route path='/user-dashbord' element={<User_Dashbaord/>}></Route>

</Routes>
</BrowserRouter>
        </>
    );
}

export default App;
