import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/home-page";
import AddUserPage from "./pages/add-user";
import EditUserPage from "./pages/edit-user";

export default function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add-user' element={<AddUserPage />} />
        <Route path='/edit-user/:id' element={<EditUserPage />} />
      </Routes>
    </div>
  );
}
