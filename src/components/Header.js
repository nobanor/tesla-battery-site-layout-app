import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Modal, Paper } from '@mui/material';
import { HelpOutline, Close } from '@mui/icons-material';
import TeslaLogo from '../images/tesla-energy.png'; 

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={TeslaLogo} alt="Tesla Logo" style={{ height: '40px', marginRight: '1rem' }} />
            <Typography variant="h6" component="div">Battery Site Layout</Typography>
          </Box>
          <IconButton color="inherit" onClick={handleOpenModal}>
            <HelpOutline />
          </IconButton>
        </Box>
      </Toolbar>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="help-modal-title"
        aria-describedby="help-modal-description"
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" id="help-modal-title" sx={{ mb: 2 }}>Instructions</Typography>
              <IconButton color="inherit" onClick={handleCloseModal}>
                <Close />
              </IconButton>
            </Box>
            <Typography variant="body1" id="help-modal-description">
                <strong>Step 1:</strong> Update device quantities (Note: for every four batteries, one transformer is required)<br />
                <strong>Step 2:</strong> Review total price, total energy, and land dimension required<br />
                <strong>Step 3:</strong> Review configured site layout
            </Typography>
          </Paper>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Header;
