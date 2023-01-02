import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Drawer, Box, IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

// icons
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuIcon from "@mui/icons-material/Menu";

const CustomDrawer = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [user] = useAuth();
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        arial-label="Menu"
        onClick={() => setIsDrawerOpen(true)}
        sx={{ mr: 1 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon sx={{ color: "orange" }} />
                </ListItemIcon>
                <ListItem
                  component={Link}
                  to="/"
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{ color: "black", ml: -2 }}
                >
                  Home
                </ListItem>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon sx={{ color: "orange" }} />
                </ListItemIcon>
                <ListItem
                  component={Link}
                  to="/calendar"
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{ color: "black", ml: -2 }}
                >
                  Calendar
                </ListItem>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalanceIcon sx={{ color: "orange" }} />
                </ListItemIcon>
                <ListItem
                  component={Link}
                  to="/payroll"
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{ color: "black", ml: -2 }}
                >
                  Payroll
                </ListItem>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ManageAccountsIcon sx={{ color: "orange" }} />
                </ListItemIcon>
                <ListItem
                  component={Link}
                  to="/profile"
                  onClick={() => setIsDrawerOpen(false)}
                  sx={{ color: "black", ml: -2 }}
                >
                  Update Info
                </ListItem>
              </ListItemButton>
            </ListItem>
            {user.is_manager ? (
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GroupsIcon sx={{ color: "orange" }} />
                  </ListItemIcon>
                  <ListItem
                    component={Link}
                    to="/employees"
                    onClick={() => setIsDrawerOpen(false)}
                    sx={{ color: "black", ml: -2 }}
                  >
                    Employees
                  </ListItem>
                </ListItemButton>
              </ListItem>
            ) : (
              <></>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
