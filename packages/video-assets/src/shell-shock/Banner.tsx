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

import { loadFont } from "@remotion/google-fonts/Silkscreen";
import React from "react";
import { Img, useCurrentFrame } from "remotion";
import { twMerge } from "tailwind-merge";
import { BannerTemplate } from "../components/BannerTemplate";
import type { VideoAssetProps } from "../types/video-asset";
import { getColor } from "./utils";

const { fontFamily } = loadFont();

export const Banner: React.FC<VideoAssetProps> = ({
  size = "normal",
  orgIcon,
  theme
}) => {
  const frame = useCurrentFrame();

  const showCursor = frame % 60 > 30;

  return (
    <BannerTemplate size={size} theme={theme} orgIcon={orgIcon}>
      <div className="flex flex-row justify-center items-center gap-6">
        <Img
          src={`https://public.storm-cdn.com/shell-shock/icons/${theme}.svg`}
          className="max-w-18 mt-5"
        />
        <div className="flex flex-row gap-2 items-center">
          <h1
            style={{
              fontFamily,
              color: getColor(theme)
            }}
            className="font-normal text-[145px]">
            Shell
          </h1>
          <h1
            style={{
              fontFamily,
              color: getColor(theme)
            }}
            className="font-normal text-[145px]">
            Shock
          </h1>
          <div
            style={{
              backgroundColor: !showCursor ? "transparent" : getColor(theme)
            }}
            className={twMerge("h-24 w-12 mt-5 ml-1")}
          />
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
