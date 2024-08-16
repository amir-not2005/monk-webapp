import {
  Box,
  Card,
  CardContent,
  Icon,
  Typography,
  Grid,
  IconButton,
  Avatar,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

const Friends = ({ groupMembers }) => {
  return (
    <Grid container spacing={2}>
      {[
        {
          name: "Altair Zhaksylyk",
          goals: [
            { title: "Read 20 pages", isFinished: true },
            { title: "10 Leetcode exercises", isFinished: false },
            { title: "make 100 pushups a day", isFinished: true },
          ],
        },
        {
          name: "Altair Zhaksylyk",
          goals: [
            { title: "Read 20 pages", isFinished: true },
            { title: "10 Leetcode exercises", isFinished: false },
            { title: "make 100 pushups a day", isFinished: true },
          ],
        },
        {
          name: "Altair Zhaksylyk",
          goals: [
            { title: "Read 20 pages", isFinished: true },
            { title: "10 Leetcode exercises", isFinished: false },
            { title: "make 100 pushups a day", isFinished: true },
          ],
        },
      ].map((groupMember) => {
        return (
          <Grid item xs={6}>
            <Card elevation={5}>
              <CardContent>
                <Box>
                  <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                  >
                    <Box display="flex" gap={2} alignItems="baseline">
                      <Avatar>H</Avatar>
                      <Typography variant="h6"> {groupMember.name} </Typography>
                    </Box>
                    <IconButton>
                      <RemoveCircleOutlineIcon style={{ color: "red" }} />
                    </IconButton>
                  </Stack>
                </Box>
              </CardContent>
              <List>
                {groupMember.goals.map((goal) => {
                  return (
                    <ListItem>
                      <Stack spacing={2} direction="row">
                        <Icon>
                          {goal.isFinished ? (
                            <DoneIcon style={{ color: "green" }} />
                          ) : (
                            <CloseIcon style={{ color: "red" }} />
                          )}
                        </Icon>
                        <Typography variant="body1"> {goal.title} </Typography>
                      </Stack>
                    </ListItem>
                  );
                })}
              </List>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Friends;
