import { Grid, Paper, Typography } from "@mui/material";
import "./Features.css";

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
        <img src={image} className="img-size"></img>
      </Paper>
    </Grid>
  );
};

export default Features;
