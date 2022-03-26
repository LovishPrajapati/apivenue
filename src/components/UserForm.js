import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React  from "react";
import { useForm, Controller } from "react-hook-form";

function UserForm(props) {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: props?.initialValues || {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      password: "",
      city: "",
      district: "",
      state: "",
      add: "",
      country: "",
      role: "",
      mType: "",
      status: true,
    },
  });

  const onSubmit = (formData) => {
    let data = {
      FirstName: formData?.fname,
      LastName: formData?.lname,
      PhoneNo: formData?.phone,
      EmailId: formData?.email,
      password: formData?.password,
      UserRoleType: +formData?.role,
    };

    formData?.add && (data = { ...data, Address: formData?.add });
    formData?.district && (data = { ...data, District: formData?.district });
    formData?.city && (data = { ...data, City: formData?.city });
    formData?.state && (data = { ...data, State: formData?.state });
    formData?.country && (data = { ...data, Country: formData?.country });
    formData?.status && (data = { ...data, status: formData?.status });

    props.onSubmit(data);
  };

  return (
    <>
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
                  {props?.view ? "View" : "Create"} User/Merchant
                </Typography>
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
            <Typography
              sx={{
                padding: "15px 25px",
              }}
            >
              {props?.view ? "View" : "Create"} User/Merchant
            </Typography>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{
                  padding: "15px 25px",
                }}
              >
                <Grid item container xs={12} spacing={2}>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="fname"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      First Name{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.fname && errors?.fname?.message}
                      </span>
                    </InputLabel>
                    <Controller
                      name="fname"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: "This is Required",
                        },
                      }}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="fname"
                            type="text"
                            disabled={props.view}
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="lname"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      Last Name{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.lname && errors?.lname?.message}
                      </span>
                    </InputLabel>
                    <Controller
                      name="lname"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: "This is Required",
                        },
                      }}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="lname"
                            type="text"
                            disabled={props.view}
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="phone"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      Phone Number{" "}
                      <span style={{ color: "red", fontSize: "12px" }}>
                        {errors?.phone && errors?.phone?.message}
                      </span>
                    </InputLabel>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{
                        required: {
                          value: true,
                          message: "This is Required",
                        },
                      }}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="phone"
                            type="tel"
                            disabled={props.view}
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="email"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
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
                        required: {
                          value: true,
                          message: "This is Required",
                        },
                      }}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="email"
                            type="email"
                            disabled={props.view}
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="password"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
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
                        required: {
                          value: true,
                          message: "This is Required",
                        },
                      }}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="password"
                            type="password"
                            disabled={props.view}
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="mType"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      Member Type
                    </InputLabel>
                    <FormControl variant="outlined" fullWidth>
                      <TextField id="mType" disabled={props.view} type="text" />
                    </FormControl>
                  </Grid>
                  {!props.view && (
                    <Grid item container xs={6} sx={{ mb: "10px" }}>
                      <InputLabel
                        htmlFor="role"
                        sx={{
                          fontSize: "14px",
                          lineHeight: "19px",
                          color: "#000000",
                        }}
                      >
                        Role Type
                      </InputLabel>
                      <Controller
                        name="role"
                        type="select"
                        control={control}
                        rules={{
                          required: {
                            value: true,
                            message: "Please fill this",
                          },
                        }}
                        render={({ field }) => (
                          <FormControl variant="outlined" fullWidth>
                            <Select
                              {...field}
                              error={errors?.role ? true : false}
                              disabled={props.view}
                            >
                              <MenuItem value={1}>Merchant</MenuItem>
                              <MenuItem value={2}>Retailer</MenuItem>
                              <MenuItem value={3}>Distributor</MenuItem>
                            </Select>
                          </FormControl>
                        )}
                      />
                    </Grid>
                  )}
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="add"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      Address (Optional)
                    </InputLabel>
                    <Controller
                      name="add"
                      control={control}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="add"
                            type="text"
                            disabled={props.view}
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="district"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      District (Optional)
                    </InputLabel>
                    <Controller
                      name="district"
                      control={control}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="district"
                            type="text"
                            disabled={props.view}
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="city"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      City (Optional)
                    </InputLabel>
                    <Controller
                      name="city"
                      control={control}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="city"
                            type="text"
                            disabled={props.view}
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="state"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      State (Optional)
                    </InputLabel>
                    <Controller
                      name="state"
                      control={control}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="state"
                            type="text"
                            disabled={props.view}
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="country"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      Country (Optional)
                    </InputLabel>
                    <Controller
                      name="state"
                      control={control}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <TextField
                            id="country"
                            disabled={props.view}
                            type="text"
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  </Grid>
                  <Grid item container xs={6} sx={{ mb: "10px" }}>
                    <InputLabel
                      htmlFor="status"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "19px",
                        color: "#000000",
                      }}
                    >
                      Status
                    </InputLabel>
                    <Controller
                      name="status"
                      type="switch"
                      control={control}
                      render={({ field }) => (
                        <FormControl variant="outlined" fullWidth>
                          <Switch id="status" {...field} />
                        </FormControl>
                      )}
                    />
                  </Grid>
                </Grid>
              </Box>
              {!props?.view && (
                <>
                  <hr />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "22px 28px",
                    }}
                  >
                    <Button
                      sx={{
                        width: "110px",
                        height: "43px",
                        background: "#081930",
                        borderRadius: "22px",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        lineHeight: "19px",
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                    <Button
                      sx={{
                        width: "110px",
                        height: "43px",
                        backgroundColor: "#081930",
                        borderRadius: "22px",
                        opacity: 0.2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#081930",
                          opacity: 1,
                        }}
                      >
                        Cancel
                      </Typography>
                    </Button>
                  </Box>
                </>
              )}
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default UserForm;
