import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

function SimpleCheckbox() {
  return (
    <FormControlLabel
      control={<Checkbox />}
      label="Accept Terms and Conditions"
    />
  );
}

export default SimpleCheckbox;
