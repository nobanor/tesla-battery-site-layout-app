import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField, Grid, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Megapack2XLImage from '../images/megapack2xl.png';
import Megapack2Image from '../images/megapack2.png';
import PowerpackImage from '../images/powerpack.png';
import TransformerImage from '../images/transformer.png';



const BatteryInput = ({ onBatteryQuantityChange }) => {
  const [megapack2XLQuantity, setMegapack2XLQuantity] = useState(0);
  const [megapack2Quantity, setMegapack2Quantity] = useState(0);
  const [megapackQuantity, setMegapackQuantity] = useState(0);
  const [powerpackQuantity, setPowerpackQuantity] = useState(0);
  const [transformerQuantity, setTransformerQuantity] = useState(0);
  const [showTransformerAlert, setShowTransformerAlert] = useState(false);

  const handleQuantityChange = (e, batteryType) => {
    const quantity = parseInt(e.target.value, 10) || 0;

    if (quantity < 0) {
      return; // Prevent negative quantities
    }

    if (showTransformerAlert && batteryType !== 'transformer') {
      return; // Prevent adding new quantities after transformer alert is shown
    }

    switch (batteryType) {
      case 'megapack2XL':
        setMegapack2XLQuantity(quantity);
        break;
      case 'megapack2':
        setMegapack2Quantity(quantity);
        break;
      case 'megapack':
        setMegapackQuantity(quantity);
        break;
      case 'powerpack':
        setPowerpackQuantity(quantity);
        break;
      case 'transformer':
        const requiredTransformers = Math.floor(
          (megapack2XLQuantity + megapack2Quantity + megapackQuantity + powerpackQuantity) / 4
        );
  
        if (quantity < requiredTransformers) {
          setShowTransformerAlert(true);
          return; // Prevent decreasing transformer quantity
        }
        setTransformerQuantity(quantity);
        setShowTransformerAlert(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const quantities = {
      megapack2XL: megapack2XLQuantity,
      megapack2: megapack2Quantity,
      megapack: megapackQuantity,
      powerpack: powerpackQuantity,
      transformer: transformerQuantity,
    };

    onBatteryQuantityChange(quantities);

    const totalDevices =
      megapack2XLQuantity + megapack2Quantity + megapackQuantity + powerpackQuantity;
    const requiredTransformers = Math.floor(totalDevices / 4);

    if (transformerQuantity < requiredTransformers) {
      setShowTransformerAlert(true);
    } else {
      setShowTransformerAlert(false);
    }
  }, [megapack2XLQuantity, megapack2Quantity, megapackQuantity, powerpackQuantity, transformerQuantity, onBatteryQuantityChange]);

  const handleCloseAlert = () => {
    setShowTransformerAlert(false);
  };

  return (
    <Box>
      <Snackbar open={showTransformerAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <MuiAlert onClose={handleCloseAlert} severity="warning" sx={{ width: '100%' }}>
          Transformer is required. Please add at least 1 transformer(s).
        </MuiAlert>
      </Snackbar>

      <Typography variant="h4" component="h4" gutterBottom>
        Enter Battery Quantities
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={Megapack2XLImage} alt="Megapack 2XL" style={{ width: '100%', marginBottom: '1rem' }} />
            <Typography variant="h4" component="h4" gutterBottom>
              Megapack 2XL
            </Typography>
            <Typography variant="body1" gutterBottom>
              Dimension: 40FT x 10FT
            </Typography>
            <Typography variant="body1" gutterBottom>
              Energy: 4 MWh
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cost: $120,000
            </Typography>
            <Typography variant="body1" gutterBottom>
              Release Date: 2022
            </Typography>
            <TextField
              type="number"
              label="Quantity"
              value={megapack2XLQuantity}
              onChange={(e) => handleQuantityChange(e, 'megapack2XL')}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={Megapack2Image} alt="Megapack 2" style={{ width: '100%', marginBottom: '1rem' }} />
            <Typography variant="h4" component="h4" gutterBottom>
              Megapack 2
            </Typography>
            <Typography variant="body1" gutterBottom>
              Dimension: 30FT x 10FT
            </Typography>
            <Typography variant="body1" gutterBottom>
              Energy: 3 MWh
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cost: $80,000
            </Typography>
            <Typography variant="body1" gutterBottom>
              Release Date: 2021
            </Typography>
            <TextField
              type="number"
              label="Quantity"
              value={megapack2Quantity}
              onChange={(e) => handleQuantityChange(e, 'megapack2')}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={Megapack2Image} alt="Megapack 2" style={{ width: '100%', marginBottom: '1rem' }} />
            <Typography variant="h4" component="h4" gutterBottom>
              Megapack
            </Typography>
            <Typography variant="body1" gutterBottom>
              Dimension: 30FT x 10FT
            </Typography>
            <Typography variant="body1" gutterBottom>
              Energy: 2 MWh
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cost: $50,000
            </Typography>
            <Typography variant="body1" gutterBottom>
              Release Date: 2005
            </Typography>
            <TextField
              type="number"
              label="Quantity"
              value={megapackQuantity}
              onChange={(e) => handleQuantityChange(e, 'megapack')}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={PowerpackImage} alt="Powerpack" style={{ width: '100%', marginBottom: '1rem' }} />
            <Typography variant="h4" component="h4" gutterBottom>
              Powerpack
            </Typography>
            <Typography variant="body1" gutterBottom>
              Dimension: 10FT x 10FT
            </Typography>
            <Typography variant="body1" gutterBottom>
              Energy: 1 MWh
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cost: $20,000
            </Typography>
            <Typography variant="body1" gutterBottom>
              Release Date: 2000
            </Typography>
            <TextField
              type="number"
              label="Quantity"
              value={powerpackQuantity}
              onChange={(e) => handleQuantityChange(e, 'powerpack')}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ border: '1px solid #ccc', padding: '1rem' }}>
            <img src={TransformerImage} alt="Transformer" style={{ width: '70%', marginBottom: '1rem' }} />
            <Typography variant="h4" component="h4" gutterBottom>
              Transformer
            </Typography>
            <Typography variant="body1" gutterBottom>
              Dimension: 10FT x 10FT
            </Typography>
            <Typography variant="body1" gutterBottom>
              Energy: -0.25 MWh
            </Typography>
            <Typography variant="body1" gutterBottom>
              Cost: $10,000
            </Typography>
            <TextField
              type="number"
              label="Quantity"
              value={transformerQuantity}
              onChange={(e) => handleQuantityChange(e, 'transformer')}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BatteryInput;
