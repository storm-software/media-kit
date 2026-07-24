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

import { loadFont } from "@remotion/google-fonts/Orbitron";
import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import type { ThemeProps } from "../types/themes";

const { fontFamily } = loadFont();

const GROW_DURATION = 14;
const PAUSE_DURATION = 20;
const SHRINK_DURATION = 14;
const LINE_STAGGER = 0;

const GROW_EASE = Easing.bezier(0.16, 1, 0.3, 1);
const SHRINK_EASE = Easing.bezier(0.45, 0, 0.55, 1);
const FADE_DURATION = 8;

const lineMotion = (frame: number, start: number) => {
  const growEnd = start + GROW_DURATION;
  const shrinkStart = growEnd + PAUSE_DURATION;
  const shrinkEnd = shrinkStart + SHRINK_DURATION;

  const grow = interpolate(frame, [start, growEnd], [0, 1], {
    easing: GROW_EASE,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  const shrink = interpolate(frame, [shrinkStart, shrinkEnd], [0, 1], {
    easing: SHRINK_EASE,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  const fadeIn = interpolate(frame, [start, start + FADE_DURATION], [0, 1], {
    easing: GROW_EASE,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  const fadeOut = interpolate(
    frame,
    [shrinkEnd - FADE_DURATION, shrinkEnd],
    [1, 0],
    {
      easing: SHRINK_EASE,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }
  );

  return {
    scaleX: grow * (1 - shrink),
    opacity: fadeIn * fadeOut,
    transformOrigin: shrink > 0 ? "right center" : "left center"
  };
};

export const Logo: React.FC<ThemeProps> = ({ theme }) => {
  const frame = useCurrentFrame();
  const color = theme === "light" ? "#305318" : "#9acb7f";

  const top = lineMotion(frame, 0);
  const bottom = lineMotion(frame, LINE_STAGGER);

  return (
    <div className="flex flex-col justify-center items-center gap-0">
      <div
        style={{
          backgroundColor: color,
          opacity: top.opacity,
          transform: `scaleX(${top.scaleX})`,
          transformOrigin: top.transformOrigin
        }}
        className="h-6.5 w-[99%] mx-auto"
      />
      <h1
        style={{ fontFamily, color }}
        className="font-black text-[190px] leading-[0.9]">
        Powerlines
      </h1>
      <div
        style={{
          backgroundColor: color,
          opacity: bottom.opacity,
          transform: `scaleX(${bottom.scaleX})`,
          transformOrigin: bottom.transformOrigin
        }}
        className="h-6.5 w-[99%] mx-auto"
      />
    </div>
  );
};
