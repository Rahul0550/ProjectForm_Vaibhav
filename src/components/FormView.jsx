import styled from "@emotion/styled";
import { Container, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)({
  marginRight: (theme) => theme.spacing(1),
});

const StyledNextButton = styled(Button)({
  backgroundColor: "#2196F3",
  color: "#fff",
});
const StyledForm = styled("form")({
  width: "80%",
  maxWidth: "400px",
  marginTop: (theme) => theme.spacing(4),
});

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

export default function FormView() {
  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Select a view
      </Typography>

      <StyledForm>
        <Typography>You can also customize these views in settings</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Link to="/project-type">
              <StyledButton variant="outlined">{"<"} Back</StyledButton>
            </Link>
          </Grid>
          <Grid item xs={6} />
          <Grid item>
            <Link to="/project-type">
              <StyledNextButton variant="contained">Next</StyledNextButton>
            </Link>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
}
