import React, { useEffect } from "react";
import EyeOfAgamotto from "./EyeOfAgamotto";

const AboutSection = () => {
  useEffect(() => {
    document.body.style.scrollSnapType = "y mandatory";
    return () => {
      document.body.style.scrollSnapType = "";
    };
  }, []);

  return (
    <section
      className="bg-[#160C0C] dark:bg-[#160C0C] h-screen snap-start"
      style={{ scrollSnapAlign: "start", fontFamily: "Doto, sans-serif" }}
    >
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 h-full flex flex-col justify-center">
        <div className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          {" "}
          {/* Increased font size */}
          <h1 className="mb-6 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {" "}
            {/* Increased heading size */}
            About us
          </h1>
          <p className="mb-6 text-lg font-semibold">
            {" "}
            {/* Increased font size */}
            Glitch Tech Fest 2024 stands as an unparalleled opportunity for
            students to flaunt their technical acumen amid a dynamic milieu of
            peers and industry luminaries. With a rich tapestry of events
            spanning diverse technological domains, participants engage in live
            interactions and networking, cultivating invaluable connections
            essential for future career trajectories. This convergence of talent
            not only fosters personal growth but also offers a fertile ground
            for forging lasting professional relationships, ensuring a
            transformative experience for all involved.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8">
          {/* <EyeOfAgamotto/> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
