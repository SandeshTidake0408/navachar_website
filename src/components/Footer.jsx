import React from "react";
import navacharLogo from "../assets/navacharLogo.svg";
function Footer() {
    return (
        <div className="py-6 bg-t_gray px-80 flex flex-col gap-5">
            <div className="w-36">
                <img src={navacharLogo} alt="" />
            </div>
            <div className="flex justify-between text-white text-sm">
                <p> Copyright ©️ 2024 Navachar. All rights are reserved.</p>
                <p> Privacy Policy | Terms & Conditions</p>
            </div>
        </div>
    );
}

export default Footer;
