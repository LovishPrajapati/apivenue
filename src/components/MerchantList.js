import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadinScreen from "./LoadingScreen";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

function MerchantList() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://cogentmind.tech/PayVenue/api/payvenue/v1/user",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    axios(config)
      .then((response) => {
        if (response.data.success) {
          setList(response.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        navigate("/");
      });
  }, [navigate]);

  return (
    <>
      {loading ? (
        <LoadinScreen />
      ) : (
        <Grid item container xs={12} mt="30px" justifyContent="center">
          <Grid item container xs={12} justifyContent="center">
            <Box width="95%">
              <Grid item container xs={12}>
                <Grid item container xs={6}>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      lineHeight: "33px",
                      fontWeight: 600,
                    }}
                  >
                    User/Merchant List
                  </Typography>
                </Grid>
                <Grid item container xs={6} justifyContent="flex-end">
                  <Button
                    sx={{
                      //   width: "137px",
                      height: "35px",
                      borderRadius: "18px",
                      background: "#FFB53F",
                      color: "#000000",
                      fontSize: "15px",
                      lineHeight: "20px",
                    }}
                  >
                    <AddIcon size="small" />
                    Add Member
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Box
              mt="24px"
              width="95%"
              sx={{
                boxShadow: "0px 0px 5px #D9D9E5",
                borderRadius: "8px",
              }}
            >
              <Grid item container xs={12}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>S. No.</TableCell>
                      <TableCell>Merchant ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list?.map((item, index) => (
                      <TableRow
                        sx={{
                          background:
                            (index + 1) % 2 === 0 ? "#fff" : "#F4F7FE",
                        }}
                      >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item?.id}</TableCell>
                        <TableCell>
                          {item?.FirstName + " " + item?.LastName}
                        </TableCell>
                        <TableCell>{item?.PhoneNo}</TableCell>
                        <TableCell>{item?.EmailId}</TableCell>
                        <TableCell>{item?.status}</TableCell>
                        <TableCell>
                          <Box display="flex">
                            <Box
                              width="30px"
                              height="30px"
                              borderRadius="100%"
                              mr="4px"
                              sx={{ background: "#0387FB" }}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <AddIcon />
                            </Box>
                            <Box
                              width="30px"
                              height="30px"
                              borderRadius="100%"
                              mr="4px"
                              sx={{ background: "#0387FB" }}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <AddIcon />
                            </Box>
                            <Box
                              width="30px"
                              height="30px"
                              borderRadius="100%"
                              sx={{ background: "#0387FB" }}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <AddIcon />
                            </Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default MerchantList;
