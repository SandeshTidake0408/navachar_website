import React from "react";
import navacharLogo from "../assets/navacharLogo.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="px-8 py-4 flex items-baseline justify-between bg-b_green">
                <div className="w-[150px] cursor-pointer">
                    <img
                        src={navacharLogo}
                        onClick={() => {
                            navigate("/");
                        }}
                        alt=""
                    />
                </div>
                <div className=" font-sans text-md text-t_gray flex gap-12">
                    <NavLink exact to="/" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About Us
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active">
                        Contact US
                    </NavLink>
                    <NavLink to="/privacy" activeClassName="active">
                        Privacy
                    </NavLink>
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
