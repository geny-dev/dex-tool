"use client";
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { borderRadius } from '@mui/system';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      style={{ background: '#23323c', borderRadius: '10px', margin: '5px 20px'}}
      color="primary"
      className="active-btn"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Daily gainers</ToggleButton>
      <ToggleButton value="android">Daily losers</ToggleButton>
    </ToggleButtonGroup>
  );
}
