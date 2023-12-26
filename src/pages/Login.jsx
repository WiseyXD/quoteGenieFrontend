import React, { useState } from "react";
import { useLoginMutation } from "../services/authApi";
import { useDispatch } from "react-redux";
import { setToken } from "../context/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginMutation] = useLoginMutation();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const { data } = await loginMutation({ email, password });
            console.log(data);
            dispatch(setToken(data?.token));
            if (data.token) {
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidde">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-blue-700">
                    Quote Genie
                </h1>
                <form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="w-full input input-bordered input-primary bg-white"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered input-primary bg-white"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-gray-600 hover:underline hover:text-blue-600"
                    >
                        Forget Password?
                    </a>
                    <div>
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
