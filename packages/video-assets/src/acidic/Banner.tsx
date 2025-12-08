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

import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";
import React from "react";
import { AbsoluteFill, Img } from "remotion";
import { twMerge } from "tailwind-merge";
import { GlitchBackground } from "../components/GlitchBackground";
import { OrgTitle } from "../components/OrgTitle";
import type { ThemeProps } from "../types/themes";

const { fontFamily } = loadFont();

export interface BannerProps extends ThemeProps {
  type?: "thin" | "normal";
}

export const Banner: React.FC<BannerProps> = ({ type = "normal", theme }) => {
  return (
    <>
      <GlitchBackground theme={theme} />
      <AbsoluteFill className="flex flex-col gap-10 justify-center items-center w-full py-10">
        <div className="flex flex-1 flex-row justify-center items-center mx-4 w-[4/5] max-h-[500px]">
          <Img
            src={`https://public.storm-cdn.com/acidic/logo-transparent-${theme}.svg`}
            className={type === "thin" ? "max-w-[260px]" : "max-w-[300px]"}
          />
          <h1
            style={{
              fontFamily,
              color: theme === "light" ? "#1d1e22" : "white"
            }}
            className={twMerge(
              `text-${theme === "light" ? "[#1d1e22]" : "white"} font-extrabold font-space-grotesk`,
              type === "thin" ? "text-[175px]" : "text-[220px]"
            )}>
            Acidic
          </h1>
        </div>
        {type !== "thin" && (
          <OrgTitle className="mr-8" size="xs" theme={theme} />
        )}
      </AbsoluteFill>
    </>
  );
};
