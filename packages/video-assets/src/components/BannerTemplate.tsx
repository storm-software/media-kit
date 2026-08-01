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

import type { ReactNode } from "react";
import React from "react";
import { AbsoluteFill } from "remotion";
import { twMerge } from "tailwind-merge";
import type { VideoAssetProps } from "../types/video-asset";
import { Background } from "./Background";
import type { OrgTitleProps } from "./StaticOrgTitle";
import { StaticOrgTitle } from "./StaticOrgTitle";

export interface BannerTemplateProps extends VideoAssetProps {
  children: ReactNode;
  /**
   * Size passed to the footer `StaticOrgTitle`. Ignored when `showOrgTitle` is false
   * or when `size` is `"thin"`.
   *
   * @defaultValue "sm"
   */
  orgTitleSize?: OrgTitleProps["size"];
  /**
   * When false, only the project brand (`children`) is rendered — useful for
   * Storm Software banners where the org title is the main content.
   *
   * @defaultValue true
   */
  showOrgTitle?: boolean;
  className?: string;
  contentClassName?: string;
  orgTitleClassName?: string;
}

export const BannerTemplate: React.FC<BannerTemplateProps> = ({
  size = "normal",
  theme,
  orgIcon,
  children,
  orgTitleSize = "sm",
  showOrgTitle = true,
  className,
  contentClassName,
  orgTitleClassName
}) => {
  const renderOrgTitle = showOrgTitle && size !== "thin";

  return (
    <>
      <Background theme={theme} size={size} />
      <AbsoluteFill
        className={twMerge(
          "flex flex-col w-full",
          renderOrgTitle ? "" : "justify-center items-center gap-10",
          className,
          size === "normal" ? "py-8" : "py-0"
        )}>
        <div
          className={twMerge(
            "flex flex-3 flex-row justify-center items-center w-full",
            contentClassName
          )}>
          {children}
        </div>
        {renderOrgTitle && (
          <div
            className={twMerge(
              "flex flex-1 flex-row justify-center items-center w-full",
              orgTitleClassName
            )}>
            <StaticOrgTitle
              className="mr-8"
              size={orgTitleSize}
              theme={theme}
              orgIcon={orgIcon}
            />
          </div>
        )}
      </AbsoluteFill>
    </>
  );
};
