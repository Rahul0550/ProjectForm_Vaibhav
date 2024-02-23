import * as React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

const options = [
  'List',
  'Board',
];

const ViewSelector = () => {
  const [selectedView, setSelectedView] = React.useState('');

  const handleChange = (event) => {
    setSelectedView(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      <Typography variant="h6">Select a view</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="caption">You can also customize this view in settings</Typography>

        <FormControl sx={{ ml: 2, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">View</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedView}
            label="View"
            onChange={handleChange}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="outlined" size="small">
          Back
        </Button>
        <Button variant="contained" size="small">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ViewSelector;
