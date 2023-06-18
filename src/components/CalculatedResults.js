import React from 'react';
import { Typography, Box } from '@mui/material';

const CalculatedResults = ({ quantities }) => {
  const calculateTotalPrice = () => {
    const prices = {
      megapack2XL: 120000,
      megapack2: 80000,
      megapack: 50000,
      powerpack: 20000,
      transformer: 10000,
    };

    let totalPrice = 0;

    for (const [batteryType, quantity] of Object.entries(quantities)) {
      totalPrice += prices[batteryType] * quantity;
    }

    return totalPrice;
  };

  const calculateTotalEnergy = () => {
    const energies = {
      megapack2XL: 4,
      megapack2: 3,
      megapack: 2,
      powerpack: 1,
      transformer: -0.25,
    };

    let totalEnergy = 0;

    for (const [batteryType, quantity] of Object.entries(quantities)) {
      totalEnergy += energies[batteryType] * quantity;
    }

    return totalEnergy;
  };

  const calculateTotalLandDimension = () => {
    const dimensions = {
      megapack2XL: { width: 40, length: 10 },
      megapack2: { width: 30, length: 10 },
      megapack: { width: 30, length: 10 },
      powerpack: { width: 10, length: 10 },
      transformer: { width: 10, length: 10 },
    };

    let totalLandDimension = 0;

    for (const [batteryType, quantity] of Object.entries(quantities)) {
      const { width, length } = dimensions[batteryType];
      totalLandDimension += width * length * quantity;
    }

    return totalLandDimension;
  };

  const totalPrice = calculateTotalPrice();
  const totalEnergy = calculateTotalEnergy();
  const totalLandDimension = calculateTotalLandDimension();

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Calculated Results
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Total Price:</strong> ${totalPrice.toLocaleString()}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Total Energy:</strong> {totalEnergy} MWh
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Total Land Dimension:</strong> {totalLandDimension} sqft
      </Typography>
    </Box>
  );
};

export default CalculatedResults;
