import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import LoadingScreen from "./LoadingScreen";

function AddUser() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
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
  };

  const onSubmit = (data) => {
    setLoading(true);
    const config = {
      method: "post",
      url: "https://cogentmind.tech/PayVenue/api/payvenue/v1/user/create",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
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
        <LoadingScreen />
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

export default AddUser;
