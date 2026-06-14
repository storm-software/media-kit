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
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { twMerge } from "tailwind-merge";
import type { VideoAssetProps } from "../types/video-asset";

const LINES_UPPER_NORMAL_COUNT = 10;
const LINES_LOWER_NORMAL_COUNT = 12;

const LINES_UPPER_THIN_COUNT = 8;
const LINES_LOWER_THIN_COUNT = 10;

const LINES_UPPER_NORMAL_SCALE = 20;
const LINES_LOWER_NORMAL_SCALE = 10;

const LINES_UPPER_THIN_SCALE = 18;
const LINES_LOWER_THIN_SCALE = 8;

const LINES_UPPER_SPEED = 6;
const LINES_LOWER_SPEED = 4;

export interface BackgroundProps extends VideoAssetProps {
  className?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  size = "normal",
  theme,
  className
}: BackgroundProps) => {
  const frame = useCurrentFrame();
  const { height, width, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      className={twMerge(
        theme === "light" ? "bg-mist-200" : "bg-[#1e2124]",
        className,
        "z-0"
      )}>
      <svg width={width} height={height} className="z-0">
        <>
          {Array.from({
            length:
              size === "thin"
                ? LINES_UPPER_THIN_COUNT
                : LINES_UPPER_NORMAL_COUNT
          })
            .fill(0)
            .map((_, i) => {
              const scale =
                size === "thin"
                  ? LINES_UPPER_THIN_SCALE
                  : LINES_UPPER_NORMAL_SCALE;

              const s1x = width / 2 + i * scale;
              const s1y =
                0 -
                scale *
                  (size === "thin"
                    ? LINES_UPPER_THIN_COUNT
                    : LINES_UPPER_NORMAL_COUNT) +
                i * scale;
              const c1x = width / 2 + i * scale;
              const c1y = height + 50 - i * scale;
              const c2x = width - width / 8 + i * scale;
              const c2y =
                -10 -
                scale *
                  (size === "thin"
                    ? LINES_UPPER_THIN_COUNT
                    : LINES_UPPER_NORMAL_COUNT) -
                i * scale * 2;
              const ex = width + i * scale * 2;
              const ey = height / 1.5 + scale * i;

              const normalizedFrame =
                (frame % durationInFrames) / durationInFrames;
              const c1xAdjusted =
                c1x +
                Math.sin(normalizedFrame * Math.PI * 2 + i) * LINES_UPPER_SPEED;
              const c1yAdjusted =
                c1y +
                Math.cos(normalizedFrame * Math.PI * 2 + i) * LINES_UPPER_SPEED;
              const c2xAdjusted =
                c2x +
                Math.cos(normalizedFrame * Math.PI * 2 + i) * LINES_UPPER_SPEED;
              const c2yAdjusted =
                c2y +
                Math.sin(normalizedFrame * Math.PI * 2 + i) * LINES_UPPER_SPEED;
              const opacity =
                (theme === "light" ? 0.3 : 0.4) +
                0.01 * Math.sin(normalizedFrame * Math.PI * 2 + i);

              return (
                <path
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className={twMerge(
                    theme === "light" ? "stroke-[#1e2124]" : "stroke-mist-50",
                    className,
                    "fill-none stroke-3"
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
          {Array.from({
            length:
              size === "thin"
                ? LINES_LOWER_THIN_COUNT
                : LINES_LOWER_NORMAL_COUNT
          })
            .fill(0)
            .map((_, i) => {
              const scale =
                size === "thin"
                  ? LINES_LOWER_THIN_SCALE
                  : LINES_LOWER_NORMAL_SCALE;

              const s1x = -10 - i * scale;
              const s1y = height / 2 + i * scale;
              const c1x = 100 + i * scale;
              const c1y = height + 50 * i;
              const c2x = height - 50 * i;
              const c2y = Math.min(width / 8, 100) + i * scale;
              const ex = width / 1.4 - i * scale;
              const ey = height + scale * i;

              const normalizedFrame =
                (frame % durationInFrames) / durationInFrames;
              const c1xAdjusted =
                c1x +
                Math.sin(normalizedFrame * Math.PI * 2 + i) * LINES_LOWER_SPEED;
              const c1yAdjusted =
                c1y +
                Math.cos(normalizedFrame * Math.PI * 2 + i) * LINES_LOWER_SPEED;
              const c2xAdjusted =
                c2x +
                Math.cos(normalizedFrame * Math.PI * 2 + i) * LINES_LOWER_SPEED;
              const c2yAdjusted =
                c2y +
                Math.sin(normalizedFrame * Math.PI * 2 + i) * LINES_LOWER_SPEED;
              const opacity =
                (theme === "light" ? 0.3 : 0.4) +
                0.02 * Math.sin(normalizedFrame * Math.PI * 2 + i);

              return (
                <path
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className={twMerge(
                    theme === "light" ? "stroke-[#1e2124]" : "stroke-mist-50",
                    className,
                    "fill-none stroke-3"
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
