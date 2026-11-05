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

import { getLength } from "@remotion/paths";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const windPaths = [
  {
    straight: "M90 207 H292",
    curved: "M90 207 H292 A44 44 0 1 0 247 162"
  },
  {
    straight: "M14 256 H438",
    curved: "M14 256 H438 A58 58 0 1 0 380 198"
  },
  {
    straight: "M201 302 H421",
    curved: "M201 302 H421 A44 44 0 1 1 375 347"
  }
].map(({ straight, curved }) => ({
  curved,
  curlFraction: 1 - getLength(straight) / getLength(curved)
}));

export interface LogoProps {
  theme?: "light" | "dark";
}

export function Logo({ theme = "dark" }: LogoProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const translateX = interpolate(frame, [0, 0.9 * fps], [-420, 0], {
    easing: Easing.out(value => Easing.cubic(value)),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="300"
      height="300"
      className="max-w-75 shrink-0"
      style={{ transform: `translateX(${translateX}px)` }}>
      <g
        fill="none"
        stroke={theme === "light" ? "#0891b2" : "#22d3ee"}
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round">
        <line x1="20" y1="207" x2="44" y2="207" />
        {windPaths.map(({ curved, curlFraction }, index) => {
          const curl = interpolate(
            frame,
            [(0.18 + index * 0.06) * fps, (0.72 + index * 0.06) * fps],
            [0, 1],
            {
              easing: Easing.inOut(value => Easing.cubic(value)),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            }
          );

          return (
            <path
              key={curved}
              d={curved}
              pathLength="1"
              strokeDasharray="1 1"
              strokeDashoffset={(1 - curl) * curlFraction}
            />
          );
        })}
        <line x1="130" y1="302" x2="154" y2="302" />
      </g>
    </svg>
  );
}
