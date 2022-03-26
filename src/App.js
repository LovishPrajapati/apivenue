import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import MerchantList from "./components/MerchantList";
import SignUp from "./components/SignUp";
import UpdateUser from "./components/UpdateUser";
import ViewForm from "./components/ViewForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/merchant-list" element={<MerchantList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/view-user" element={<ViewForm />} />
        <Route path="/update-user" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
