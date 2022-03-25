import React from "react";
import { useLocation } from "react-router-dom";
import UserForm from "./UserForm";

function ViewForm() {
  const location = useLocation();

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
  return <UserForm initialValues={initialValues} view={true} />;
}

export default ViewForm;
