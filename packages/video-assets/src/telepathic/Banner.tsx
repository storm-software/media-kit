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

import { loadFont } from "@remotion/google-fonts/ZenDots";
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
      <AbsoluteFill className="flex flex-col justify-center items-center w-full gap-14">
        <div
          className={twMerge(
            "flex shrink-0 flex-row justify-center items-center gap-2 max-h-75",
            size === "thin" ? "" : "mt-15"
          )}>
          <Logo className="h-72" theme={theme} />
          <h1
            style={{
              fontFamily,
              color: theme === "light" ? "#633cb3" : "#a78bfa"
            }}
            className={`text-${theme === "light" ? "[#633cb3]" : "[#a78bfa]"} font-black text-[140px]`}>
            Telepathic
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
