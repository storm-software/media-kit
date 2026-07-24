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
import { noise3D } from "@remotion/noise";
import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import type { ThemeProps } from "../types/themes";

const { fontFamily } = loadFont();

const LINE_END_COLS = 16;
const LINE_END_ROWS = 3;
const NOISE_SPEED = 0.05;
const OPACITY_FALLOFF = {
  extrapolateRight: "clamp" as const,
  easing: Easing.out(Easing.poly(3))
};

const LineEnd: React.FC<{
  backgroundColor: string;
  side: "left" | "right";
}> = ({ backgroundColor, side }) => {
  const frame = useCurrentFrame();

  return (
    <div className="h-full w-75 grid grid-cols-16">
      {Array.from({ length: LINE_END_ROWS * LINE_END_COLS }, (_, i) => {
        const col = i % LINE_END_COLS;
        const row = Math.floor(i / LINE_END_COLS);
        const distFromCenter =
          side === "left"
            ? 1 - col / (LINE_END_COLS - 1)
            : col / (LINE_END_COLS - 1);
        const minOpacity = interpolate(
          distFromCenter,
          [0, 1],
          [0.7, 0.05],
          OPACITY_FALLOFF
        );
        const maxOpacity = interpolate(
          distFromCenter,
          [0, 1],
          [1, 0.35],
          OPACITY_FALLOFF
        );
        const opacity = interpolate(
          noise3D("line-end-opacity", col, row, frame * NOISE_SPEED),
          [-1, 1],
          [minOpacity, maxOpacity]
        );

        return (
          <div
            key={i}
            style={{
              backgroundColor,
              opacity
            }}
          />
        );
      })}
    </div>
  );
};

const Line: React.FC<{
  backgroundColor: string;
}> = ({ backgroundColor }) => {
  return (
    <div className="h-6.5 w-[99%] mx-auto flex items-center justify-center">
      <LineEnd backgroundColor={backgroundColor} side="left" />

      <div
        style={{
          backgroundColor
        }}
        className="h-full grow"
      />
      <LineEnd backgroundColor={backgroundColor} side="right" />
    </div>
  );
};

export const Logo: React.FC<ThemeProps> = ({ theme }) => {
  const color = theme === "light" ? "#305318" : "#9acb7f";

  return (
    <div className="flex flex-col justify-center items-center gap-0">
      <Line backgroundColor={color} />
      <h1
        style={{ fontFamily, color }}
        className="font-black text-[190px] leading-[0.9]">
        Powerlines
      </h1>
      <Line backgroundColor={color} />
    </div>
  );
};
