/* -------------------------------------------------------------------

                    ⚡ Storm Software - Media Kit

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
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { twMerge } from "tailwind-merge";
import type { ThemeProps } from "../types/themes";

const LINE_GROUP_1_COUNT = 12;
const LINE_GROUP_2_COUNT = 10;

const LINE_GROUP_1_SCALE = 10;
const LINE_GROUP_2_SCALE = 20;

const LINE_GROUP_1_SPEED = 2;
const LINE_GROUP_2_SPEED = 4;

export interface BackgroundProps extends ThemeProps {
  type?: "thin" | "normal";
  className?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  theme,
  className
}: BackgroundProps) => {
  const frame = useCurrentFrame();
  const { height, width, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      className={twMerge(
        theme === "light" ? "bg-mist-200" : "bg-black",
        className,
        "z-0"
      )}>
      <svg width={width} height={height} className="z-0">
        <>
          {Array.from({ length: LINE_GROUP_1_COUNT })
            .fill(0)
            .map((_, i) => {
              const s1x = -10 - i * LINE_GROUP_1_SCALE;
              const s1y = height / 2 + i * LINE_GROUP_1_SCALE;
              const c1x = 100 + i * LINE_GROUP_1_SCALE;
              const c1y = height + 50 * i;
              const c2x = height - 50 * i;
              const c2y = Math.min(width / 8, 100) + i * LINE_GROUP_1_SCALE;
              const ex = width / 1.5 - i * LINE_GROUP_1_SCALE;
              const ey = height + LINE_GROUP_1_SCALE * i;

              const normalizedFrame =
                (frame % durationInFrames) / durationInFrames;
              const c1xAdjusted =
                c1x +
                Math.sin(normalizedFrame * Math.PI * 2 + i) *
                  LINE_GROUP_1_SPEED;
              const c1yAdjusted =
                c1y +
                Math.cos(normalizedFrame * Math.PI * 2 + i) *
                  LINE_GROUP_1_SPEED;
              const c2xAdjusted =
                c2x +
                Math.cos(normalizedFrame * Math.PI * 2 + i) *
                  LINE_GROUP_1_SPEED;
              const c2yAdjusted =
                c2y +
                Math.sin(normalizedFrame * Math.PI * 2 + i) *
                  LINE_GROUP_1_SPEED;
              const opacity =
                (theme === "light" ? 0.35 : 0.25) +
                0.025 * Math.sin(normalizedFrame * Math.PI * 2 + i);

              return (
                <path
                  key={i}
                  className={twMerge(
                    theme === "light" ? "stroke-mist-950" : "stroke-mist-50",
                    className,
                    "fill-none stroke-4"
                  )}
                  d={`M ${s1x},${s1y} C ${c1xAdjusted},${c1yAdjusted} ${
                    c2xAdjusted
                  },${c2yAdjusted} ${ex},${ey}`}
                  opacity={opacity}
                />
              );
            })}
        </>
        <>
          {Array.from({ length: LINE_GROUP_2_COUNT })
            .fill(0)
            .map((_, i) => {
              const s1x = width / 2 + i * LINE_GROUP_2_SCALE;
              const s1y =
                0 -
                LINE_GROUP_2_SCALE * LINE_GROUP_2_COUNT +
                i * LINE_GROUP_2_SCALE;
              const c1x = width / 2 + i * LINE_GROUP_2_SCALE;
              const c1y = height + 50 - i * LINE_GROUP_2_SCALE;
              const c2x = width - width / 8 + i * LINE_GROUP_2_SCALE;
              const c2y =
                -10 -
                LINE_GROUP_2_SCALE * LINE_GROUP_2_COUNT -
                i * LINE_GROUP_2_SCALE * 2;
              const ex = width + i * LINE_GROUP_2_SCALE * 2;
              const ey = height / 1.5 + LINE_GROUP_2_SCALE * i;

              const normalizedFrame =
                (frame % durationInFrames) / durationInFrames;
              const c1xAdjusted =
                c1x +
                Math.sin(normalizedFrame * Math.PI * 2 + i) *
                  LINE_GROUP_2_SPEED;
              const c1yAdjusted =
                c1y +
                Math.cos(normalizedFrame * Math.PI * 2 + i) *
                  LINE_GROUP_2_SPEED;
              const c2xAdjusted =
                c2x +
                Math.cos(normalizedFrame * Math.PI * 2 + i) *
                  LINE_GROUP_2_SPEED;
              const c2yAdjusted =
                c2y +
                Math.sin(normalizedFrame * Math.PI * 2 + i) *
                  LINE_GROUP_2_SPEED;
              const opacity =
                (theme === "light" ? 0.4 : 0.25) +
                0.04 * Math.sin(normalizedFrame * Math.PI * 2 + i);

              return (
                <path
                  key={i}
                  className={twMerge(
                    theme === "light" ? "stroke-mist-950" : "stroke-mist-50",
                    className,
                    "fill-none stroke-4"
                  )}
                  d={`M ${s1x},${s1y} C ${c1xAdjusted},${c1yAdjusted} ${
                    c2xAdjusted
                  },${c2yAdjusted} ${ex},${ey}`}
                  opacity={opacity}
                />
              );
            })}
        </>
      </svg>
    </AbsoluteFill>
  );
};
