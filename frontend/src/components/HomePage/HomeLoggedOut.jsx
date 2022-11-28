import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Feature from "../Feature/Feature";
import FeaturesList from "../FeaturesList/FeaturesList";
import HomePageSummary from "../HomePageSummary/HomePageSummary";
import payroll from "../../images/payroll.png";
import data from "../../images/data.png";
import announcement from "../../images/announcement.png";
import scheduling from "../../images/scheduling.png";

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
          <Feature
            feature={"Payroll"}
            description={"Calculate your employee Payroll, before taxes!"}
            image={payroll}
          />
          <Feature
            feature={"Scheduling"}
            description={"Schedule your employees with our Calendar!"}
            image={scheduling}
          />
          <Feature
            feature={"Announcements"}
            description={
              "Keep your employees informed with posting announcments!"
            }
            image={announcement}
          />
          <Feature
            feature={"Employee Data"}
            description={"Update your employee information with ease!"}
            image={data}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default HomeLoggedOut;
