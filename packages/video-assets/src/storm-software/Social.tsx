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
import { SocialLinks } from "../components/SocialLinks";
import type { ThemeProps } from "../types/themes";

export const Social: React.FC<ThemeProps> = ({ theme }) => {
  return (
    <>
      <GlitchBackground theme={theme} />
      <AbsoluteFill className="flex flex-col justify-center items-center pt-10">
        <div className="flex-3 w-full flex justify-center items-center">
          <OrgTitle size="lg" theme={theme} />
        </div>
        <SocialLinks theme={theme} size="lg" className="py-10" />
      </AbsoluteFill>
    </>
  );
};
