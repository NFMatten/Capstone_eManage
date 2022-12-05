import { Paper, Link } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const MenuItems = (props) => {
  const [user, token] = useAuth();
  return (
    <div>
      <Paper elevation={4} sx={{ marginBottom: "50px", alignItems: "center" }}>
        <Link underline="hover" href="/calendar">
          {"View Calendar |"}
        </Link>
        <Link underline="hover" href="/payroll">
          {" Payroll |"}
        </Link>
        <Link underline="hover" href="/profile">
          {" Update Personal Information "}
        </Link>
        {user.is_manager ? (
          <Link underline="hover" href="/employees">
            {"| Employees"}
          </Link>
        ) : (
          <></>
        )}
      </Paper>
    </div>
  );
};

export default MenuItems;
