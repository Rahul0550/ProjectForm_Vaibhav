import React from "react";
import { Container, Typography, Button, Checkbox, TextField, FormControlLabel, Grid } from "@mui/material";
import { styled } from "@mui/system";
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
  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Project Type
      </Typography>
      <StyledForm>
        <StyledLabel>Don't panic - You can also customize these types in settings</StyledLabel>
        <Button variant="contained">Time & Materials</Button>
        <Button variant="contained">Fixed Fee</Button>
        <Button variant="contained">Non-Billable</Button>

        <StyledLabel>Hourly</StyledLabel>
        <p>We need hourly rates to track your project's billable amount</p>
        <TextField placeholder="Project Hourly Rate" fullWidth margin="normal" />
        <TextField type="number" fullWidth margin="normal" />

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
          <Grid item xs={6} />
          <Grid item>
            <StyledNextButton variant="contained">
              Next
            </StyledNextButton>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
}
