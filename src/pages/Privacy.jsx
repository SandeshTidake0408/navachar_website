import React, { useState } from "react";
import leaf from "../assets/leaf.svg";
import leaf2 from "../assets/leaf2.svg";

function Privacy() {
    const [cardState1, setCardState1] = useState(false);
    const [cardState2, setCardState2] = useState(false);

    const handleCard1Click = () => {
        setCardState1((prevState) => !prevState);
        // setCardState2(false); // Close the other card
    };

    const handleCard2Click = () => {
        setCardState2((prevState) => !prevState);
        // setCardState1(false); // Close the other card
    };

    return (
        <div className="bg-b_green w-full py-12 flex flex-col justify-center items-center gap-8">
            <div className="relative inline-block">
                <h1 className="text-center font-wendy text-5xl text-t_gray mr-12 mb-4">
                    Privacy Policy
                </h1>
                <div className="w-11 absolute bottom-0 right-1 ">
                    <img src={leaf} alt="" />
                </div>
            </div>
            <div>
                <p
                    className="italic font-thin
                 font-sans tracking-wider text-lg leading-1 text-t_gray text-center"
                >
                    "Seeds of Trust, Fields of Privacy: Your Data, Our Pledge to{" "}
                    <br />
                    Safeguard Your Organic Farming Journey."
                </p>
            </div>
            <div>
                <p className="text-t_gray text-center w-[55vw] tracking-wide">
                    Navachar recognizes the importance of maintaining your
                    privacy. We value yourprivacy and appreciate your trust in
                    us. This Policy describes how we treatuser information that
                    we collect on Navachar and other offline sources.
                    ThisPrivacy Policy applies to current and former visitors
                    (“users” to our app andto our online customers). By visiting
                    and/or using our website and app, you agree to this Privacy
                    Policy.
                </p>
            </div>

            <div className="flex gap-12">
                <div
                    className={`text-t_gray py-5 px-8 bg-green-100 sm:w-[30vw] md:w-[40vw] lg:w-[30vw]  flex flex-col items-center justify-center relative rounded-md hover:shadow-lg ${
                        cardState1 ? "h-fit" : "h-[300px]"
                    }`}
                >
                    <p className="text-t_gray font-wendy text-xl my-10">
                        What data do we keep and <br /> why it is Necessary ?
                    </p>
                    {cardState1 && (
                        <ul
                            style={{ listStyleType: "disc" }}
                            className=" pl-8 flex flex-col gap-5 text-t_gray mb-12  "
                        >
                            <li className="">
                                We may collect your name, email, phone number,
                                street, city, district, state, pin code,
                                country. This information is used to create your
                                profile on the app.
                            </li>
                            <li className="">
                                We may ask you for your permission to upload
                                photos, videos, and other file formats on the
                                app. This is to enable you to set up your
                                profile picture and upload posts, send messages
                                on the app.
                            </li>
                            <li className="">
                                We use tracking tools like Google Analytics,
                                Amplitude for collecting information about your
                                usage of app and website.
                            </li>
                            <li className="">
                                We might send you information about special
                                promotions. We might also tell you about new
                                features or products.
                            </li>
                            <li className="">
                                We might send you SMS or emails about your
                                account to keep you informed and updated.
                            </li>
                            <li className="">
                                We may ask you for your permission to enable
                                access to the microphone of your phone. This is
                                only asked when you want to attend a live
                                meeting inside the app.
                            </li>
                        </ul>
                    )}

                    <div
                        className=" absolute right-6 bottom-2 flex gap-2 cursor-pointer"
                        onClick={handleCard1Click}
                    >
                        <p className="text-t_gray">
                            {cardState1 ? "Show less" : "Read More"}
                        </p>{" "}
                        <img
                            className={`w-8 ${cardState1 ? "rotate-90" : ""}`}
                            src={leaf2}
                            alt=""
                        />
                    </div>
                </div>
                <div
                    className={`text-t_gray py-5 px-8 bg-green-100 sm:w-[30vw] md:w-[40vw] lg:w-[30vw]  flex flex-col items-center justify-center relative rounded-md hover:shadow-lg ${
                        cardState2 ? "h-fit" : "h-[300px]"
                    } `}
                >
                    <p className="text-t_gray font-wendy text-xl my-10">
                        What is Done with Data ??
                    </p>
                    {cardState2 && (
                        <ul
                            style={{ listStyleType: "disc" }}
                            className=" pl-8 flex flex-col gap-5 text-t_gray mb-12  "
                        >
                            <li className="">
                                We don’t share any of your personal information
                                with any third party or any individual. All the
                                data is strictly protected under the judicial
                                laws of data protection.
                            </li>
                            <li className="">
                                Only in very extreme cases, we may only share
                                information to respond to a court order or court
                                subpoena. Before sharing any information, we
                                will take your consent, before we go ahead with
                                it.
                            </li>
                        </ul>
                    )}

                    <div
                        className=" absolute right-6 bottom-2 flex gap-2 cursor-pointer"
                        onClick={handleCard2Click}
                    >
                        <p className="text-t_gray">
                            {cardState2 ? "Show less" : "Read More"}
                        </p>{" "}
                        <img
                            className={`w-8 ${cardState2 ? "rotate-90" : ""}`}
                            src={leaf2}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className=" w-[58vw] flex flex-col gap-3">
                <p className="text-t_gray font-wendy text-lg tracking-wide">
                    Account and Personal Data Deletion :
                </p>
                <p className="tracking-wide">
                    If you want to delete your personal data you can do so by
                    deleting your user account at any point in time by following
                    steps -If you are a part of single community:
                </p>
                <ol type="1">
                    <li>1. Log-in into your account</li>
                    <li>2. Go to profile section</li>
                    <li>3. Go to settings</li>
                    <li>4. Click 'Delete Account'</li>
                </ol>
            </div>
            <div className=" w-[58vw] flex flex-col gap-3">
                <p className="text-t_gray font-wendy text-lg tracking-wide">
                    Jurisdiction :
                </p>
                <p className="tracking-wide">
                    If you choose to visit the website, your visit and any
                    dispute over privacy are subject to this Policy and the
                    website's terms of use. In addition to the foregoing, any
                    disputes arising under this Policy shall be governed by the
                    laws of India.
                </p>
            </div>
            <div className=" w-[58vw] flex flex-col gap-3">
                <p className="text-t_gray font-wendy text-lg tracking-wide">
                    Lets have a Conversation :
                </p>
                <p className="tracking-wide">
                    If you have any questions about this Policy or other privacy
                    concerns, you can write us to contact @navachar.co
                </p>
            </div>
            <div className=" w-[58vw] flex flex-col gap-3">
                <p className="text-t_gray font-wendy text-lg tracking-wide">
                    Privacy Policy Evolution :
                </p>
                <p className="tracking-wide">
                    From time to time we may change our privacy practices. We
                    will notify you ofany material changes to this policy as
                    required by law. We will also post anupdated copy on our
                    website. Please check our site periodically for updates.
                </p>
            </div>
        </div>
    );
}

export default Privacy;
