import React from "react";
import Navbar from "../components/Navbar";
import leaf from "../assets/leaf.svg";
import mainScreenAnimation from "../assets/mainScreenAnimation.svg";
function Home() {
    return (
        <div className="bg-b_green w-full pt-9 px-8 flex flex-col items-center justify-between gap-8 ">
            <div>
                <p className=" text-center font-wendy text-t_gray text-5xl">
                    "From Soil to Soul: Cultivating <br />
                    Tomorrow, Naturally."
                </p>
            </div>
            <div className="flex relative ">
                <button className="bg-m_green px-10 py-[6px] text-t_white rounded text-md mb-3 mr-10">
                    Explore
                </button>
                <div className="w-9 absolute bottom-0 right-1 ">
                    <img src={leaf} alt="" />
                </div>
            </div>
            <div className="w-[35vw]">
                <img src={mainScreenAnimation} alt="" />
            </div>
        </div>
    );
}

export default Home;
