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

import { Img } from "remotion";
import { twMerge } from "tailwind-merge";
import type { OrgIcon, ThemeProps } from "../types/themes";
import { OrgTitleText } from "./OrgTitleText";

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
                ? "gap-5"
                : "gap-10"
        } `,
        className
      )}>
      <Img
        src={`https://public.storm-cdn.com/storm-software/icons/wide-${
          orgIcon === "colored" ? "colored-" : ""
        }${theme}.svg`}
        className={size === "lg" ? "h-50" : size === "md" ? "h-46" : "h-28"}
      />
      <h1 className="min-w-0">
        <OrgTitleText
          theme={theme ?? "dark"}
          className={`block w-auto max-w-full ${
            size === "lg" ? "h-42" : size === "md" ? "h-40" : "h-24"
          }`}
        />
      </h1>
    </div>
  );
};
