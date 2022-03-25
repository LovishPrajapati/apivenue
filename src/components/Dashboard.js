import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import LoadinScreen from "./LoadingScreen";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const config = {
    method: "get",
    url: "https://cogentmind.tech/PayVenue/api/payvenue/v1/user",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios(config)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        navigate("/");
      });
  });

  return (
    <>
      {loading ? (
        <LoadinScreen />
      ) : (
        <Box width="100%" height="100vh">
          <img
            src="/images/dash.png"
            alt="dashboard"
            width="100%"
            height="100%"
          ></img>
        </Box>
      )}
    </>
  );
}

export default Dashboard;
