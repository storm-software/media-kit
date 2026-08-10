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
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { twMerge } from "tailwind-merge";
import type { ThemeProps } from "../types/themes";
import type { VideoAssetSizePreset } from "../types/video-asset";

const DARK_YELLOW = "#facc15";
const DARK_YELLOW_BRIGHT = "#fde047";

const LIGHT_YELLOW = "#f59e0b";
const LIGHT_YELLOW_BRIGHT = "#fbbf24";

export interface LogoProps extends ThemeProps {
  size?: VideoAssetSizePreset;
}

export const Logo: React.FC<LogoProps> = ({
  size = "normal",
  theme = "dark"
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const duration = Math.max(2, durationInFrames);
  const progress = frame / (duration - 1);

  const hoverY = Math.sin(progress * Math.PI * 2) * -10;

  const glowPhase = Math.sin(progress * Math.PI * 2);
  const glowRadius = interpolate(glowPhase, [-1, 1], [5, 11]);
  const glowOpacity = interpolate(glowPhase, [-1, 1], [0.3, 0.55]);
  const glowColor = `rgba(250, 204, 21, ${glowOpacity})`;

  return (
    <div
      style={{
        transform: `translateY(${hoverY}px)`,
        filter: `drop-shadow(0 0 ${glowRadius}px ${glowColor}) drop-shadow(0 0 ${glowRadius * 1.2}px ${glowColor})`
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 200"
        className={twMerge(size === "thin" ? "h-52 w-32" : "h-44 w-28")}
        aria-hidden="true">
        <path
          d="M 27 24 Q 27 8 50 8 Q 73 8 73 24 L 68 119 Q 68 127 50 127 Q 32 127 32 119 Z"
          fill={theme === "dark" ? DARK_YELLOW : LIGHT_YELLOW}
        />
        <circle
          cx="50"
          cy="172"
          r="24"
          fill={theme === "dark" ? DARK_YELLOW_BRIGHT : LIGHT_YELLOW}
        />
      </svg>
    </div>
  );
};
