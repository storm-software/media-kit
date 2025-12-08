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
import { Img } from "remotion";
import { twMerge } from "tailwind-merge";
import type { ThemeProps } from "../types/themes";

const { fontFamily } = loadFont();

export interface OrgTitleProps extends ThemeProps {
  className?: string;
  size?: "lg" | "md" | "sm" | "xs";
}

export const OrgTitle: React.FC<OrgTitleProps> = ({
  size = "md",
  theme,
  className
}) => {
  return (
    <div
      className={twMerge(
        `flex justify-center flex-row ${
          size === "lg" ? "gap-10" : size === "xs" ? "gap-6" : "gap-4"
        } `,
        className
      )}>
      <Img
        src="https://public.storm-cdn.com/storm-software/logo.svg"
        className={
          size === "lg"
            ? "w-96"
            : size === "md"
              ? "w-72"
              : size === "sm"
                ? "w-40"
                : "w-24"
        }
      />
      <h1
        style={{ fontFamily, color: theme === "light" ? "#1d1e22" : "white" }}
        className={`text-${theme === "light" ? "[#1d1e22]" : "white"} font-black font-orbitron ${
          size === "lg"
            ? "text-[20rem] mt-10"
            : size === "md"
              ? "text-[16rem]"
              : size === "sm"
                ? "text-[10rem]"
                : "text-[6rem]"
        }`}>
        Storm
      </h1>
    </div>
  );
};
