import React from "react";
import { Box, Grid, Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";
import FileUpload from "./FileUpload"; // Import your FileUpload component

const Dashboard = () => (
  <Box p={2}>
    <Typography variant="h4" gutterBottom>
      Welcome to Your Dashboard
    </Typography>

    <Grid container spacing={2}>
      {/* Weekly Record Chart */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Weekly Record</Typography>
            <Box sx={{ height: 200, backgroundColor: "#f0f8ff", borderRadius: "8px" }}></Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Monthly Revenue Chart */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6">Monthly Revenue</Typography>
            <Box sx={{ height: 200, backgroundColor: "#f0f8ff", borderRadius: "8px" }}></Box>
          </CardContent>
        </Card>
      </Grid>

      {/* File Upload Section */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">File Upload</Typography>
            <FileUpload />
          </CardContent>
        </Card>
      </Grid>

      {/* Client List */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6">Contributors</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Aldrin Debbarma (Code)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Tiger Nixon (CEO of WhatsApp)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ashton Cox (Founder of Google)" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default Dashboard;
