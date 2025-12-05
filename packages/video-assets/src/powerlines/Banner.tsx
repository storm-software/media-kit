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

import React from "react";
import { AbsoluteFill, Img } from "remotion";
import { GlitchBackground } from "../components/GlitchBackground";
import { OrgTitle } from "../components/OrgTitle";
import type { ThemeProps } from "../types/themes";

export interface BannerProps extends ThemeProps {
  type?: "thin" | "normal";
}

export const Banner: React.FC<BannerProps> = ({ type = "normal", theme }) => {
  return (
    <>
      <GlitchBackground theme={theme} />
      <AbsoluteFill className="flex flex-col justify-center items-center gap-18">
        <Img
          src={`https://public.storm-cdn.com/powerlines/logo-${theme}.webp`}
          className="w-[80%]"
        />
        {type !== "thin" && (
          <OrgTitle className="mr-8" size="xs" theme={theme} />
        )}
      </AbsoluteFill>
    </>
  );
};
