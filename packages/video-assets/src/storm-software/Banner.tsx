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
import { AbsoluteFill } from "remotion";
import { Background } from "../components/Background";
import { StaticOrgTitle } from "../components/StaticOrgTitle";
import type { VideoAssetProps } from "../types/video-asset";

export const Banner: React.FC<VideoAssetProps> = ({
  size = "normal",
  theme,
  orgIcon
}) => {
  return (
    <>
      <Background theme={theme} size={size} />
      <AbsoluteFill className="z-20">
        <AbsoluteFill className="flex flex-col justify-center items-center">
          <StaticOrgTitle
            size={size === "thin" ? "md" : "lg"}
            theme={theme}
            orgIcon={orgIcon}
          />
        </AbsoluteFill>
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
