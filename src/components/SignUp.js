import React from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import { Box } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import MailIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function SignUp() {
  const navigate = useNavigate();

  return (
    <Grid container xs={12} alignItems="center" sx={{ position: "relative" }}>
      <Grid item container xs={6}>
        <Box
          sx={{
            background: "#081930",
            width: "100%",
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
            mt="81.01px"
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
              Already have an account ?
            </Typography>
            <Button
              variant="outlined"
              sx={{
                marginTop: "44px",
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
              onClick={() => navigate("/")}
            >
              SIGN IN
            </Button>
          </Box>
          <Box mt="93px">
            <img
              alt="login-page"
              src="/images/loginCreative.png"
              width="621px"
              height="321px"
            ></img>
          </Box>
        </Box>
      </Grid>
      <Grid item container xs={6} sx={{ background: "#FCB440", width: "100%" }}>
        <Box
          sx={{
            margin: "52px 44px 52px 0px",
            width: "100%",
            background: "white",
            borderRadius: "0px 24px 24px 0px",
            padding: "0px 59px",
          }}
        >
          <Box mt="49px">
            <Typography
              sx={{
                fontSize: "30px",
                lineHeight: "46px",
                color: "#000000",
                fontWeight: 800,
              }}
            >
              Create An Account
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "25px",
                color: "#000000",
                marginTop: "7px",
              }}
            >
              Enter your personal details and start journey with us.
            </Typography>
          </Box>
          <Box mt="39px">
            <Box>
              <InputLabel
                htmlFor="fname"
                sx={{
                  fontSize: "15px",
                  lineHeight: "23px",
                  opacity: "0.55",
                  color: "#000000",
                }}
              >
                FIRST NAME
              </InputLabel>
              <FormControl variant="standard" fullWidth>
                <Input
                  id="fname"
                  type="text"
                  endAdornment={
                    <InputAdornment>
                      <PersonOutlineIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box mt="28px">
              <InputLabel
                htmlFor="lname"
                sx={{
                  fontSize: "15px",
                  lineHeight: "23px",
                  opacity: "0.55",
                  color: "#000000",
                }}
              >
                LAST NAME
              </InputLabel>
              <FormControl variant="standard" fullWidth>
                <Input
                  id="lname"
                  type="text"
                  endAdornment={
                    <InputAdornment>
                      <PersonOutlineIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box mt="28px">
              <InputLabel
                htmlFor="email"
                sx={{
                  fontSize: "15px",
                  lineHeight: "23px",
                  opacity: "0.55",
                  color: "#000000",
                }}
              >
                EMAIL ID
              </InputLabel>
              <FormControl variant="standard" fullWidth>
                <Input
                  id="email"
                  type="email"
                  endAdornment={
                    <InputAdornment>
                      <MailIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box mt="28px">
              <InputLabel
                htmlFor="phone"
                sx={{
                  fontSize: "15px",
                  lineHeight: "23px",
                  opacity: "0.55",
                  color: "#000000",
                }}
              >
                MOBILE NUMBER
              </InputLabel>
              <FormControl variant="standard" fullWidth>
                <Input
                  id="phone"
                  type="tel"
                  endAdornment={
                    <InputAdornment>
                      <PhoneAndroidIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box mt="28px">
              <InputLabel
                htmlFor="password"
                sx={{
                  fontSize: "15px",
                  lineHeight: "23px",
                  opacity: "0.55",
                  color: "#000000",
                }}
              >
                PASSWORD
              </InputLabel>
              <FormControl variant="standard" fullWidth>
                <Input
                  id="password"
                  type="password"
                  endAdornment={
                    <InputAdornment>
                      <LockIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box mt="28px">
              <InputLabel
                htmlFor="cpassword"
                sx={{
                  fontSize: "15px",
                  lineHeight: "23px",
                  opacity: "0.55",
                  color: "#000000",
                }}
              >
                CONFIRM PASSWORD
              </InputLabel>
              <FormControl variant="standard" fullWidth>
                <Input
                  id="cpassword"
                  type="password"
                  endAdornment={
                    <InputAdornment>
                      <VisibilityOffIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
          <Button
            fullWidth
            sx={{
              height: "50px",
              background: "#081930",
              color: "#FFFFFF",
              fontSize: "20px",
              lineHeight: "30px",
              marginTop: "46px",
              marginBottom: "56px",
              boxShadow: "0px 0px 20px #08193080",
              borderRadius: "71px",
              "&:hover": {
                background: "#081930",
              },
            }}
          >
            SIGN UP
          </Button>
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

export default SignUp;
