import styled from "@emotion/styled";
import { Grid, Typography, Button, Container, SvgIcon } from "@mui/material";
import React from "react";
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

const StyledButton = styled(Button)({
  marginRight: (theme) => theme.spacing(1),
});

const StyledNextButton = styled(Button)({
  backgroundColor: "#2196F3",
  color: "#fff",
});

const StyledGridItem = styled(Grid)({
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: (theme) => theme.spacing(2),
  marginBottom: (theme) => theme.spacing(2),
  display: "flex",
  alignItems: "center",
});

const StyledIcon = styled(SvgIcon)({
  marginRight: (theme) => theme.spacing(1), 
});

export default function ManageProjects() {
  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Who can manage projects
      </Typography>

      <StyledForm>
        <Typography>
          Don't panic - You can also customize these permissions in settings
        </Typography>
        <Grid className="type">
          <StyledGridItem item>
            <StyledIcon>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z" />
            </StyledIcon>
            <div>
              <Typography variant="h5">Everyone</Typography>
              <Typography>
                All users can now see it, but guests cannot access the projects
              </Typography>
            </div>
          </StyledGridItem>
          <StyledGridItem item>
            <StyledIcon>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z" />
            </StyledIcon>
            <div>
              <Typography variant="h5">Only Admin's</Typography>
              <Typography>Only admins can manage everything.</Typography>
            </div>
          </StyledGridItem>
          <StyledGridItem item>
            <StyledIcon>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z" />
            </StyledIcon>
            <div>
              <Typography variant="h5">Only to Specific people</Typography>
              <Typography>
                Only some specific people can able to see it
              </Typography>
            </div>
          </StyledGridItem>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Link to="/view">
              <StyledButton variant="outlined">{"<"} Back</StyledButton>
            </Link>
          </Grid>
          <Grid item xs={6} />
          <Grid item>
            <Link to="/">
              <StyledNextButton variant="contained">Next</StyledNextButton>
            </Link>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
}
