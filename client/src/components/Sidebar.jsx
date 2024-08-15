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

const Sidebar = ({ pageName }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const menuItems = [
    { name: "Profile", url: "http://localhost:3000/profile" },
    { name: "Group", url: "http://localhost:3000/group" },
    { name: "Dashboard", url: "http://localhost:3000/dashboard" },
    { name: "Log Out", url: "http://localhost:3000/auth" },
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
            {menuItems.map(({ name, url }) => {
              return (
                <ListItem style={{ padding: "0px" }} key={name}>
                  <ListItemButton style={{ padding: "10px 18px" }} href={url}>
                    {name}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
