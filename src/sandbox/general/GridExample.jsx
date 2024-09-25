import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function GridExample() {
  return (
    <div style={{ margin: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: 16, backgroundColor: "#ffccbc" }}>
            <Typography variant="h5">Full Width</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: 16, backgroundColor: "#c8e6c9" }}>
            <Typography variant="h6">Responsive Grid Item 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: 16, backgroundColor: "#bbdefb" }}>
            <Typography variant="h6">Responsive Grid Item 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={{ padding: 16, backgroundColor: "#fff9c4" }}>
            <Typography variant="h6">Responsive Grid Item 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
