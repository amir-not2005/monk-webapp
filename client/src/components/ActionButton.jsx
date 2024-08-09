import { Button } from "@mui/material";
import React from "react";

const ActionButton = ({ onClick, text, icon: IconComponent }) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      size="small"
      startIcon={IconComponent && <IconComponent />}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
