import { Typography, Container } from "@mui/material";

const AnnouncementSingle = (props) => {
  const { announcement, user } = props;
  return (
    <Container sx={{ my: 2 }}>
      <Typography variant="h6">{user.username} </Typography>
      <Typography variant="subtitle2" sx={{ marginLeft: "20px" }}>
        {announcement}
      </Typography>
    </Container>
  );
};

export default AnnouncementSingle;
