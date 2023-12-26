import React from "react";
import { useDispatch } from "react-redux";
import { deleteToken } from "../context/slices/authSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    function handleLogout() {
        dispatch(deleteToken());
    }
    return (
        <div>
            Navbar
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
