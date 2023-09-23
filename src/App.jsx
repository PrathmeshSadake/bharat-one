import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AddUserPage from "./pages/add-user";
import HomePage from "./pages/home-page";

export default function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add-user' element={<AddUserPage />} />
      </Routes>
    </div>
  );
}
