import { Box, Button, MenuItem, Typography, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const countryData = [
  { label: 'India', value: 'India' },
  // Add more countries as needed
];

const stateData = [
  { label: 'Maharashtra', value: 'Maharashtra' },
  { label: 'Delhi', value: 'Delhi' },
  { label: 'Assam', value: 'Assam' },
  // Add more states as needed
];

const cityData = [
  { label: 'Mumbai', value: 'Mumbai' },
  { label: 'Delhi', value: 'Delhi' },
  { label: 'Guwahati', value: 'Guwahati' },
  // Add more cities as needed
];

export default function CreateCompany() {
  const [companyName, setCompanyName] = useState('');
  const [date, setDate] = useState(new Date());
  const [govId, setGovId] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gst, setGst] = useState('');
  const [currency, setCurrency] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async () => {
    const newCompany = {
      companyName,
      date,
      govId,
      email,
      phone,
      gst,
      currency,
      address1,
      address2,
      city,
      state,
      country,
      companyCode: '', // Will be generated in the backend
    };

    try {
      const response = await axios.post('http://localhost:3010/companies', newCompany);
      console.log('Company created:', response.data);
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '90%',
          margin: 'auto',
          padding: 2,
          border: '1px solid #ccc',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          mt: 5,
        }}
      >
        <Box>
          <Typography
            variant='h5'
            sx={{
              textTransform: 'uppercase',
              letterSpacing: 5,
              textAlign: 'center',
            }}
          >
            Create Company
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            mt: 3,
          }}
        >
          <Box sx={{ marginBottom: 2 }}>
            <InputText
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter Company Name"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Calendar
              id="buttondisplay"
              value={date}
              onChange={(e) => setDate(e.value)}
              showIcon
              placeholder="Select Date"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <InputText
              value={govId}
              onChange={(e) => setGovId(e.target.value)}
              placeholder="Enter Company GOV ID"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <InputText
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone Mobile"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <InputText
              value={gst}
              onChange={(e) => setGst(e.target.value)}
              placeholder="Enter GST Number"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              select
              label="Select Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              fullWidth
            >
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
            </TextField>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <InputText
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              placeholder="Enter Address 1"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <InputText
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              placeholder="Enter Address 2"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Dropdown
              value={city}
              onChange={(e) => setCity(e.value)}
              options={cityData}
              placeholder="Select City"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Dropdown
              value={state}
              onChange={(e) => setState(e.value)}
              options={stateData}
              placeholder="Select State"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Dropdown
              value={country}
              onChange={(e) => setCountry(e.value)}
              options={countryData}
              placeholder="Select Country"
              style={{ width: '100%' }}
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
