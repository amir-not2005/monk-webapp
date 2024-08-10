import React from "react";
import Sidebar from "../components/Sidebar";
import { Box, Divider } from "@mui/material";
import GroupCalendar from "../components/GroupCalendar";
import Friends from "../components/Friends";

const Group = ({ groupName }) => {
  return (
    <Box>
      <Sidebar pageName="Group" />
      <Box p={4}>
        <Box>
          <GroupCalendar />
        </Box>
        <Divider style={{ margin: "10px 0px" }} />
        <Box>
          <Friends />
        </Box>
      </Box>
    </Box>
  );
};

export default Group;
