import styled from "@emotion/styled";
import { Switch } from "@mui/material";
import React from "react";

const CustomToggle = styled(Switch)(({ theme }) => ({
  width: "64px",
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: "100px",
    height: "26px",
    backgroundColor: " #F5F5F5 !important",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: "20px",
    height: "20px",
    margin: 2,
    background: theme.palette.text.grayShade.gray5,
  },
}));

function ToggleButton(props) {
  return <CustomToggle checked={props.active} />;
}
export default ToggleButton;
