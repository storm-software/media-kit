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
import { SocialLinks } from "../components/SocialLinks";
import { StaticOrgTitle } from "../components/StaticOrgTitle";
import type { VideoAssetProps } from "../types/video-asset";

export const Social: React.FC<VideoAssetProps> = ({ theme, size, orgIcon }) => {
  return (
    <>
      <Background theme={theme} size={size} />
      <AbsoluteFill className="flex flex-col justify-center items-center pt-10">
        <div className="flex-3 w-full flex justify-center items-center">
          <StaticOrgTitle
            size={size === "thin" ? "md" : "lg"}
            theme={theme}
            orgIcon={orgIcon}
          />
        </div>
        <SocialLinks
          theme={theme}
          size={size === "thin" ? "md" : "lg"}
          className={size === "thin" ? "pb-4" : "py-10"}
        />
      </AbsoluteFill>
    </>
  );
};

export const ColoredSocial: React.FC<Omit<VideoAssetProps, "orgIcon">> = ({
  size = "normal",
  theme
}) => {
  return <Social size={size} theme={theme} orgIcon="colored" />;
};

export const MonochromeSocial: React.FC<Omit<VideoAssetProps, "orgIcon">> = ({
  size = "normal",
  theme
}) => {
  return <Social size={size} theme={theme} orgIcon="monochrome" />;
};
