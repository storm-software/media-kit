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

import { loadFont } from "@remotion/google-fonts/Poppins";
import React from "react";
import { BannerTemplate } from "../components/BannerTemplate";
import type { VideoAssetProps } from "../types/video-asset";
import { Logo } from "./Logo";
import { getColor } from "./utils";

const { fontFamily } = loadFont();

export const Banner: React.FC<VideoAssetProps> = ({
  size = "normal",
  orgIcon,
  theme
}) => {
  return (
    <BannerTemplate size={size} theme={theme} orgIcon={orgIcon}>
      <div className="flex flex-row justify-center items-center gap-6">
        <Logo />
        <h1
          style={{
            fontFamily,
            color: getColor(theme)
          }}
          className="font-bold text-[150px] mt-8">
          Sourcebook
        </h1>
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
