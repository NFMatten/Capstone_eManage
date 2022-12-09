import { Paper, Link, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const MenuItems = (props) => {
  const [user, token] = useAuth();
  return (
    <div>
      <Typography align="center">
        <Link underline="hover" color="common.white" href="">
          {"Home |"}
        </Link>
        <Link underline="hover" color="common.white" href="/calendar">
          {" View Calendar |"}
        </Link>
        <Link underline="hover" color="common.white" href="/payroll">
          {" Payroll |"}
        </Link>
        <Link underline="hover" color="common.white" href="/profile">
          {" Update Personal Information "}
        </Link>
        {user.is_manager ? (
          <Link underline="hover" color="common.white" href="/employees">
            {"| Employees"}
          </Link>
        ) : (
          <></>
        )}
      </Typography>
    </div>
  );
};

export default MenuItems;
