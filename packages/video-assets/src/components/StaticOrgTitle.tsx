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

import { loadFont } from "@remotion/google-fonts/Orbitron";
import { Img } from "remotion";
import { twMerge } from "tailwind-merge";
import type { OrgIcon, ThemeProps } from "../types/themes";

const { fontFamily } = loadFont();

export interface OrgTitleProps extends ThemeProps {
  className?: string;
  size?: "lg" | "md" | "sm" | "xs";
  orgIcon?: OrgIcon;
  style?: React.CSSProperties;
}

export const StaticOrgTitle: React.FC<OrgTitleProps> = ({
  size = "md",
  orgIcon = "colored",
  theme,
  className,
  style
}) => {
  return (
    <div
      style={style}
      className={twMerge(
        `flex justify-center flex-row items-center w-full ${
          size === "lg"
            ? "gap-10"
            : size === "xs"
              ? "gap-2"
              : size === "sm"
                ? "gap-2.5"
                : "gap-6"
        } `,
        className
      )}>
      <Img
        src={`https://public.storm-cdn.com/storm-software/icon${
          orgIcon === "colored" ? "-colored" : ""
        }-${theme}.svg`}
        className={size === "lg" ? "h-60" : size === "md" ? "h-42" : "h-24"}
      />
      <h1
        style={{ fontFamily, color: theme === "light" ? "#1d1e22" : "white" }}
        className={`text-${theme === "light" ? "[#1d1e22]" : "white"} align-middle font-black font-orbitron ${
          size === "lg"
            ? "text-[15rem]"
            : size === "md"
              ? "text-[10rem]"
              : "text-[6rem]"
        }`}>
        Storm
      </h1>
    </div>
  );
};
