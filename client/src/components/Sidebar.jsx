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

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

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
            MonkMates
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
            {["Profile", "Group", "Habits"].map((menuItem) => {
              return (
                <ListItem style={{ padding: "0px" }}>
                  <ListItemButton style={{ padding: "10px 18px" }}>
                    {menuItem}
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
