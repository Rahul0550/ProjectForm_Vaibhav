import React from 'react';
import styled from "@emotion/styled";
import { Container, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Assuming a light blue background color from the image
const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#e0f2f1', // Adjust based on the image
});

const StyledTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px', // Adjust spacing as needed
});

const StyledText = styled(Typography)({
  fontSize: '16px',
  marginBottom: '10px', // Adjust spacing as needed
});

const StyledButton = styled(Button)({
  backgroundColor: '#2196f3', // Adjust based on the image
  color: '#fff',
  marginRight: '10px', // Adjust spacing as needed
});

const StyledNextButton = styled(Button)({
  backgroundColor: '#2196f3', // Adjust based on the image
  color: '#fff',
});

export default function ManageProjects() {
  return (
    <StyledContainer>
      <StyledTitle variant="h4" gutterBottom>
        Who can manage projects
      </StyledTitle>

      <StyledText>
        Don't panic - You can also customize these permissions in settings
      </StyledText>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <StyledText variant="h5">Everyone</StyledText>
              <StyledText>All users can now see it, but guests cannot access the projects.</StyledText>
            </Grid>
            <Grid item xs={4}>
              <StyledText variant="h5">Only Admin's</StyledText>
              <StyledText>Only admins can manage everything.</StyledText>
            </Grid>
            <Grid item xs={4}>
              <StyledText variant="h5">Only to Specific people</StyledText>
              <StyledText>Only some specific people can able to see it</StyledText>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Link to="/view">
            <StyledButton variant="contained">{"<"} Back</StyledButton>
          </Link>
        </Grid>
        <Grid item xs={6} />
        <Grid item>
          <Link to="/">
            <StyledNextButton variant="contained">Next</StyledNextButton>
          </Link>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}