import React, { useState } from "react";
import { useSignupMutation } from "../services/authApi";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [signupMutation] = useSignupMutation();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await signupMutation({ name, email, password });
            console.log(data);
            setName("");
            setEmail("");
            setPassword("");
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidde">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-blue-700">
                    Quote Genie
                </h1>
                <form className="space-y-4" onSubmit={(e) => handleLogin(e)}>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full input input-bordered input-primary bg-white"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input
                            type="email"
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
                    <div>
                        <button className="btn btn-primary" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
