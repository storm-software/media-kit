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

import { twMerge } from "tailwind-merge";
import type { VideoAssetSizePreset } from "../types/video-asset";

export interface LogoProps {
  className?: string;
  size?: VideoAssetSizePreset;
  theme?: "light" | "dark";
}

export function Logo({
  className,
  size = "normal",
  theme = "dark"
}: LogoProps) {
  const sizeClassName =
    size === "thin" ? "h-52" : size === "large" ? "h-96" : "h-72";

  return (
    <svg
      className={twMerge(sizeClassName, "w-auto", className)}
      viewBox="0 0 636 649"
      width="636"
      height="649">
      <defs>
        <radialGradient id="frontLight" cx="50%" cy="50%" r="70%">
          <stop
            offset="0%"
            stop-color={theme === "dark" ? "#f7c6ff" : "#E274F3"}
          />
          <stop
            offset="62%"
            stop-color={theme === "dark" ? "#f0abfc" : "#DE5DF1"}
          />
          <stop
            offset="100%"
            stop-color={theme === "dark" ? "#e99cf6" : "#D946EF"}
          />
        </radialGradient>
      </defs>
      <g fill="url(#frontLight)">
        <path d="M 216 244 L 336 453 L 458 245 Z" />
        <path d="M 470 252 L 350 461 L 579 459 Z" />
        <path d="M 204 252 L 94 459 L 324 461 Z" />
        <path d="M 217 229 L 457 230 L 337 40 Z" />
        <path d="M 343 600 L 565 473 L 344 474 Z" />
        <path d="M 108 473 L 330 601 L 330 474 Z" />
        <path d="M 584 184 L 479 240 L 584 440 Z" />
        <path d="M 92 185 L 90 438 L 195 241 Z" />
        <path d="M 357 47 L 471 228 L 577 173 Z" />
        <path d="M 316 47 L 97 173 L 203 228 Z" />
      </g>
    </svg>
  );
}
