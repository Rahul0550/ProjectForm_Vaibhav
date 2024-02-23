import React from "react";
import { Container, Typography, Button, Checkbox, TextField, FormControlLabel, Grid, ToggleButton, ToggleButtonGroup, Select, MenuItem, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { Link } from 'react-router-dom';

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const StyledForm = styled("form")({
  width: "80%",
  maxWidth: "400px",
  marginTop: (theme) => theme.spacing(4),
});

const StyledLabel = styled('label')({
  fontWeight: 'bold',
});

const StyledButton = styled(Button)({
  marginRight: (theme) => theme.spacing(1),
});

const StyledNextButton = styled(Button)({
    backgroundColor: "#2196F3",
    color: "#fff",
});
export default function ProjectTypeForm() {

  const [alignment, setAlignment] = useState('T&M');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Project Type
      </Typography>
      <StyledForm>
        <StyledLabel>Don't panic - You can also customize these types in settings</StyledLabel>

        <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="T&M">Time & Materials</ToggleButton>
      <ToggleButton value="FixedFee">Fixed Fee</ToggleButton>
      <ToggleButton value="NonBill">Non-Billable</ToggleButton>
    </ToggleButtonGroup>

        {/* <Button variant="contained">Time & Materials</Button>
        <Button variant="contained">Fixed Fee</Button>
        <Button variant="contained">Non-Billable</Button> */}

        <StyledLabel>Hourly</StyledLabel>
        <p>We need hourly rates to track your project's billable amount</p>
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={6}>
  <InputLabel id="client-label">Project Hourly Rate</InputLabel>
  <Select
    fullWidth
    labelId="client-label"
    label="Choose Project Hourly Rate"
    placeholder="Project Hourly Rate"
    // value={hourlyRate}
    // onChange={(e) => setHourlyRate(e.target.value)}
  >
    {/* Add your client options here */}
    <MenuItem value="client1">1000</MenuItem>
    <MenuItem value="client2">1200</MenuItem>
    <MenuItem value="client3">1500</MenuItem>
    <MenuItem value="client4">1800</MenuItem>
    <MenuItem value="client5">2000</MenuItem>
  </Select>
</Grid>

          <Grid item xs={6} sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField fullWidth placeholder="Enter Hourly Rate" />
          </Grid>
        </Grid>

        <StyledLabel>Budget</StyledLabel>
        <p>We need hourly rates to track your project's billable amount</p>
        <TextField placeholder="Hours per Person" fullWidth margin="normal" />
        
        <FormControlLabel control={<Checkbox />} label="Budget resets every month" />
        <FormControlLabel control={<Checkbox />} label="Send email alerts if project exceeds %" />
        <TextField type="number" fullWidth margin="normal" placeholder="Enter percentage" />

        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Link to="/">
              <StyledButton variant="outlined">
                {"<"} Back
              </StyledButton>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/view">
              <StyledNextButton variant="outlined">
                Next
              </StyledNextButton>
            </Link>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
}
