import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
    const user = useSelector((state) => state.root.auth.email);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={user ? <Home /> : <Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
