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

import { loadFont } from "@remotion/google-fonts/PermanentMarker";
import React from "react";
import { AbsoluteFill } from "remotion";
import { twMerge } from "tailwind-merge";
import { Background } from "../components/Background";
import { StaticOrgTitle } from "../components/StaticOrgTitle";
import type { VideoAssetProps } from "../types/video-asset";
import { Logo } from "./Logo";

const { fontFamily } = loadFont();

export const Banner: React.FC<VideoAssetProps> = ({
  size = "normal",
  orgIcon,
  theme
}) => {
  return (
    <>
      <Background theme={theme} size={size} />
      <AbsoluteFill className="flex flex-col justify-center items-center w-full py-10">
        <div
          className={twMerge(
            "flex flex-1 flex-row justify-center items-center w-[2/5] gap-0  max-h-90"
          )}>
          <Logo theme={theme} />
          <h1
            style={{
              fontFamily,
              color: theme === "light" ? "#be123c" : "#f43f5e"
            }}
            className={`text-${theme === "light" ? "[#be123c]" : "[#f43f5e]"} font-normal text-[180px] mt-2`}>
            May I?
          </h1>
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
