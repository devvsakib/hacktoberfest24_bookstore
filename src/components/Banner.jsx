import React from "react";
import { images } from "/src/config/images.js"
import { FaQuoteLeft, FaQuoteRight, FaQuran } from "react-icons/fa";

const Banner = () => {
    return <section
        style={{
            background: `linear-gradient(60deg, #000, #000, #00000030), url(${images.banner})`,
            backgroundSize: 'cover',
            minHeight: '100vh'
        }}
        className="!min-h-screen w-full grid place-content-center relative px-5 md:px-0"
    >
        {/* <div
            className="bottom-0 rounded-lg z-0 mx-auto"
            style={{
                background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/arbi.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "80%",
                height: "300px",
            }}
        >
        </div> */}

        <div className="w-full mx-auto z-10">
            <h3 className="text-5xl md:!text-[5rem] font-semibold font-white font-[nakkhatraFont] md:leading-[5rem] bg-gradient-to-bl from-blue-400 to-white text-transparent bg-clip-text pt-5 pl-2 md:pl-0 relative">ইলম পিপাসুদের পাথেয়। <br />
            সুন্নাহর সাথে,  সালাফদের পথে।</h3>
            <div className="relative mb-5">
                <span className="gradientBorderBox block h-1"></span>
            </div>
            <div className="tooltip tooltip-bottom tooltip-open" data-tip="প্রত্যেক মুসলিমের উপর ইলম অর্জন করা ফরয">
                <p className="text-4xl font-semibold font-[uthmani] flex gap-2"
                >
                    <FaQuoteLeft className="opacity opacity-30" />
                    طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
                    <FaQuoteRight className="opacity-30" />
                </p>
            </div>
        </div>
    </section>;
};


export default Banner;
