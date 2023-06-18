import logo from './logo.svg';
import './App.css';
import './components/BatteryInput';
import React, { useState } from 'react';
import BatteryInput from './components/BatteryInput';
import SiteLayout from './components/SiteLayout';
import CalculatedResults from './components/CalculatedResults';
import Header from './components/Header';
import { Box } from '@mui/material';


const App = () => {
  const [batteryQuantities, setBatteryQuantities] = useState({
    megapack2XL: 0,
    megapack2: 0,
    megapack: 0,
    powerpack: 0,
    transformer: 0
  });

  const handleBatteryQuantityChange = (quantities) => {
    setBatteryQuantities(quantities);
  };

  return (
    <Box sx={{ m: 2 }}>
      <Header/>
      <Box sx={{ my: 2 }}>
        <BatteryInput onBatteryQuantityChange={handleBatteryQuantityChange} />
      </Box>
      <Box sx={{ my: 2 }}>
        <CalculatedResults quantities={batteryQuantities} />
      </Box>
      <SiteLayout batteryQuantities={batteryQuantities} />
    </Box>
  );
};

export default App;
