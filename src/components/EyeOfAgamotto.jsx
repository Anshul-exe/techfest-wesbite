import React, { useEffect, useRef, useState } from "react";

const EyeOfAgamotto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={componentRef} className="relative w-full min-h-screen">
      {isVisible && (
        <>
          <style>
            {`
          body {
            overflow: hidden;
          }
          
          #eye {
            width: 60%;
            height: 300px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
          #eye .background {
            width: 400px;
            height: 450px;
            background-color: transparent;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
          #eye .background .filler {
            width: 400px;
            height: 135px;
            position: absolute;
            background-color: #FACC36;
          }
          #eye .background .filler.top {
            top: 0;
          }
          #eye .background .filler.bottom {
            bottom: 0;
          }
          #eye .background.top {
            top: 180px;
          }
          #eye .background.bottom {
            bottom: 180px;
          }
          #eye .line {
            background-color: #2E2610;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
          #eye .line.middle {
            height: 3px;
            width: 368px;
          }
          #eye .line.diag25, #eye .line.diag155 {
            height: 3px;
            width: 318px;
          }
          #eye .line.diag50, #eye .line.diag130 {
            height: 3px;
            width: 288px;
          }
          #eye .line.diag25 {
            transform: rotate(25deg);
          }
          #eye .line.diag155 {
            transform: rotate(155deg);
          }
          #eye .line.diag50 {
            transform: rotate(50deg);
          }
          #eye .line.diag90 {
            height: 3px;
            width: 272px;
            transform: rotate(90deg);
          }
          #eye .line.diag130 {
            transform: rotate(130deg);
          }
          #eye .circle {
            width: 100px;
            height: 120px;
            border: 3px solid #2E2610;
            border-radius: 50%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
          #eye .circle.left {
            right: 180px;
          }
          #eye .circle.right {
            left: 180px;
          }
          #eye .center-back.dark {
            width: 260px;
            height: 260px;
            border-radius: 50%;
            background-color: black;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-90deg);
            }
          }
          @keyframes inverse-rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(90deg);
            }
          }
          #eye .center-back.light {
            opacity: 1;
            width: 235px;
            height: 235px;
            border-radius: 50%;
            background-color: #2E2610;
            border: 8px solid #FACC36;
            background-size: 15px 18px;
            background-image: linear-gradient(to right, #54451b 2px, transparent 1px), linear-gradient(to bottom, #54451b 2px, transparent 1px);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            overflow: hidden;
            animation: rotate 3s ease-in-out forwards;
          }
          #eye .center-back.light .center {
            border-radius: 50%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          }
          @keyframes inverse-rotate-center-lev2 {
            from {
              transform: rotate(45deg);
            }
            to {
              transform: rotate(135deg);
            }
          }
          #eye .center-back.light .center.lev2 {
            width: 180px;
            height: 180px;
            background-color: #2E2610;
            border: 3px solid #FACC36;
            background-size: 12px 15px;
            background-image: linear-gradient(to right, #54451b 2px, transparent 1px), linear-gradient(to bottom, #54451b 2px, transparent 1px);
            transform: rotate(45deg);
            animation: inverse-rotate-center-lev2 3s ease-in-out forwards;
          }
          #eye .center-back.light .center.lev3 {
            width: 130px;
            height: 130px;
            background-color: #2E2610;
            border: 8px solid #ffe599;
            background-size: 8px 12px;
            background-image: linear-gradient(to right, #54451b 2px, transparent 1px), linear-gradient(to bottom, #54451b 2px, transparent 1px);
          }
          @keyframes inverse-rotate-inner-eye {
            from {
              transform: rotate(45deg);
            }
            to {
              transform: rotate(135deg);
            }
          }
          #eye .center-back.light .inner-eye {
            background-color: #FACC36;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            transform: rotate(45deg);
            animation: inverse-rotate-inner-eye 3s ease-in-out forwards;
          }
          #eye .center-back.light .inner-eye.lev1 {
            width: 130px;
            height: 130px;
            border: 3px solid #2E2610;
            border-radius: 65% 10%;
          }
          #eye .center-back.light .inner-eye.lev2 {
            width: 120px;
            height: 120px;
            border: 1px solid #2E2610;
            border-radius: 65% 10%;
          }
          #eye .center-back.light .inner-eye.lev3 {
            width: 110px;
            height: 110px;
            border: 1px solid #2E2610;
            border-radius: 65% 10%;
          }
          #eye .center-back.light .globe-extern {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            opacity: 0.3;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            background-color: #FACC36;
            border: 10px solid #2E2610;
          }
          #eye .center-back.light .globe-intern {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            background-color: black;
            border: 2px solid #2E2610;
            overflow: hidden;
            animation: inverse-rotate 3s ease-in-out forwards;
          }
          @keyframes open {
            from {
              height: 36.5px;
            }
            to {
              height: 0px;
              border: none;
            }
          }
          #eye .center-back.light .globe-intern .eyelid {
            width: 75px;
            height: 36.5px;
            background-color: #FACC36;
            position: absolute;
            animation: open 1s ease-in-out forwards;
          }
          #eye .center-back.light .globe-intern .eyelid.top {
            top: 0;
            border-bottom: 1px solid #2E2610;
          }
          #eye .center-back.light .globe-intern .eyelid.bottom {
            bottom: 0;
            border-top: 1px solid #2E2610;
          }
          @keyframes glowing {
            from {
              box-shadow: 0 0 20px 10px #3fff59;
            }
            to {
              box-shadow: 0 0 20px 10px #20bf35;
            }
          }
          #eye .center-back.light .globe-intern #stone {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: white;
            box-shadow: 0 0 20px 10px #F8861E;
            animation: glowing 1s ease-in-out alternate infinite;
          }
          #eye .center-back.light .mechanic {
            border: 12px solid white;
            border-radius: 50%;
            position: absolute;
          }
          #eye .center-back.light .mechanic.m1 {
            width: 200px;
            height: 400px;
            left: -120px;
            top: -170px;
            transform: rotate(40deg);
          }
          #eye .center-back.light .mechanic.m2 {
            width: 400px;
            height: 200px;
            right: -80px;
            bottom: -150px;
            transform: rotate(-20deg);
          }
          #eye .center-back.light .mechanic.m3 {
            width: 300px;
            height: 300px;
            left: -220px;
            bottom: -170px;
            transform: rotate(-20deg);
          }
          #eye .center-back.light .mechanic.m4 {
            width: 300px;
            height: 400px;
            right: -160px;
            top: -130px;
            transform: rotate(-60deg);
          }
          
          @keyframes appear {
            from {
              opacity: 0;
            }
            to {
              opacity: 0.8;
            }
          }
          #spell {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 800px;
            height: 800px;
            border-radius: 50%;
            opacity: 0;
            border: 3px solid white;
            box-shadow: 0 0 10px 5px #F8861E, 0 0 10px 5px #F8861E inset;
            animation: appear 3s linear forwards;
          }
          @keyframes rotating {
            from {
              transform: rotate(-360deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          #spell .center {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 400px;
            height: 400px;
            border: 3px solid white;
            box-shadow: 0 0 10px 5px #F8861E, 0 0 10px 5px #F8861E inset;
            animation: rotating 12s linear infinite;
          }
          #spell .center.circle {
            border-radius: 50%;
          }
          #spell .center.square1 {
            animation-delay: 1.4s;
          }
          #spell .center.square3 {
            animation-delay: 2.2s;
          }
          #spell .center.square4 {
            animation-delay: 2.6s;
            animation-duration: 10s;
            animation-direction: reverse;
            width: 392px;
            height: 392px;
          }
          #spell .center2.circle {
            border-radius: 50%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 568px;
            height: 576px;
            border: 3px solid white;
            box-shadow: 0 0 10px 5px #F8861E, 0 0 10px 5px #F8861E inset;
            animation: rotating 8s linear infinite;
          }
          #spell .center3.circle {
            border-radius: 50%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 600px;
            height: 608px;
            border: 3px solid white;
            box-shadow: 0 0 10px 5px #F8861E, 0 0 10px 5px #F8861E inset;
            animation: rotating 8s linear infinite;
          }
          #spell .center4.circle {
            border-radius: 50%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 760px;
            height: 768px;
            border: 3px solid white;
            box-shadow: 0 0 10px 5px #F8861E, 0 0 10px 5px #F8861E inset;
            animation: rotating 8s linear reverse infinite;
          }
        `}
          </style>
          <div id="spell">
            <div className="center circle"></div>
            <div className="center square1"></div>
            <div className="center square3"></div>
            <div className="center square4"></div>
            <div className="center2 circle"></div>
            <div className="center3 circle"></div>
            <div className="center4 circle"></div>
          </div>
          <div id="eye">
            <div className="background top">
              <div className="filler top"></div>
            </div>
            <div className="background bottom">
              <div className="filler bottom"></div>
            </div>
            <div className="line middle"></div>
            <div className="line diag25"></div>
            <div className="line diag50"></div>
            <div className="line diag90"></div>
            <div className="line diag130"></div>
            <div className="line diag155"></div>
            <div className="circle left"></div>
            <div className="circle right"></div>
            <div className="center-back dark"></div>
            <div className="center-back light">
              <div className="center lev2"></div>
              <div className="center lev3"></div>
              <div className="inner-eye lev1"></div>
              <div className="inner-eye lev2"></div>
              <div className="inner-eye lev3"></div>
              <div className="globe-extern"></div>
              <div className="globe-intern">
                <div id="stone"></div>
                <div className="eyelid top"></div>
                <div className="eyelid bottom"></div>
              </div>
              <div className="mechanic m1"></div>
              <div className="mechanic m2"></div>
              <div className="mechanic m3"></div>
              <div className="mechanic m4"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EyeOfAgamotto;

