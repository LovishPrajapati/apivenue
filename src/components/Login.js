import React from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    const data = await axios.post(
      "https://cogentmind.tech/PayVenue/api/payvenue/v1/login/",
      { EmailId: formData.email, password: formData.password },
      {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json;charset=utf-8",
        Authorization: "Bearer ecCIpsMXYix7R0JDFl1DiNYRmJSdvcZiPkN",
      }
    );
    console.log({ data });
  };

  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      height="100vh"
      sx={{ position: "relative" }}
    >
      <Grid item container xs={6}>
        <Box
          sx={{
            background: "#081930",
            width: "100%",
            height: "calc(100vh - 104px)",
            margin: "52px 0px 52px 44px",
            borderRadius: "24px 0px 0px 24px",
          }}
        >
          <Box mt="36.33px" ml="32.29px">
            <img
              alt="logo"
              src="/images/logo.svg"
              height="61.65px"
              width="221.07px"
            ></img>
          </Box>
          <Box
            mt="61.01px"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                lineHeight: "46px",
                color: "#fff",
              }}
            >
              Welcome To Payvenue
            </Typography>
            <Typography
              mt="9px"
              sx={{
                fontSize: "20px",
                lineHeight: "30px",
                color: "#FAB23F",
                textAlign: "center",
                opacity: "0.67",
              }}
            >
              New Here ?
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: "55px",
                width: "250px",
                height: "50px",
                borderRadius: "71px",
                color: "#F7B03E",
                borderColor: "#F7B03E",
                "&:hover": {
                  borderColor: "#F7B03E",
                  background: "#F7B03E",
                  color: "#081930",
                },
              }}
              onClick={() => navigate("/signup")}
            >
              SIGN UP
            </Button>
          </Box>
          <Box mt="10px">
            <img
              alt="login-page"
              src="/images/loginCreative.png"
              width="469px"
              height="321px"
            ></img>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        xs={6}
        sx={{ background: "#FCB440", height: "100%", width: "100%" }}
      >
        <Box
          sx={{
            margin: "52px 44px 52px 0px",
            height: "calc(100vh - 104px)",
            width: "100%",
            background: "white",
            borderRadius: "0px 24px 24px 0px",
            padding: "0px 59px",
          }}
        >
          <Box mt="54px">
            <Typography
              sx={{
                fontSize: "30px",
                lineHeight: "46px",
                color: "#000000",
                fontWeight: 800,
              }}
            >
              Sign in
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "25px",
                color: "#000000",
                marginTop: "7px",
              }}
            >
              To keep connected with us please login with your personal info.
            </Typography>
          </Box>
          <Box mt="62px">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <InputLabel
                  htmlFor="email"
                  sx={{
                    fontSize: "15px",
                    lineHeight: "23px",
                    opacity: "0.55",
                    color: "#000000",
                  }}
                >
                  Email{" "}
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors?.email && errors?.email?.message}
                  </span>
                </InputLabel>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: { value: true, message: "This is Required" },
                  }}
                  render={({ field }) => (
                    <FormControl variant="standard" fullWidth>
                      <Input
                        id="email"
                        type="email"
                        error={errors?.email}
                        {...field}
                        endAdornment={
                          <InputAdornment position="end">
                            <MailIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  )}
                />
              </Box>
              <Box mt="50px">
                <InputLabel
                  htmlFor="email"
                  sx={{
                    fontSize: "15px",
                    lineHeight: "23px",
                    opacity: "0.55",
                    color: "#000000",
                  }}
                >
                  Password{" "}
                  <span style={{ color: "red", fontSize: "12px" }}>
                    {errors?.password && errors?.password?.message}
                  </span>
                </InputLabel>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: { value: true, message: "This is Required" },
                  }}
                  render={({ field }) => (
                    <FormControl variant="standard" fullWidth>
                      <Input
                        id="password"
                        type="password"
                        error={errors?.password}
                        {...field}
                        endAdornment={
                          <InputAdornment position="end">
                            <LockIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  )}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                mt="29px"
                alignItems="center"
              >
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Keep me logged in"
                    sx={{
                      fontSize: "17px",
                      lineHeight: "26px",
                    }}
                  />
                </FormGroup>
                <Typography>Forgot Password ?</Typography>
              </Box>
              <Button
                fullWidth
                sx={{
                  height: "50px",
                  background: "#081930",
                  color: "#FFFFFF",
                  fontSize: "20px",
                  lineHeight: "30px",
                  marginTop: "82px",
                  boxShadow: "0px 0px 20px #08193080",
                  borderRadius: "71px",
                  "&:hover": {
                    background: "#081930",
                  },
                }}
                type="submit"
              >
                LOG IN
              </Button>
            </form>
          </Box>
        </Box>
      </Grid>
      <div
        style={{
          width: "160px",
          height: "137px",
          zIndex: "-1",
          background: "#FCB440",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      ></div>
    </Grid>
  );
}

export default Login;
