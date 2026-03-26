/* -------------------------------------------------------------------

                    ⚡ Storm Software - Media Kit

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
import { AbsoluteFill, Img, useCurrentFrame } from "remotion";
import { twMerge } from "tailwind-merge";
import { Background } from "../components/Background";
import { StaticOrgTitle } from "../components/StaticOrgTitle";
import type { ThemeProps } from "../types/themes";

const { fontFamily } = loadFont();

export interface BannerProps extends ThemeProps {
  type?: "thin" | "normal";
}

export const Banner: React.FC<BannerProps> = ({ type = "normal", theme }) => {
  const frame = useCurrentFrame();

  const showCursor = frame % 60 > 30;

  return (
    <>
      <Background theme={theme} />
      <AbsoluteFill className="flex flex-col justify-center items-center w-full py-10">
        <div
          className={twMerge(
            "flex flex-1 flex-row justify-center items-center w-[4/5] gap-6 max-h-75",
            type === "thin" ? "" : "mt-15"
          )}>
          <Img
            src={`https://public.storm-cdn.com/shell-shock/logo-${theme}.svg`}
            className={type === "thin" ? "max-w-20" : "max-w-15"}
          />
          <div className="flex flex-1 flex-row gap-2 mb-5 items-center">
            <h1
              style={{
                fontFamily,
                color: theme === "light" ? "#1d1e22" : "white"
              }}
              className={`text-${theme === "light" ? "[#1d1e22]" : "white"} font-normal text-[130px]`}>
              Shell
            </h1>
            <h1
              style={{
                fontFamily,
                color: theme === "light" ? "#1d1e22" : "white"
              }}
              className={`text-${theme === "light" ? "[#1d1e22]" : "white"} font-normal text-[130px]`}>
              Shock
            </h1>

            <div
              className={twMerge(
                "h-22 w-12 mt-5 ml-1",
                !showCursor
                  ? ""
                  : theme === "light"
                    ? "bg-[#1d1e22]"
                    : "bg-white"
              )}
            />
          </div>
        </div>
        {type !== "thin" && (
          <StaticOrgTitle className="mr-8" size="sm" theme={theme} />
        )}
      </AbsoluteFill>
    </>
  );
};
