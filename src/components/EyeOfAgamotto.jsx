import React from 'react';
import './EyeOfAgamotto.css';

const EyeOfAgamotto = () => {
  return (
    <div>
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
    </div>
  );
};

export default EyeOfAgamotto;