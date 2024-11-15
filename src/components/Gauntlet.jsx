import React from "react";
import styled from "styled-components";

const GauntletContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  transform: scale(0.5);
`;

const InfinityGauntlet = styled.div`
  width: 20em;
  height: 25em;
  position: relative;
  cursor: pointer;
  background-color: #ababdd;

  --orange: rgb(252, 174, 80);
  --orangeT: rgba(252, 174, 80, 0);
  --red: rgb(244, 56, 55);
  --redT: rgba(244, 56, 55, 0);
  --blue: rgb(61, 138, 249);
  --blueT: rgba(61, 138, 249, 0);
  --purple: rgb(196, 53, 159);
  --purpleT: rgba(196, 53, 159, 0);
  --viagra: rgb(94, 170, 63);
  --viagraT: rgba(94, 170, 63, 0);
  --gold: rgb(251, 152, 51);
  --goldT: rgba(251, 152, 51, 0);
  --mgold: rgb(237, 132, 46);
  --mgoldT: rgba(237, 132, 6, 0);
  --dgold: rgb(208, 119, 36);
  --dgoldT: rgba(208, 119, 36, 0);
  --black: rgb(68, 68, 68);
  --blackT: rgba(68, 68, 68, 0);
  --white: rgba(255, 255, 255, 0.5);
  --whiteO: rgb(255, 255, 255);
  --whiteT: rgba(255, 255, 255, 0);

  // Add necessary background gradients here
  background:
  // * hand *
   // stones
    radial-gradient(
      0.4em 0.4em at 6em 9em,
      var(--white) 49%,
      var(--whiteT) 50%
    ),
    radial-gradient(
      2.2em 3em at 6em 9.4em,
      var(--orange) 0.55em,
      var(--black) 0.6em,
      var(--black) 0.75em,
      var(--mgold) 0.8em,
      var(--mgold) 1.05em,
      var(--mgoldT) 1.1em
    ),
    // doneeeeee 56 line
    radial-gradient(
        0.4em 0.4em at 8.6em 9em,
        var(--white) 49%,
        var(--whiteT) 50%
      ),
    radial-gradient(
      2.2em 3em at 8.6em 9.4em,
      var(--red) 0.55em,
      var(--black) 0.6em,
      var(--black) 0.75em,
      var(--mgold) 0.8em,
      var(--mgold) 1.05em,
      var(--mgoldT) 1.1em
    ),
    // doneeeeee 70 line
    radial-gradient(
        0.4em 0.4em at 11.3em 9em,
        var(--white) 49%,
        var(--whiteT) 50%
      ),
    radial-gradient(
      2.2em 3em at 11.3em 9.4em,
      var(--blue) 0.55em,
      var(--black) 0.6em,
      var(--black) 0.75em,
      var(--mgold) 0.8em,
      var(--mgold) 1.05em,
      var(--mgoldT) 1.1em
    ),
    radial-gradient(
      0.4em 0.4em at 13.9em 9em,
      var(--white) 49%,
      var(--whiteT) 50%
    ),
    radial-gradient(
      2.2em 3em at 13.9em 9.4em,
      var(--purple) 0.55em,
      var(--black) 0.6em,
      var(--black) 0.75em,
      var(--mgold) 0.8em,
      var(--mgold) 1.05em,
      var(--mgoldT) 1.1em
    ),
    radial-gradient(
      0.6em 0.6em at 10em 13.7em,
      var(--white) 49%,
      var(--whiteT) 50%
    ),
    radial-gradient(
      3.7em 5.3em at 10em 14.6em,
      var(--gold) 1.1em,
      var(--black) 1.15em,
      var(--black) 1.4em,
      var(--gold) 1.45em,
      var(--gold) 49.5%,
      var(--goldT) 50%
    ),
    linear-gradient(45deg, var(--dgoldT) 50%, var(--dgold) 50%) 8em 17em / 0.6em
      0.6em,
    linear-gradient(var(--black), var(--black)) 6em 14.3em / 1.4em 0.4em,
    linear-gradient(var(--black), var(--black)) 6.3em 15em / 0.9em 0.2em,
    linear-gradient(var(--black), var(--black)) 6.7em 15.7em / 0.9em 0.2em,
    linear-gradient(var(--black), var(--black)) 7em 16.4em / 0.9em 0.2em,
    linear-gradient(
        60deg,
        var(--blackT) 1.55em,
        var(--black) 1.6em,
        var(--black) 1.95em,
        var(--blackT) 2em
      )
      5.8em 14.3em / 2em 3.5em,
    linear-gradient(
        -45deg,
        var(--blackT) 0.45em,
        var(--black) 0.5em,
        var(--black) 0.85em,
        var(--blackT) 0.9em
      )
      7.7em 17em / 0.8em 0.8em,
    // upper-left wing outside yellow stone base
    linear-gradient(-45deg, var(--dgold) 50%, var(--dgoldT) 50%) 6.6em 13.4em /
      1em 1em,
    radial-gradient(125% 200% at 100% 0%, var(--dgold) 49%, var(--dgoldT) 50%)
      6.65em 12.3em / 1.5em 0.1em,
    radial-gradient(125% 200% at 100% 0%, var(--black) 49%, var(--blackT) 50%)
      6.4em 12.3em / 1.5em 0.3em,
    radial-gradient(200% 130% at 100% 30%, var(--dgold) 49%, var(--dgoldT) 50%)
      7em 12.3em / 0.6em 1.5em,
    radial-gradient(200% 130% at 100% 30%, var(--black) 49%, var(--blackT) 50%)
      6.8em 12.3em / 0.6em 1.5em,
    radial-gradient(200% 200% at 100% 0%, var(--dgold) 49%, var(--dgoldT) 50%)
      6.7em 11.2em / 1.5em 0.7em,
    radial-gradient(200% 200% at 100% 0%, var(--black) 49%, var(--blackT) 50%)
      6.6em 11.5em / 1.5em 0.7em,
    radial-gradient(200% 130% at 100% 40%, var(--dgold) 49%, var(--dgoldT) 50%)
      6.5em 11.5em / 1.1em 2.6em,
    radial-gradient(200% 130% at 100% 40%, var(--black) 49%, var(--blackT) 50%)
      6.2em 11.5em / 1.1em 2.6em,
    // lower-right wing of yellow stone base
    linear-gradient(-45deg, var(--dgoldT) 50%, var(--dgold) 50%) 11.3em 17em /
      0.6em 0.6em,
    linear-gradient(var(--black), var(--black)) 12.5em 14.3em / 1.4em 0.4em,
    linear-gradient(var(--black), var(--black)) 12.7em 15em / 0.9em 0.2em,
    linear-gradient(var(--black), var(--black)) 12.4em 15.7em / 0.9em 0.2em,
    linear-gradient(var(--black), var(--black)) 12.1em 16.4em / 0.9em 0.2em,
    linear-gradient(
        -60deg,
        var(--blackT) 1.55em,
        var(--black) 1.6em,
        var(--black) 1.95em,
        var(--blackT) 2em
      )
      12.2em 14.3em / 2em 3.5em,
    linear-gradient(
        45deg,
        var(--blackT) 0.45em,
        var(--black) 0.5em,
        var(--black) 0.85em,
        var(--blackT) 0.9em
      )
      11.5em 17em / 0.8em 0.8em,
    // upper-right wing outside yellow stone base
    linear-gradient(45deg, var(--dgold) 50%, var(--dgoldT) 50%) 12.35em 13.4em /
      1em 1em,
    radial-gradient(125% 200% at 0% 0%, var(--dgold) 49%, var(--dgoldT) 50%)
      11.8em 12.3em / 1.5em 0.1em,
    radial-gradient(125% 200% at 0% 0%, var(--black) 49%, var(--blackT) 50%)
      12.05em 12.3em / 1.5em 0.3em,
    radial-gradient(200% 130% at 0% 30%, var(--dgold) 49%, var(--dgoldT) 50%)
      12.3em 12.3em / 0.6em 1.5em,
    radial-gradient(200% 130% at 0% 30%, var(--black) 49%, var(--blackT) 50%)
      12.5em 12.3em / 0.6em 1.5em,
    radial-gradient(200% 200% at 0% 0%, var(--dgold) 49%, var(--dgoldT) 50%)
      11.8em 11.2em / 1.5em 0.7em,
    radial-gradient(200% 200% at 0% 0%, var(--black) 49%, var(--blackT) 50%)
      11.9em 11.5em / 1.5em 0.7em,
    radial-gradient(200% 130% at 0% 40%, var(--dgold) 49%, var(--dgoldT) 50%)
      12.3em 11.5em / 1.1em 2.6em,
    radial-gradient(200% 130% at 0% 40%, var(--black) 49%, var(--blackT) 50%)
      12.6em 11.5em / 1.1em 2.6em,
    // yellow stone base
    linear-gradient(
        5deg,
        var(--dgoldT) 0.45em,
        var(--dgold) 0.5em,
        var(--dgold) 0.75em,
        var(--dgoldT) 0.8em
      )
      7.75em 11.5em / 2.25em 3em,
    linear-gradient(
        30deg,
        var(--dgoldT) 1.6em,
        var(--dgold) 1.65em,
        var(--dgold) 1.85em,
        var(--dgoldT) 1.9em
      )
      7.75em 11.5em / 4.5em 3em,
    linear-gradient(
        55deg,
        var(--dgoldT) 2.3em,
        var(--dgold) 2.35em,
        var(--dgold) 2.55em,
        var(--dgoldT) 2.6em
      )
      7.75em 11.5em / 4.5em 3em,
    linear-gradient(
        90deg,
        var(--dgoldT) 2.1em,
        var(--dgold) 2.15em,
        var(--dgold) 2.45em,
        var(--dgoldT) 2.4em
      )
      7.75em 11.5em / 4.5em 3em,
    linear-gradient(
        -55deg,
        var(--dgoldT) 2.3em,
        var(--dgold) 2.35em,
        var(--dgold) 2.55em,
        var(--dgoldT) 2.6em
      )
      7.75em 11.5em / 4.5em 3em,
    linear-gradient(
        -30deg,
        var(--dgoldT) 1.6em,
        var(--dgold) 1.65em,
        var(--dgold) 1.85em,
        var(--dgoldT) 1.9em
      )
      7.75em 11.5em / 4.5em 3em,
    linear-gradient(
        -5deg,
        var(--dgoldT) 0.5em,
        var(--dgold) 0.55em,
        var(--dgold) 0.75em,
        var(--dgoldT) 0.8em
      )
      10em 11.5em / 2.25em 3em,
    linear-gradient(
        70deg,
        var(--dgoldT) 2.7em,
        var(--dgold) 2.75em,
        var(--dgold) 2.95em,
        var(--dgoldT) 3em
      )
      7.75em 14.5em / 4.5em 3em,
    linear-gradient(
        40deg,
        var(--dgoldT) 3.2em,
        var(--dgold) 3.25em,
        var(--dgold) 3.45em,
        var(--dgoldT) 3.5em
      )
      7.75em 14.5em / 4.5em 3em,
    linear-gradient(
        15deg,
        var(--dgoldT) 2.6em,
        var(--dgold) 2.65em,
        var(--dgold) 2.85em,
        var(--dgoldT) 2.9em
      )
      10em 14.5em / 2.25em 3em,
    linear-gradient(
        -70deg,
        var(--dgoldT) 2.7em,
        var(--dgold) 2.75em,
        var(--dgold) 2.95em,
        var(--dgoldT) 3em
      )
      7.75em 14.5em / 4.5em 3em,
    linear-gradient(
        -40deg,
        var(--dgoldT) 3.2em,
        var(--dgold) 3.25em,
        var(--dgold) 3.45em,
        var(--dgoldT) 3.5em
      )
      7.75em 14.5em / 4.5em 3em,
    linear-gradient(
        -15deg,
        var(--dgoldT) 2.6em,
        var(--dgold) 2.65em,
        var(--dgold) 2.85em,
        var(--dgoldT) 2.9em
      )
      7.75em 14.5em / 2.25em 3em,
    radial-gradient(
      4.5em 6em at 10em 14.6em,
      var(--black) 49.5%,
      var(--blackT) 50%
    ),
    // holes
    radial-gradient(
        0.4em 0.4em at 7.4em 8.2em,
        var(--black) 49%,
        var(--blackT) 50%
      ),
    radial-gradient(
      0.4em 0.4em at 10em 8.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.4em 0.4em at 12.6em 8.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 4.6em 17.4em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 15.6em 17.4em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    // trapezoid with vents
    linear-gradient(var(--black), var(--black)) 9em 17.8em / 0.4em 0.7em,
    linear-gradient(var(--black), var(--black)) 10.5em 17.8em / 0.4em 0.7em,
    linear-gradient(var(--black), var(--black)) 8.5em 18.5em / 3em 0.6em,
    linear-gradient(var(--black), var(--black)) 9em 19.8em / 0.4em 1em,
    linear-gradient(var(--black), var(--black)) 9.75em 19.5em / 0.4em 1.6em,
    linear-gradient(var(--black), var(--black)) 10.5em 19.8em / 0.4em 1em,
    radial-gradient(
      3.7em 1em at 10em 20.75em,
      var(--dgold) 49%,
      var(--dgoldT) 50%
    ),
    linear-gradient(
        110deg,
        var(--blackT) 0.7em,
        var(--black) 0.7em,
        var(--black) 1.3em,
        var(--dgold) 1.2em
      )
      7.6em 18.5em / 2.5em 2.25em,
    linear-gradient(
        -110deg,
        var(--blackT) 0.7em,
        var(--black) 0.7em,
        var(--black) 1.3em,
        var(--dgold) 1.2em
      )
      9.9em 18.5em / 2.5em 2.25em,
    // palm
    radial-gradient(100% 200% at 50% 0%, var(--black) 49%, var(--blackT) 50%)
      9.5em 7.1em / 1em 0.5em,
    radial-gradient(100% 200% at 50% 0%, var(--black) 49%, var(--blackT) 50%)
      12.5em 7.1em / 1em 0.5em,
    linear-gradient(
        15deg,
        var(--blackT) 0.55em,
        var(--black) 0.6em,
        var(--black) 1.15em,
        var(--blackT) 1.2em
      )
      13em 6.6em / 2.7em 1.2em,
    linear-gradient(var(--black), var(--black)) 7.9em 6.6em / 5.25em 0.6em,
    linear-gradient(
        130deg,
        var(--blackT) 0.75em,
        var(--black) 0.8em,
        var(--black) 1.35em,
        var(--dgold) 1.4em
      )
      6.6em 6.6em / 6em 1.3em,
    linear-gradient(var(--black), var(--black)) 5em 7.3em / 2em 0.6em,
    radial-gradient(
        100% 200% at 50% 60%,
        var(--blackT) 6.35em,
        var(--black) 6.4em,
        var(--black) 49.5%,
        var(--blackT) 50%
      )
      3em 7.3em / 14.2em 12.6em,
    radial-gradient(100% 230% at 50% 70%, var(--dgold) 49%, var(--dgoldT) 50%)
      3.1em 7.3em / 14em 9.5em,
    radial-gradient(110% 100% at 50% 0, var(--dgold) 49%, var(--dgoldT) 50%)
      3.5em 16.8em / 13.1em 4.2em,
    radial-gradient(120% 100% at 50% 0, var(--black) 49%, var(--blackT) 50%)
      3.5em 17.4em / 13.1em 4.2em,
    // wowo
    radial-gradient(120% 100% at 50% 0, var(--mgold) 49%, var(--mgoldT) 50%)
      3.6em 17.8em / 12.9em 4.8em,
    radial-gradient(150% 100% at 50% 0, var(--black) 49%, var(--blackT) 50%) 4em
      17.5em / 12.1em 6.8em,
    // fingers / pinky
    radial-gradient(
        0.5em 0.5em at 5.6em 4em,
        var(--black) 49%,
        var(--blackT) 50%
      ),
    linear-gradient(var(--black), var(--black)) 5.35em 4em / 0.5em 1em,
    radial-gradient(
      0.5em 0.5em at 5.6em 6.25em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    linear-gradient(var(--black), var(--black)) 5.35em 6.25em / 0.5em 1.25em,
    linear-gradient(
        var(--black) 0.6em,
        var(--blackT) 0.6em,
        var(--blackT) 1.1em,
        var(--black) 1.1em,
        var(--black) 1.8em,
        var(--blackT) 1.8em,
        var(--blackT) 3.3em,
        var(--black) 3.3em,
        var(--black) 4em,
        var(--blackT) 4em
      )
      4.6em 1.5em / 2em 6.5em,
    linear-gradient(
        90deg,
        var(--black) 0.6em,
        var(--dgold) 0.6em,
        var(--dgold) 2.2em,
        var(--black) 2.2em
      )
      4.2em 1.5em / 2.8em 6.5em,
    // ring
    radial-gradient(
        0.5em 0.5em at 8.5em 2.6em,
        var(--black) 49%,
        var(--blackT) 50%
      ),
    linear-gradient(var(--black), var(--black)) 8.25em 2.6em / 0.5em 0.5em,
    radial-gradient(
      0.5em 0.5em at 8.5em 4.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    linear-gradient(var(--black), var(--black)) 8.25em 4.2em / 0.5em 0.8em,
    radial-gradient(
      0.5em 0.5em at 8.5em 5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
        200% 200% at 50% 0,
        var(--blackT) 0.65em,
        var(--black) 0.7em,
        var(--black) 49%,
        var(--blackT) 50%
      )
      7.1em 5.25em / 2.8em 0.8em,
    linear-gradient(
        var(--black) 0.6em,
        var(--blackT) 0.6em,
        var(--blackT) 1.1em,
        var(--black) 1.1em,
        var(--black) 1.8em,
        var(--blackT) 1.8em,
        var(--blackT) 2.5em,
        var(--black) 2.5em,
        var(--black) 3.2em,
        var(--blackT) 3.2em
      )
      7.3em 0.5em / 2em 6.5em,
    linear-gradient(
        90deg,
        var(--black) 0.6em,
        var(--dgold) 0.6em,
        var(--dgold) 2.2em,
        var(--black) 2.2em
      )
      7.1em 0.5em / 2.8em 7.5em,
    // middle
    radial-gradient(
        0.5em 0.5em at 11.4em 2.4em,
        var(--black) 49%,
        var(--blackT) 50%
      ),
    linear-gradient(var(--black), var(--black)) 11.15em 2.3em / 0.5em 0.5em,
    radial-gradient(
      0.5em 0.5em at 11.4em 4.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    linear-gradient(var(--black), var(--black)) 11.15em 4.2em / 0.5em 0.8em,
    radial-gradient(
      0.5em 0.5em at 11.4em 5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
        200% 200% at 50% 0,
        var(--blackT) 0.65em,
        var(--black) 0.7em,
        var(--black) 49%,
        var(--blackT) 50%
      )
      10em 5.25em / 2.8em 0.8em,
    // doneeeeee 303
    linear-gradient(
        var(--black) 0.6em,
        var(--blackT) 0.6em,
        var(--blackT) 1.3em,
        var(--black) 1.3em,
        var(--black) 2em,
        var(--blackT) 2em,
        var(--blackT) 2.7em,
        var(--black) 2.7em,
        var(--black) 3.4em,
        var(--blackT) 3.4em
      )
      10.5em 0 / 2em 6.5em,
    linear-gradient(
        90deg,
        var(--black) 0.6em,
        var(--gold) 0.6em,
        var(--gold) 2.2em,
        var(--black) 2.2em
      )
      10em 0 / 2.8em 8em,
    // index
    radial-gradient(
        0.5em 0.5em at 14.4em 3.5em,
        var(--black) 49%,
        var(--blackT) 50%
      ),
    linear-gradient(var(--black), var(--black)) 14.15em 3.6em / 0.5em 0.5em,
    radial-gradient(
      0.5em 0.5em at 14.4em 5.3em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    linear-gradient(var(--black), var(--black)) 14.15em 5.4em / 0.5em 2em,
    linear-gradient(
        var(--black) 0.6em,
        var(--blackT) 0.6em,
        var(--blackT) 0.9em,
        var(--black) 0.9em,
        var(--black) 1.6em,
        var(--blackT) 1.6em,
        var(--blackT) 2em,
        var(--black) 2em,
        var(--black) 2.7em,
        var(--blackT) 2.7em,
        var(--blackT) 3.3em,
        var(--black) 3.3em,
        var(--black) 3.9em,
        var(--blackT) 3.9em
      )
      13.3em 0.5em / 2em 6.5em,
    linear-gradient(
        90deg,
        var(--black) 0.6em,
        var(--gold) 0.6em,
        var(--gold) 2.2em,
        var(--black) 2.2em
      )
      13em 0.5em / 2.8em 7.5em,
    // doneeeeee 341 line
    radial-gradient(
        1.2em 0.6em at 20em 10.5em,
        var(--black) 49.75%,
        var(--blackT) 50%
      ),
    radial-gradient(
      1.2em 0.6em at 18.3em 13.7em,
      var(--black) 49.75%,
      var(--blackT) 50%
    ),
    linear-gradient(
        -30deg,
        var(--blackT) 0.4em,
        var(--black) 0.4em,
        var(--black) 0.9em,
        var(--blackT) 0.9em
      )
      17em 13.4em / 1em 1em,
    radial-gradient(100% 200% at 50% 100%, var(--gold) 49.75%, var(--goldT) 50%)
      18.1em 9.7em / 2.2em 1.7em,
    radial-gradient(
        100% 200% at 50% 100%,
        var(--black) 49.75%,
        var(--blackT) 50%
      )
      17.5em 9em / 3.5em 2.4em,
    linear-gradient(
        90deg,
        var(--black) 0.6em,
        var(--gold) 0.6em,
        var(--gold) 2.8em,
        var(--black) 2.8em
      )
      17.5em 11em / 3.5em 3em,
    radial-gradient(
        200% 200% at 0 0,
        var(--blackT) 4.45em,
        var(--black) 4.5em,
        var(--black) 49.75%,
        var(--blackT) 50%
      )
      15.8em 13.9em / 5.2em 6em,
    radial-gradient(
        200% 200% at 100% 100%,
        var(--blackT) 1.95em,
        var(--black) 2em,
        var(--black) 2.25em,
        var(--mgold) 2.3em,
        var(--mgold) 2.55em,
        var(--black) 2.6em,
        var(--black) 49.75%,
        var(--blackT) 50%
      )
      17.2em 14.9em / 3em 4em,
    radial-gradient(
      0.4em 0.4em at 19em 17.2em,
      var(--white) 49%,
      var(--whiteT) 50%
    ),
    radial-gradient(200% 200% at 0 0, var(--viagra) 49.75%, var(--viagraT) 50%)
      18.25em 16.25em / 1.6em 2em,
    radial-gradient(200% 200% at 0 0, var(--gold) 4.45em, var(--goldT) 4.5em)
      15.8em 13.9em / 5.2em 6em,
    // doneeeeee line 379
    linear-gradient(
        90deg,
        var(--black) 1.25em,
        var(--blackT) 1.25em,
        var(--blackT) 1.75em,
        var(--black) 1.75em
      )
      8.5em 23em / 3em 0.3em,
    linear-gradient(
        90deg,
        var(--black) 0.3em,
        var(--blackT) 0.3em,
        var(--blackT) 0.7em,
        var(--black) 0.7em
      )
      9.5em 23em / 1em 2em,
    linear-gradient(
        60deg,
        var(--blackT) 1em,
        var(--black) 1em,
        var(--black) 1.3em,
        var(--dgold) 1.3em
      )
      8.25em 23em / 1.5em 2em,
    linear-gradient(
        -60deg,
        var(--blackT) 1em,
        var(--black) 1em,
        var(--black) 1.3em,
        var(--dgold) 1.3em
      )
      10.25em 23em / 1.5em 2em,
    // doneeeeee line 398
    repeating-linear-gradient(
        -164deg,
        var(--blackT),
        var(--blackT) 0.28em,
        var(--black) 0.3em,
        var(--black) 0.86em
      )
      8.4em 25em / 1em 8.1em,
    radial-gradient(
      0.6em 0.6em at 8.5em 25.3em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 8.5em 26.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 8.5em 27.1em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 8.5em 28em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 8.5em 28.9em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 8.5em 29.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 8.5em 30.7em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 8.5em 31.6em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 8.5em 32.5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 9.5em 25.6em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 9.5em 26.5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 9.5em 27.4em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 9.5em 28.3em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 9.5em 29.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 9.5em 30.1em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 9.5em 31em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 9.5em 31.9em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 9.5em 32.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    // trying ke upar vala
    repeating-linear-gradient(
        164deg,
        var(--blackT),
        var(--blackT) 0.28em,
        var(--black) 0.3em,
        var(--black) 0.86em
      )
      10.6em 25em / 1em 8.1em,
    radial-gradient(
      0.6em 0.6em at 10.5em 25.6em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 10.5em 26.5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 10.5em 27.4em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 10.5em 28.3em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 10.5em 29.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 10.5em 30.1em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 10.5em 31em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 10.5em 31.9em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 10.5em 32.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 11.5em 25.3em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 11.5em 26.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 11.5em 27.1em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 11.5em 28em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 11.5em 28.9em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 11.5em 29.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 11.5em 30.7em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 11.5em 31.6em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 11.5em 32.5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    linear-gradient(
        90deg,
        var(--black) 0.6em,
        var(--blackT) 0.6em,
        var(--blackT) 1em,
        var(--black) 1em
      )
      9.2em 32.9em / 1.6em 1.1em,
    radial-gradient(
      0.6em 0.6em at 9.5em 34em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 10.5em 34em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.7em 0.7em at 7.5em 25.2em,
      var(--dgold) 49%,
      var(--dgoldT) 50%
    ),
    radial-gradient(
      0.7em 0.7em at 12.5em 25.2em,
      var(--dgold) 49%,
      var(--dgoldT) 50%
    ),
    radial-gradient(
        100% 310% at 50% 85%,
        var(--dgoldT) 2.85em,
        var(--dgold) 2.9em,
        var(--dgold) 3em,
        var(--dgold) 3em,
        var(--dgold) 3.45em,
        var(--dgoldT) 3.5em
      )
      6.5em 25.25em / 7em 7.25em,
    radial-gradient(
      0.6em 0.6em at 6.85em 32.5em,
      var(--dgold) 49%,
      var(--dgoldT) 50%
    ),
    radial-gradient(
      0.6em 0.6em at 13.15em 32.5em,
      var(--dgold) 49%,
      var(--dgoldT) 50%
    ),
    radial-gradient(
      0.4em 0.4em at 7.6em 22.5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.4em 0.4em at 12.4em 22.5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.4em 0.4em at 6.2em 33.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.4em 0.4em at 13.8em 33.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(100% 200% at 50% 0%, var(--mgold) 49%, var(--mgoldT) 50%)
      6.8em 34em / 6.3em 0.7em,
    radial-gradient(100% 200% at 50% 0%, var(--black) 49%, var(--blackT) 50%)
      6.6em 34em / 6.7em 1em,
    radial-gradient(100% 200% at 50% 0, var(--gold) 49.5%, var(--goldT) 50%)
      7.1em 20.9em / 5.8em 0.7em,
    radial-gradient(210% 100% at 50% 0, var(--black) 3.9em, var(--mgold) 3.95em)
      7.4em 20.9em / 5.2em 4.1em,
    linear-gradient(
        120deg,
        var(--blackT) 1.2em,
        var(--black) 1.25em,
        var(--black) 1.95em,
        var(--mgold) 2em
      )
      5.8em 20.9em / 1.7em 2.5em,
    linear-gradient(
        -120deg,
        var(--blackT) 1.2em,
        var(--black) 1.25em,
        var(--black) 1.95em,
        var(--mgold) 2em
      )
      12.5em 20.9em / 1.7em 2.5em,
    linear-gradient(
        45deg,
        var(--blackT) 0.7em,
        var(--black) 0.75em,
        var(--black) 1.34em,
        var(--mgold) 1.35em
      )
      5.4em 23.4em / 4.6em 0.7em,
    linear-gradient(
        -45deg,
        var(--blackT) 0.7em,
        var(--black) 0.75em,
        var(--black) 1.34em,
        var(--mgold) 1.35em
      )
      10em 23.4em / 4.6em 0.7em,
    radial-gradient(
        100% 290% at 50% 100%,
        var(--mgold) 4.35em,
        var(--black) 4.4em,
        var(--black) 49.5%,
        var(--blackT) 50%
      )
      5em 24em / 10em 10em,
    radial-gradient(100% 200% at 50% 0%, var(--mgold) 49.5%, var(--mgoldT) 50%)
      5.6em 34em / 8.75em 1.5em,
    radial-gradient(100% 200% at 50% 0%, var(--black) 49.5%, var(--blackT) 50%)
      5em 34em / 10em 2em,
    // 497 tk ka shit
    radial-gradient(
        0.7em 0.7em at 5.15em 24em,
        var(--black) 49%,
        var(--blackT) 50%
      ),
    radial-gradient(
      0.7em 0.7em at 14.85em 24em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
        100% 400% at 50% 125%,
        var(--blackT) 6.15em,
        var(--black) 6.2em,
        var(--black) 6.4em,
        var(--black) 49.5%,
        var(--blackT) 50%
      )
      3.25em 24em / 13.5em 8.5em,
    radial-gradient(
      0.55em 0.55em at 3.6em 32.5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.55em 0.55em at 16.4em 32.5em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(300% 200% at 150% 0%, var(--gold) 49.75%, var(--goldT) 50%)
      1.8em 32.8em / 8.4em 4.2em,
    radial-gradient(
        305% 200% at 150% 0%,
        var(--black) 49.75%,
        var(--blackT) 50%
      )
      1.3em 32.8em / 8.9em 4.7em,
    radial-gradient(300% 200% at -50% 0%, var(--gold) 49.75%, var(--goldT) 50%)
      10em 32.8em / 8.4em 4.2em,
    radial-gradient(
        305% 200% at -50% 0%,
        var(--black) 49.75%,
        var(--blackT) 50%
      )
      10em 32.8em / 8.9em 4.7em,
    linear-gradient(
        102deg,
        var(--blackT) 3.1em,
        var(--black) 3.15em,
        var(--black) 3.75em,
        var(--gold) 3.8em
      )
      0.9em 19em / 9.3em 15em,
    linear-gradient(
        -102deg,
        var(--blackT) 3.1em,
        var(--black) 3.15em,
        var(--black) 3.75em,
        var(--gold) 3.8em
      )
      10em 19em / 9.3em 15em,
    radial-gradient(
      0.8em 0.8em at 2.5em 35.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 3.7em 36.6em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 5.1em 37.3em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 6.6em 37.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 8.3em 38.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 10.1em 38.4em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 11.9em 38.2em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 13.6em 37.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 15.2em 37.3em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 16.6em 36.6em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    radial-gradient(
      0.8em 0.8em at 17.8em 35.8em,
      var(--black) 49%,
      var(--blackT) 50%
    ),
    linear-gradient(
        105deg,
        var(--blackT) 3.35em,
        var(--black) 3.4em,
        var(--black) 3.9em,
        var(--mgold) 3.95em
      )
      0em 19.2em / 9.3em 12.9em,
    linear-gradient(
        45deg,
        var(--blackT) 0.75em,
        var(--black) 0.8em,
        var(--black) 1.15em,
        var(--mgold) 1.2em
      )
      0em 32.1em / 1.5em 1.1em,
    linear-gradient(
        -105deg,
        var(--blackT) 3.35em,
        var(--black) 3.4em,
        var(--black) 3.9em,
        var(--mgold) 3.95em
      )
      10.9em 19.2em / 9.3em 12.9em,
    linear-gradient(
        -45deg,
        var(--blackT) 0.75em,
        var(--black) 0.8em,
        var(--black) 1.15em,
        var(--mgold) 1.2em
      )
      18.7em 32.1em / 1.5em 1.1em,
    linear-gradient(
        102deg,
        var(--blackT) 0.18em,
        var(--black) 0.23em,
        var(--black) 0.83em,
        var(--mgold) 0.88em
      )
      0.7em 34em / 2.5em 1em,
    linear-gradient(
        -102deg,
        var(--blackT) 0.18em,
        var(--black) 0.23em,
        var(--black) 0.83em,
        var(--mgold) 0.88em
      )
      17em 34em / 2.5em 1em,
    radial-gradient(
        200% 200% at 100% 0%,
        var(--mgold) 49.75%,
        var(--mgoldT) 50%
      )
      1.35em 35em / 8.8em 4.4em,
    radial-gradient(200% 200% at 0% 0%, var(--mgold) 49.75%, var(--mgoldT) 50%)
      10.05em 35em / 8.8em 4.4em,
    radial-gradient(
        200% 200% at 100% 0%,
        var(--black) 49.75%,
        var(--blackT) 50%
      )
      0.7em 35em / 9.4em 5em,
    radial-gradient(200% 200% at 0% 0%, var(--black) 49.75%, var(--blackT) 50%)
      10.1em 35em / 9.4em 5em,
    // 556 line
    // benchod
    radial-gradient(120% 100% at 50% 0, var(--black) 49%, var(--blackT) 50%) 4em
      17.5em / 12.1em 6.8em;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const Gauntlet = () => {
  return (
    <GauntletContainer>
      <InfinityGauntlet />
    </GauntletContainer>
  );
};

export default Gauntlet;
