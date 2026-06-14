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

import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import React from "react";
import { AbsoluteFill, Img } from "remotion";
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
  return (
    <>
      <Background theme={theme} size={size} />
      <AbsoluteFill className="flex flex-col gap-10 justify-center items-center w-full py-10">
        <div className="flex flex-1 flex-row justify-center items-center mx-4 w-[4/5] max-h-125">
          <Img
            src={`https://public.storm-cdn.com/acidic/logo-transparent-${theme}.svg`}
            className={size === "thin" ? "max-w-65" : "max-w-72"}
          />
          <h1
            style={{
              fontFamily,
              color: theme === "light" ? "#1d1e22" : "white"
            }}
            className={twMerge(
              `text-${theme === "light" ? "[#1d1e22]" : "white"} font-extrabold font-space-grotesk mt-16`,
              size === "thin" ? "text-[175px]" : "text-[220px]"
            )}>
            Acidic
          </h1>
        </div>
        {size !== "thin" && (
          <StaticOrgTitle
            className="mr-8"
            size="xs"
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
