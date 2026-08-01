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
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig
} from "remotion";
import { BannerTemplate } from "../components/BannerTemplate";
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
    <BannerTemplate size={size} theme={theme} orgIcon={orgIcon}>
      <div className="flex flex-row justify-center items-center gap-6">
        <Img
          src={`https://public.storm-cdn.com/power-plant/icons/${theme}.svg`}
          className="max-w-50"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <div className="flex flex-row gap-2 items-center">
          <h1
            style={{
              fontFamily,
              color: theme === "light" ? "#ca8a04" : "#ffdc64"
            }}
            className="font-bold text-[180px]">
            Power
          </h1>
          <h1
            style={{
              fontFamily,
              color: theme === "light" ? "#ca8a04" : "#ffdc64"
            }}
            className="font-bold text-[180px]">
            Plant
          </h1>
        </div>
      </div>
    </BannerTemplate>
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
