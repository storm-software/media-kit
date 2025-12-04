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
import { AbsoluteFill } from "remotion";
import { GlitchBackground } from "../components/GlitchBackground";
import { OrgTitle } from "../components/OrgTitle";

export interface BannerProps {
  theme?: "light" | "dark";
  type?: "thin" | "normal";
}

export const Banner: React.FC<BannerProps> = ({ type = "normal" }) => {
  return (
    <>
      <GlitchBackground />
      <AbsoluteFill className="flex flex-col justify-center items-center">
        <OrgTitle size={type === "thin" ? "sm" : "md"} />
      </AbsoluteFill>
    </>
  );
};
