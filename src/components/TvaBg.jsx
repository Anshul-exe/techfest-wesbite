// TVABackground.js
import React from "react";

// Import your icons here
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3_.png";
import Icon4 from "../assets/icon4.png";
import BranchingTimeline from "./Timeline";
const TVABackground = ({ children }) => {
  return (
    <div
      className="relative w-full h-full p-4"
      style={{
        backgroundColor: "#160C0C",
        border: "2px solid #f8861e",
        boxShadow: "0 0 15px #f8861e, 0 0 30px #f8861e",
      }}
    >
      {/* Outer Border */}
      <div
        className="absolute inset-0 border border-[#f8861e]"
        style={{ boxShadow: "0 0 5px #f8861e" }}
      ></div>

      {/* Grid background */}
      <div
        className="absolute inset-0 grid"
        style={{
          backgroundImage:
            "linear-gradient(#1d1d1d 1px, transparent 1px), linear-gradient(90deg, #1d1d1d 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Left Icon Column with PNG Icons and Increased Spacing */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#f8861e]">
        <div className="my-8">
          <img src={Icon1} alt="Icon 1" className="w-10 h-10" />{" "}
          {/* Adjust width and height as needed */}
        </div>
        <div className="my-8">
          <img src={Icon2} alt="Icon 2" className="w-10 h-10" />
        </div>
        <div className="my-8">
          <img src={Icon3} alt="Icon 3" className="w-10 h-10" />
        </div>
        <div className="my-8">
          <img src={Icon4} alt="Icon 4" className="w-10 h-10" />
        </div>
      </div>

      {/* TVA Logo in Bottom Right with Larger Font */}
      <div className="absolute bottom-4 right-4 text-[#f8861e] font-bold text-5xl">
        TVA
      </div>

      {/* Content Area */}
      <div className="relative w-full h-full p-8">
        <BranchingTimeline />
      </div>
    </div>
  );
};

export default TVABackground;
