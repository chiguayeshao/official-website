import React from "react";
import logo from "./assets/Logo.jpg";

const Navbar = () => {
    return (
        <div className="flex bg-[#000000] justify-center">
            <div className="container">
                <div className="flex justify-between">
                    <div className="px-4 py-4 w-40">
                        <a href="/" >
                            <img src={logo} alt="GasLockR" />
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <a
                                href="/connect"
                                className="border border-white text-white py-2 px-4 rounded transition-colors duration-200 hover:bg-indigo-600"
                            >
                                Wallet Connect
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
