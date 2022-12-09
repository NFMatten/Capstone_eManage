import { Grid, Paper, Typography, CardMedia } from "@mui/material";

const Features = (props) => {
  const { feature, description, image } = props;
  return (
    <Grid item xs={6} md={5}>
      <Paper elevation={4} sx={{ justifyContent: "center" }}>
        <Typography
          variant="h5"
          color="white"
          sx={{
            textAlign: "center",
            py: "10px",
            mb: 3,
            backgroundColor: "#ffc163",
            boxShadow: 3,
          }}
        >
          {`${feature}`}
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{
            fontWeight: 600,
            textDecoration: "underline",
            textDecorationColor: "orange",
            textDecorationThickness: 2,
          }}
        >{`${description}`}</Typography>
        <br />
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt={`${feature}`}
        />
      </Paper>
    </Grid>
  );
};

export default Features;
