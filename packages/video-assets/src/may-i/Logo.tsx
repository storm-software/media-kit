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

import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import type { ThemeProps } from "../types/themes";

export const Logo: React.FC<ThemeProps> = ({ theme }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const duration = Math.max(2, durationInFrames);
  const progress = frame / (duration - 1);
  const swing = (1 - Math.cos(progress * Math.PI * 2)) / 2;

  const rotationOffset = swing * 15;
  const gateArmRotation = -15 + rotationOffset;
  const pivotRotation = 15 + rotationOffset;
  const sirenRotation = progress * 360;
  const sirenLightScale = 0.9 - Math.cos(progress * Math.PI * 4) * 0.35;

  const armDepthFill = theme === "light" ? "fill-[#881337]" : "fill-[#9f1239]";
  const stripeFill = theme === "light" ? "fill-[#334155]" : "fill-[#475569]";
  const stripeDepthFill =
    theme === "light" ? "fill-[#0f172a]" : "fill-[#1e293b]";
  const postFill = theme === "light" ? "fill-[#475569]" : "fill-[#64748b]";
  const slotFill = theme === "light" ? "fill-[#1e293b]" : "fill-[#94a3b8]";
  const baseFill = theme === "light" ? "fill-[#1e293b]" : "fill-[#475569]";
  const sirenFill = theme === "light" ? "fill-[#e11d48]" : "fill-[#fb7185]";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -20 560 474"
      className="h-4/5">
      {/*  Colors  */}
      <defs>
        <clipPath id="arm-clip">
          <rect x="-20" y="-20" width="480" height="50" rx="20" />
        </clipPath>
        <clipPath id="arm-depth-clip">
          <rect x="-13" y="-29" width="480" height="50" rx="20" />
        </clipPath>
      </defs>

      <g transform="translate(0 13.4) scale(1 0.8)">
        {/*  Gate Arm  */}
        <g transform={`translate(88.5 138) rotate(${gateArmRotation})`}>
          {/*  Gate arm depth  */}
          <rect
            x="-13"
            y="-29"
            width="480"
            height="50"
            rx="20"
            className={armDepthFill}
          />

          {/*  Gray depth stripes  */}
          <g clipPath="url(#arm-depth-clip)">
            <g transform="translate(7 -9)">
              <polygon
                className={stripeDepthFill}
                points="-45,-20 -15,-20 -40,30 -70,30"
              />
              <polygon
                className={stripeDepthFill}
                points="25,-20 55,-20 30,30 0,30"
              />
              <polygon
                className={stripeDepthFill}
                points="95,-20 125,-20 100,30 70,30"
              />
              <polygon
                className={stripeDepthFill}
                points="165,-20 195,-20 170,30 140,30"
              />
              <polygon
                className={stripeDepthFill}
                points="235,-20 265,-20 240,30 210,30"
              />
              <polygon
                className={stripeDepthFill}
                points="305,-20 335,-20 310,30 280,30"
              />
              <polygon
                className={stripeDepthFill}
                points="375,-20 405,-20 380,30 350,30"
              />
              <polygon
                className={stripeDepthFill}
                points="445,-20 475,-20 445,30 420,30"
              />
            </g>
          </g>

          {/*  Red arm  */}
          <rect
            x="-20"
            y="-20"
            width="480"
            height="50"
            rx="20"
            className={theme === "light" ? "fill-[#be123c]" : "fill-[#f43f5e]"}
          />

          {/*  Gray stripes (full arm width and height)  */}
          <g clipPath="url(#arm-clip)">
            <polygon
              className={stripeFill}
              points="-45,-20 -15,-20 -40,30 -70,30"
            />
            <polygon className={stripeFill} points="25,-20 55,-20 30,30 0,30" />
            <polygon
              className={stripeFill}
              points="95,-20 125,-20 100,30 70,30"
            />
            <polygon
              className={stripeFill}
              points="165,-20 195,-20 170,30 140,30"
            />
            <polygon
              className={stripeFill}
              points="235,-20 265,-20 240,30 210,30"
            />
            <polygon
              className={stripeFill}
              points="305,-20 335,-20 310,30 280,30"
            />
            <polygon
              className={stripeFill}
              points="375,-20 405,-20 380,30 350,30"
            />
            <polygon
              className={stripeFill}
              points="445,-20 475,-20 450,30 420,30"
            />
          </g>
        </g>

        {/*  Vertical Post  */}
        <rect
          x="43.5"
          y="67"
          width="54"
          height="355"
          rx="12"
          className={postFill}
        />

        {/*  Pivot  */}
        <g transform={`rotate(${pivotRotation} 70.5 148)`}>
          <g transform="translate(70.5 148) scale(0.75 0.75) translate(-70.5 -148)">
            <circle
              cx="70.5"
              cy="148"
              r="21"
              className={
                theme === "light" ? "fill-[#be123c]" : "fill-[#f43f5e]"
              }
            />
            <g
              className={
                theme === "light" ? "stroke-[#4c0519]" : "stroke-[#881337]"
              }
              stroke-width="8"
              stroke-linecap="round">
              <line x1="63.5" y1="141" x2="77.5" y2="155" />
              <line x1="77.5" y1="141" x2="63.5" y2="155" />
            </g>
          </g>
        </g>

        {/*  Decorative Slots  */}
        <rect
          x="51.75"
          y="246.32"
          width="37.5"
          height="6"
          rx="5"
          className={slotFill}
        />
        <rect
          x="51.75"
          y="262"
          width="37.5"
          height="6"
          rx="5"
          className={slotFill}
        />
        <rect
          x="51.75"
          y="277.68"
          width="37.5"
          height="6"
          rx="5"
          className={slotFill}
        />
      </g>

      {/*  Rotating Siren  */}
      <g>
        <g
          transform={`rotate(${sirenRotation} 70.5 45)`}
          className={theme === "light" ? "fill-[#fda4af]" : "fill-[#fecdd3]"}
          opacity="0.18">
          <g
            transform={`translate(70.5 45) scale(${sirenLightScale} 1) translate(-70.5 -45)`}>
            <path d="M70.5 45 L104 33 L100 45 L104 57 Z" />
            <path d="M70.5 45 L37 57 L41 45 L37 33 Z" />
          </g>
        </g>
        <path
          d="M51.5 60 V46 C51.5 35.5 60 27 70.5 27 C81 27 89.5 35.5 89.5 46 V60 Z"
          className={sirenFill}
        />
        <path
          d="M60 52 V45 C60 39 64.5 34.5 70.5 34.5"
          fill="none"
          stroke={theme === "light" ? "#fecdd3" : "#fff1f2"}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />
        <rect
          x="47.5"
          y="58"
          width="46"
          height="11"
          rx="4"
          className={baseFill}
        />
      </g>

      {/*  Base  */}
      <path
        className={baseFill}
        transform="translate(35.25 -19.56) scale(0.5 0.88)"
        d="
          M22 412
          H119
          C131 412 141 422 141 434
          V503
          H0
          V434
          C0 422 10 412 22 412
          Z"
      />
    </svg>
  );
};
