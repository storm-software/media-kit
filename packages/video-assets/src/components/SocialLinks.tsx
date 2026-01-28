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

import { loadFont } from "@remotion/google-fonts/Orbitron";
import React from "react";
import { twMerge } from "tailwind-merge";
import type { ThemeProps } from "../types/themes";
import { DiscordIcon } from "./DiscordIcon";
import { WebsiteIcon } from "./WebsiteIcon";
import { XIcon } from "./XIcon";

const { fontFamily } = loadFont();

export interface SocialLinksProps extends ThemeProps {
  className?: string;
  size?: "lg" | "md" | "sm";
  style?: React.CSSProperties;
}

export const SocialLinks: React.FC<SocialLinksProps> = (
  props: SocialLinksProps
) => {
  const { theme, className, size = "md", style } = props;

  return (
    <div
      className={twMerge(
        "grid grid-cols-3 gap-2 justify-items-center",
        className
      )}
      style={style}>
      <div className="flex flex-row gap-3 items-center">
        <WebsiteIcon size={size} theme={theme} />
        <h3
          style={{
            fontFamily,
            color: theme === "light" ? "#18181b" : "#9f9fa9"
          }}
          className={`align-middle text-${
            theme === "light" ? "text-zinc-900" : "text-zinc-400"
          } font-medium text-2xl`}>
          StormSoftware.com
        </h3>
      </div>

      <div className="flex flex-row gap-3 items-center">
        <DiscordIcon size={size} theme={theme} />
        <h3
          style={{
            fontFamily,
            color: theme === "light" ? "#18181b" : "#9f9fa9"
          }}
          className={`align-middle text-${
            theme === "light" ? "text-zinc-900" : "text-zinc-400"
          } font-medium text-2xl`}>
          discord.gg/MQ6YVzakM5
        </h3>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <XIcon size={size} theme={theme} />
        <h3
          style={{
            fontFamily,
            color: theme === "light" ? "#18181b" : "#9f9fa9"
          }}
          className={`align-middle text-${
            theme === "light" ? "text-zinc-900" : "text-zinc-400"
          } font-medium text-2xl`}>
          @StormSoftwareHQ
        </h3>
      </div>
      {/* <div className="flex flex-row gap-2 items-center">
        <MediumIcon size={size} theme={theme} />
        <h3
          style={{
            fontFamily,
            color: theme === "light" ? "#18181b" : "#9f9fa9"
          }}
          className={`align-middle text-${
            theme === "light" ? "text-zinc-900" : "text-zinc-400"
          } font-normal text-2xl`}>
          medium.com/storm-software
        </h3>
      </div> */}
    </div>
  );
};
