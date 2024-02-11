import React from "react";
import navacharLogo from "../assets/navacharLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="p-8 flex items-baseline justify-between bg-b_green">
                <div className="w-[150px]">
                    <img src={navacharLogo} alt="" />
                </div>
                <div className=" font-sans text-md text-t_gray flex gap-12">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact US</Link>
                    <Link to="/privacy">Privacy</Link>
                </div>
                <div>
                    <button className="bg-m_green px-12 py-2 text-t_white rounded text-md">
                        Explore
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
