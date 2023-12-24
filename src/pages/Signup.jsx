import React from "react";

export default function Signup() {
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidde">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-blue-700">
                    Quote Genie
                </h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full input input-bordered input-primary bg-white"
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
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-gray-600 hover:underline hover:text-blue-600"
                    >
                        Forget Password?
                    </a>
                    <div>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
