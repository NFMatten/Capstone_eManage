import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Features from "../Features/Features";
import FeaturesList from "../FeaturesList/FeaturesList";
import HomePageSummary from "../HomePageSummary/HomePageSummary";

const HomeLoggedOut = (props) => {
  return (
    <div>
      <Container maxWidth="xl">
        <p>Logged Out</p>
        <Grid
          container
          spacing={2}
          rowSpacing={2}
          sx={{ justifyContent: "center", marginBottom: "3em" }}
        >
          <FeaturesList />
          <HomePageSummary />
          <Features
            feature={"Payroll"}
            description={"Calculate your employee Payroll, before taxes!"}
            image={
              "https://images.unsplash.com/photo-1623857975222-7f25b9575ac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFjY291bnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Features
            feature={"Scheduling"}
            description={"Schedule your employees with our Calendar!"}
            image={
              "https://images.unsplash.com/photo-1616530834117-9167fb0d8ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhbGVuZGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Features
            feature={"Announcements"}
            description={
              "Post new announcments for your employees to stay up to date!"
            }
            image={
              "https://plus.unsplash.com/premium_photo-1661963783275-dff88a0296f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVzc2FnZSUyMGJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Features
            feature={"Employee Data"}
            description={"Update your employee information with ease!"}
            image={
              "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YWJhc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
          />
        </Grid>
      </Container>
    </div>
  );
};

export default HomeLoggedOut;
