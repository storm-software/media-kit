/* -------------------------------------------------------------------

                    🗲 Storm Software - Media Kit

 This code was released as part of the Media Kit project. Media Kit
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/media-kit.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/media-kit
 Documentation:            https://docs.stormsoftware.com/projects/media-kit
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { twMerge } from "tailwind-merge";

export interface LogoProps {
  className?: string;
  theme?: "light" | "dark";
}

export function Logo({ className, theme = "dark" }: LogoProps) {
  return (
    <svg
      className={twMerge(
        className,
        "stroke-3",
        theme === "light" ? "stroke-[#1d1e22]" : "stroke-black"
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-200 -200 400 400"
      stroke-linejoin="round"
      stroke-linecap="round">
      <defs>
        <linearGradient id="topShade" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor={theme === "dark" ? "#a78bfa" : "#8b6ce8"}
          />
          <stop
            offset="100%"
            stopColor={theme === "dark" ? "#9275e2" : "#5b3bb8"}
          />
        </linearGradient>
        <linearGradient id="sideShade" x1="0" y1="0" x2="1" y2="1">
          <stop
            offset="0%"
            stopColor={theme === "dark" ? "#a78bfa" : "#7c5ce0"}
          />
          <stop
            offset="100%"
            stopColor={theme === "dark" ? "#7c5ce0" : "#5b3bb8"}
          />
        </linearGradient>
        <linearGradient id="darkShade" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor={theme === "dark" ? "#8b6ce8" : "#5b3bb8"}
          />
          <stop
            offset="100%"
            stopColor={theme === "dark" ? "#5b3bb8" : "#3b207d"}
          />
        </linearGradient>

        <g id="bl-fr">
          <polygon
            fill="url(#topShade)"
            points="
               0,0
               52,-30
               155,30
               103,60"
          />
          <polygon
            fill="url(#sideShade)"
            points="
               103,60
               155,30
               155,90
               103,120"
          />
          <polygon
            fill="url(#darkShade)"
            points="
               0,0
               103,60
               103,120
               0,60"
          />
        </g>

        <g id="fl-br">
          <polygon
            fill="url(#darkShade)"
            points="
               0,0
               52,-30
               155,30
               103,60"
          />
          <polygon
            fill="url(#sideShade)"
            points="
               103,60
               155,30
               155,90
               103,120"
          />
          <polygon
            fill="url(#topShade)"
            points="
               0,0
               103,60
               103,120
               0,60"
          />
        </g>

        <g id="bottom">
          <polygon
            fill="url(#topShade)"
            points="
                 0,0
                 52,-30
                 155,30
                 103,60"
          />
          <polygon
            fill="url(#sideShade)"
            points="
                 103,60
                 155,30
                 155,90
                 103,120"
          />
          <polygon
            fill="url(#darkShade)"
            points="
                 0,0
                 103,60
                 103,120
                 0,60"
          />
        </g>

        <g id="top">
          <polygon
            fill="url(#topShade)"
            points="
                   0,0
                   52,-30
                   155,30
                   103,60"
          />
          <polygon
            fill="url(#sideShade)"
            points="
                   103,60
                   155,30
                   155,90
                   103,120"
          />
          <polygon
            fill="url(#darkShade)"
            points="
                   0,0
                   103,60
                   103,120
                   0,60"
          />
          <polygon
            fill="url(#topShade)"
            points="
                   -52,-150
                   0,-180
                   52,-150
                   0,-120"
          />
          <polygon
            fill="url(#darkShade)"
            points="
                   -52,-150
                   -52,-30
                   0,0
                   0,-120"
          />
          <polygon
            fill="url(#sideShade)"
            points="
                   52,-150
                   52,-30
                   0,0
                   0,-120"
          />
        </g>
      </defs>

      <use href="#bl-fr" transform="rotate(-0.49085792,-10535.499,18459.103)" />
      <use href="#bottom" transform="rotate(-120,51.519322,89.744789)" />
      <use href="#fl-br" transform="rotate(120)" />
      <use href="#fl-br" transform="rotate(120,103.48068,0.25549768)" />
      <use href="#bl-fr" transform="rotate(-0.49086,-49.281439,59.005208)" />
      <use href="#top" transform="rotate(-120)" />
    </svg>
  );
}
