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
import { AbsoluteFill, Img } from "remotion";
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
      <AbsoluteFill className="flex flex-col justify-center items-center w-full py-10">
        <div className="flex flex-1 flex-row justify-center items-center w-[4/5] gap-10 max-h-75">
          <Img
            src={`https://public.storm-cdn.com/shell-shock/logo-${theme}.svg`}
            className={type === "thin" ? "max-w-20" : "max-w-18"}
          />
          <h1
            style={{
              fontFamily,
              color: theme === "light" ? "#1d1e22" : "white"
            }}
            className={`text-${theme === "light" ? "[#1d1e22]" : "white"} font-bold text-[115px]`}>
            Shell Shock
          </h1>
        </div>
        {type !== "thin" && (
          <OrgTitle className="mr-8" size="xs" theme={theme} />
        )}
      </AbsoluteFill>
    </>
  );
};
