import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

export default function LoadinScreen() {
  return (
    <Box
      width="100%"
      height="100vh"
      zIndex="1000"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="success" />;
    </Box>
  );
}
