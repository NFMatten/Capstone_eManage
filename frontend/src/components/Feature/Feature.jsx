import { Grid, Paper, Typography, CardMedia } from "@mui/material";

const Features = (props) => {
  const { feature, description, image } = props;
  return (
    <Grid item xs={6} md={5}>
      <Paper elevation={4} sx={{ justifyContent: "center", padding: 5 }}>
        <Typography
          variant="h5"
          sx={{
            textDecoration: "underline",
            textDecorationColor: "orange",
          }}
        >
          {`${feature}`}
        </Typography>
        <Typography variant="subtitle2">{`${description}`}</Typography>
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
