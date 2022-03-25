import React, { useEffect, useState } from "react";
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
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import LoadinScreen from "./LoadingScreen";

const emailRegx =
  '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/)';

function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
    },
  });

  const con = {
    method: "get",
    url: "https://cogentmind.tech/PayVenue/api/payvenue/v1/user",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    axios(con)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  });

  const onSubmit = (formData) => {
    setLoading(true);
    const data = JSON.stringify({
      FirstName: formData.fname,
      LastName: formData.lname,
      PhoneNo: formData.phone,
      EmailId: formData.email,
      password: formData.password,
    });

    const config = {
      method: "post",
      url: "https://cogentmind.tech/PayVenue/api/payvenue/v1/register",
      headers: {
        Authorization: "ecCIpsMXYix7R0JDFl1DiNYRmJSdvcZiPkN",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setLoading(false);
        if (response.data.success) {
          alert("Register Success. Login Now");
          navigate("/");
        }
      })
      .catch(function (error) {
        setLoading(false);
        alert(JSON.stringify(error.response?.data?.message));
      });
  };

  return (
    <>
      {loading ? (
        <LoadinScreen />
      ) : (
        <Grid
          container
          xs={12}
          alignItems="center"
          sx={{ position: "relative" }}
        >
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
          <Grid
            item
            container
            xs={6}
            sx={{ background: "#FCB440", width: "100%" }}
          >
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
              <form onSubmit={handleSubmit(onSubmit)}>
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
                      FIRST NAME{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.fname && errors?.fname?.message}
                      </span>
                    </InputLabel>
                    <Controller
                      name="fname"
                      control={control}
                      rules={{
                        required: { value: true, message: "This is Required" },
                        minLength: {
                          value: 2,
                          message: "Minimum length must be 2",
                        },
                      }}
                      render={({ field }) => (
                        <FormControl variant="standard" fullWidth>
                          <Input
                            id="fname"
                            type="text"
                            error={errors?.fname}
                            {...field}
                            endAdornment={
                              <InputAdornment>
                                <PersonOutlineIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      )}
                    />
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
                      LAST NAME{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.lname && errors?.lname?.message}
                      </span>
                    </InputLabel>
                    <Controller
                      name="lname"
                      control={control}
                      rules={{
                        required: { value: true, message: "This is Required" },
                      }}
                      render={({ field }) => (
                        <FormControl variant="standard" fullWidth>
                          <Input
                            id="lname"
                            type="text"
                            error={errors?.lname}
                            {...field}
                            endAdornment={
                              <InputAdornment>
                                <PersonOutlineIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      )}
                    />
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
                      EMAIL ID{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.email && errors?.email?.message}
                      </span>
                    </InputLabel>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: { value: true, message: "This is Required" },
                        pattern: {
                          value: emailRegx,
                          message: "Invalid email",
                        },
                      }}
                      render={({ field }) => (
                        <FormControl variant="standard" fullWidth>
                          <Input
                            id="email"
                            type="email"
                            {...field}
                            error={errors?.email}
                            endAdornment={
                              <InputAdornment>
                                <MailIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      )}
                    />
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
                      MOBILE NUMBER{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.phone && errors?.phone?.message}
                      </span>
                    </InputLabel>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{
                        required: { value: true, message: "This is Required" },
                      }}
                      render={({ field }) => (
                        <FormControl variant="standard" fullWidth>
                          <Input
                            id="phone"
                            type="tel"
                            error={errors?.phone}
                            {...field}
                            endAdornment={
                              <InputAdornment>
                                <PhoneAndroidIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      )}
                    />
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
                      PASSWORD{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.password && errors?.password?.message}
                      </span>
                    </InputLabel>
                    <Controller
                      name="password"
                      control={control}
                      rules={{
                        required: { value: true, message: "This is Required" },
                        minLength: { value: 6, message: "Minimum length is 6" },
                      }}
                      render={({ field }) => (
                        <FormControl variant="standard" fullWidth>
                          <Input
                            id="password"
                            type="password"
                            error={errors?.password}
                            {...field}
                            endAdornment={
                              <InputAdornment>
                                <LockIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      )}
                    />
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
                      CONFIRM PASSWORD{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.cpassword && errors?.cpassword?.message}
                      </span>
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.cpassword &&
                          errors?.cpassword?.type === "validate" &&
                          "Password did not matched."}
                      </span>
                    </InputLabel>
                    <Controller
                      name="cpassword"
                      control={control}
                      rules={{
                        required: { value: true, message: "This is Required" },
                        minLength: { value: 6, message: "Minimum Length is 6" },
                        validate: (value) => value === getValues("password"),
                      }}
                      render={({ field }) => (
                        <FormControl variant="standard" fullWidth>
                          <Input
                            id="cpassword"
                            type="password"
                            error={errors?.cpassword}
                            {...field}
                            endAdornment={
                              <InputAdornment>
                                <VisibilityOffIcon />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      )}
                    />
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
                  type="submit"
                >
                  SIGN UP
                </Button>
              </form>
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
      )}
    </>
  );
}

export default SignUp;
