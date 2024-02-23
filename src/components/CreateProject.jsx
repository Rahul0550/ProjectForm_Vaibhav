import React from "react";
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Pagination,
} from "@mui/material";
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

const StyledLabel = styled("label")({
  fontWeight: "bold",
  marginBottom: 8,
});

const StyledButton = styled(Button)({
  marginRight: (theme) => theme.spacing(1),
});

const StyledNextButton = styled(Button)({
  backgroundColor: "#2196F3",
  color: "#fff",
});

export default function CreateProjectForm() {
  const [page, setPage] = React.useState(1); // Initial page state
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    // Update form content based on page change (if necessary)
  };

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Create a Project
      </Typography>
      <StyledForm>
        <StyledLabel>Project Name</StyledLabel>
        <TextField
          label="Enter project name here"
          placeholder="Enter Project name here"
          fullWidth
          margin="normal"
          sx={{ marginBottom: 2 }}
        />

        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={6}>
            <StyledLabel>Client</StyledLabel>
            <Select fullWidth placeholder="Select a client">
              <MenuItem value="">Select a client</MenuItem>
              {/* Add your client options here */}
              <MenuItem value="client1">Client 1</MenuItem>
              <MenuItem value="client2">Client 2</MenuItem>
              <MenuItem value="client3">Client 3</MenuItem>
              <MenuItem value="client4">Client 4</MenuItem>
              <MenuItem value="client5">Client 5</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField fullWidth placeholder="+ New Client" />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={6}>
            <StyledLabel>Start Date</StyledLabel>
            <TextField type="date" fullWidth margin="normal" />
          </Grid>
          <Grid item xs={6}>
            <StyledLabel>End Date</StyledLabel>
            <TextField type="date" fullWidth margin="normal" />
          </Grid>
        </Grid>

        <StyledLabel>Notes</StyledLabel>
        <TextField
          label="Optional"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          sx={{ marginBottom: 2 }}
        />

        <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 2 }}>
          <Grid item xs={6}>
            <StyledButton  disableElevation>
              {"<"} Back
            </StyledButton>
          </Grid>
          <Grid item xs={6}>
            <Link to="/project-type">
              <StyledNextButton variant="contained">Next</StyledNextButton>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          {/* Position pagination dots below the form content */}
          <Pagination
            count={6} // Adjust this based on your total number of pages
            page={page}
            onChange={handlePageChange}
            render={({ type, item, active }) => (
              <span
                key={item}
                style={{
                  margin: "5px",
                  borderRadius: "50%",
                  backgroundColor: active ? "#2196F3" : "#ccc",
                  width: "10px",
                  height: "10px",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                {item}
              </span>
            )}
          />
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
}
