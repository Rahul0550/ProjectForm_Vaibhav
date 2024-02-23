import React from "react";
import { Container, Typography, TextField, Select, MenuItem, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

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

export default function CreateProjectForm() {
  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Create a Project
      </Typography>
      <StyledForm>
        <StyledLabel>Project Name</StyledLabel>
        <TextField label="Enter project name here" placeholder="Enter Project name here" fullWidth margin="normal" />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StyledLabel>Client</StyledLabel>
            <Select fullWidth placeholder="Select a client">
              {/* Add your client options here */}
              <MenuItem value="client1">Client 1</MenuItem>
              <MenuItem value="client2">Client 2</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <StyledLabel>&nbsp;</StyledLabel>
            <Select fullWidth placeholder="+ New Client">
              {/* Add your new client options here */}
            </Select>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StyledLabel>Dates</StyledLabel>
            <TextField type="date" fullWidth margin="normal" />
          </Grid>
          <Grid item xs={6}>
            <StyledLabel>&nbsp;</StyledLabel>
            <TextField type="date" fullWidth margin="normal" />
          </Grid>
        </Grid>

        <StyledLabel>Notes</StyledLabel>
        <TextField label="Optional" fullWidth multiline rows={4} margin="normal" />

        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <StyledButton variant="outlined">
              {"<"} Back
            </StyledButton>
          </Grid>
          <Grid item xs={6} />
          <Grid item>
            {/* Link to the next page */}
            <Link to="/project-type">
              <StyledNextButton variant="contained">
                Next
              </StyledNextButton>
            </Link>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
}
