import { Typography, Paper } from "@mui/material";

const AnnouncementSingle = (props) => {
  const { parentAnnoucements } = props;

  return (
    <div>
      <Paper elevation={4}>
        <Typography>{parentAnnoucements.user} </Typography>
        <Typography>{parentAnnoucements.announcement} </Typography>
      </Paper>
    </div>
  );
};

export default AnnouncementSingle;
