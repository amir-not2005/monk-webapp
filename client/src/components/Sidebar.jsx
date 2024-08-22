import React from "react";
import {
  Drawer,
  IconButton,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DASHBOARD_ROUTE, GROUP_ROUTE, LOGIN_ROUTE } from "../utils/constants";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Sidebar = observer(({ pageName }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const { user } = React.useContext(Context);
  function logOut() {
    user.setIsAuth(false);
    user.setUser({});
    localStorage.setItem("token", null);
  }

  const menuItems = [
    { name: "Group", url: GROUP_ROUTE },
    { name: "Dashboard", url: DASHBOARD_ROUTE },
    { name: "Log Out", url: LOGIN_ROUTE, onClick: logOut },
  ];

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MonkMates - {pageName}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box textAlign="center" minWidth="200px" boxSizing="border-box">
          <Typography variant="h5" component="div" p="20px">
            Menu
          </Typography>
          <List>
            {menuItems.map((menuItem) => {
              return (
                <ListItem style={{ padding: "0px" }} key={menuItem.name}>
                  <ListItemButton
                    style={{ padding: "10px 18px" }}
                    href={menuItem.url}
                    onClick={menuItem.onClick}
                  >
                    {menuItem.name}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
});

export default Sidebar;
