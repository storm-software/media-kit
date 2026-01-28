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

export interface XIconProps extends ThemeProps {
  className?: string;
  size?: "lg" | "md" | "sm";
  style?: React.CSSProperties;
}

export function XIcon(props: XIconProps) {
  const { className, size = "md", theme, style } = props;

  return (
    <svg
      style={style}
      className={twMerge(
        size === "lg" ? "h-7" : size === "sm" ? "h-5" : "h-6",
        theme === "light" ? "fill-zinc-900" : "fill-zinc-400",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16">
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
  );
}
