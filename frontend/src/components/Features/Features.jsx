import { Grid, Paper, Typography } from "@mui/material";

const Features = (props) => {
  const { feature, description } = props;
  return (
    <Grid item xs={6} md={5}>
      <Paper elevation={3} sx={{ justifyContent: "center", padding: 5 }}>
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
      </Paper>
    </Grid>
  );
};

export default Features;
