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

import { twMerge } from "tailwind-merge";
import type { ThemeProps } from "../types/themes";

export interface MediumIconProps extends ThemeProps {
  className?: string;
  size?: "lg" | "md" | "sm";
  style?: React.CSSProperties;
}

export function MediumIcon(props: MediumIconProps) {
  const { className, size = "md", theme, style } = props;

  return (
    <svg
      style={style}
      className={twMerge(
        size === "lg" ? "h-12" : size === "sm" ? "h-8" : "h-10",
        theme === "light" ? "fill-zinc-900" : "fill-zinc-400",
        className
      )}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          className={theme === "light" ? "fill-zinc-900" : "fill-zinc-400"}
          d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z"></path>
        <path
          className={theme === "light" ? "fill-zinc-900" : "fill-zinc-400"}
          d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z"></path>
        <path
          className={theme === "light" ? "fill-zinc-900" : "fill-zinc-400"}
          d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z"></path>
      </g>
    </svg>
  );
}
