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

import { loadFont } from "@remotion/google-fonts/ProtestRevolution";
import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig
} from "remotion";
import { twMerge } from "tailwind-merge";
import { Background } from "../components/Background";
import { StaticOrgTitle } from "../components/StaticOrgTitle";
import type { VideoAssetProps } from "../types/video-asset";

const { fontFamily } = loadFont();

export const Banner: React.FC<VideoAssetProps> = ({
  size = "normal",
  orgIcon,
  theme
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const rotation = interpolate(
    spring({
      fps,
      frame,
      config: { damping: 400 }
    }),
    [0, 1],
    [0, 120]
  );

  return (
    <>
      <Background theme={theme} size={size} />
      <AbsoluteFill className="flex flex-col justify-center items-center w-full py-10">
        <div
          className={twMerge(
            "flex flex-1 flex-row justify-center items-center w-[4/5] gap-6 max-h-95",
            size === "thin" ? "" : "mt-15"
          )}>
          <Img
            src={`https://public.storm-cdn.com/power-plant/icons/${theme}.svg`}
            className="max-w-50"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          <div className="flex flex-1 flex-row gap-2 items-center">
            <h1
              style={{
                fontFamily,
                color: theme === "light" ? "#ca8a04" : "#ffdc64"
              }}
              className={`text-${theme === "light" ? "[#ca8a04]" : "[#ffdc64]"} font-bold text-[180px]`}>
              Power
            </h1>
            <h1
              style={{
                fontFamily,
                color: theme === "light" ? "#ca8a04" : "#ffdc64"
              }}
              className={`text-${theme === "light" ? "[#ca8a04]" : "[#ffdc64]"} font-bold text-[180px]`}>
              Plant
            </h1>
          </div>
        </div>
        {size !== "thin" && (
          <StaticOrgTitle
            className="mr-8"
            size="sm"
            theme={theme}
            orgIcon={orgIcon}
          />
        )}
      </AbsoluteFill>
    </>
  );
};

export const ColoredBanner: React.FC<Omit<VideoAssetProps, "orgIcon">> = ({
  size = "normal",
  theme
}) => {
  return <Banner size={size} theme={theme} orgIcon="colored" />;
};

export const MonochromeBanner: React.FC<Omit<VideoAssetProps, "orgIcon">> = ({
  size = "normal",
  theme
}) => {
  return <Banner size={size} theme={theme} orgIcon="monochrome" />;
};
