import React from "react";
import { useDispatch } from "react-redux";
import { deleteAuth } from "../context/slices/authSlice";

export default function Navbar() {
    const dispatch = useDispatch();
    function handleLogout() {
        dispatch(deleteAuth());
    }
    return (
        <div>
            Navbar
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
