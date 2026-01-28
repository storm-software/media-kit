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

export interface WebsiteIconProps extends ThemeProps {
  className?: string;
  size?: "lg" | "md" | "sm";
  style?: React.CSSProperties;
}

export function WebsiteIcon(props: WebsiteIconProps) {
  const { className, size = "md", theme, style } = props;

  return (
    <svg
      style={style}
      className={twMerge(
        size === "lg" ? "h-8" : size === "sm" ? "h-5" : "h-6",
        theme === "light" ? "fill-zinc-900" : "fill-zinc-400",
        className
      )}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 347.971 347.971">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <polygon points="340.114,140.296 173.994,0 7.857,140.296 7.857,171.313 33.531,171.27 33.531,347.971 135.409,347.971 135.409,248.525 212.548,248.525 212.548,347.971 314.428,347.971 314.428,171.27 340.114,171.313 "></polygon>{" "}
        </g>
      </g>
    </svg>
  );
}
