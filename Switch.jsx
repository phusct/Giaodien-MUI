import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

function SimpleSwitch() {
  return (
    <FormControlLabel
      control={<Switch />}
      label="Enable Notifications"
    />
  );
}

export default SimpleSwitch;
