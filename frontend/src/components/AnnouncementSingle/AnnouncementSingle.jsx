import { Typography, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AnnouncementSingle = (props) => {
  const { announcement, user } = props;
  return (
    <>
      {announcement.id === 1 ? (
        <Container sx={{ my: 2 }}>
          <Typography variant="h6" color="#ffa317">
            <AccountCircleIcon />
            {announcement.user.username}
          </Typography>
          <Typography variant="subtitle2" sx={{ marginLeft: "30px" }}>
            {announcement.announcement}
          </Typography>
        </Container>
      ) : (
        <Container
          sx={{
            my: 2,
            paddingBottom: 2,
            borderBottom: 2,
            borderColor: "#fff0d8",
          }}
        >
          <Typography variant="h6" color="#ffa317">
            <AccountCircleIcon />
            {announcement.user.username}
          </Typography>
          <Typography variant="subtitle2" sx={{ marginLeft: "30px" }}>
            {announcement.announcement}
          </Typography>
        </Container>
      )}
    </>
  );
};

export default AnnouncementSingle;
