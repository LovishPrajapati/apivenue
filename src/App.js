import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import MerchantList from "./components/MerchantList";
import SignUp from "./components/SignUp";
import UserForm from "./components/UserForm";
import ViewForm from "./components/ViewForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/merchant-list" element={<MerchantList />} />
        <Route path="/add-user" element={<UserForm />} />
        <Route path="/view-user" element={<ViewForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
