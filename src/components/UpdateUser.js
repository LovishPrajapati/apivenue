import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadinScreen from "./LoadingScreen";
import UserForm from "./UserForm";

function UpdateUser() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const data = location.state;

  const initialValues = {
    fname: data?.FirstName,
    lname: data?.LastName,
    email: data?.EmailId,
    phone: data?.PhoneNo,
    password: data?.ActPassword,
    city: data?.City,
    district: data?.District,
    state: data?.State,
    add: data?.Address,
    country: data?.Country,
    role: +data?.UserRoleType,
    mType: "",
    status: +data?.status,
  };

  const onSubmit = (submitData) => {
    setLoading(true);
    const config = {
      method: "put",
      url: `https://cogentmind.tech/PayVenue/api/payvenue/v1/user/update/${data?.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: submitData,
    };

    axios(config)
      .then((response) => {
        setLoading(false);
        navigate("/merchant-list");
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <>
      {loading ? (
        <LoadinScreen />
      ) : (
        <UserForm
          initialValues={initialValues}
          view={false}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
}

export default UpdateUser;
