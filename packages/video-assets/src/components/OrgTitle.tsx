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

import { translate } from "@remotion/animation-utils";
import { loadFont } from "@remotion/google-fonts/Orbitron";
import { Img, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { twMerge } from "tailwind-merge";
import type { ThemeProps } from "../types/themes";

const { fontFamily } = loadFont();

export interface OrgTitleProps extends ThemeProps {
  className?: string;
  size?: "lg" | "md" | "sm" | "xs";
  style?: React.CSSProperties;
}

export const SingleOrgTitle: React.FC<OrgTitleProps> = ({
  size = "md",
  theme,
  className,
  style
}) => {
  return (
    <div
      style={style}
      className={twMerge(
        `flex justify-center flex-row items-center absolute h-full w-full ${
          size === "lg" ? "gap-10" : size === "xs" ? "gap-6" : "gap-4"
        } `,
        className
      )}>
      <Img
        src={`https://public.storm-cdn.com/storm-software/icon-${theme}.svg`}
        className={
          size === "lg"
            ? "w-80"
            : size === "md"
              ? "w-60"
              : size === "sm"
                ? "w-40"
                : "w-24"
        }
      />
      <h1
        style={{ fontFamily, color: theme === "light" ? "#1d1e22" : "white" }}
        className={`text-${theme === "light" ? "[#1d1e22]" : "white"} align-middle font-black font-orbitron ${
          size === "lg"
            ? "text-[18rem] mt-10"
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

export const OrgTitle: React.FC<OrgTitleProps> = ({
  size = "md",
  theme,
  className
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter1 = spring({
    fps,
    durationInFrames: 4.5,
    delay: 20,
    from: 1,
    to: -1,
    frame
  });

  const exit1 = spring({
    fps,
    durationInFrames: 4.5,
    delay: 20 + 4.5,
    from: -1,
    to: 1,
    frame
  });

  const enter2 = spring({
    fps,
    durationInFrames: 6.5,
    delay: 24.5,
    from: -1,
    to: 1,
    frame
  });

  const exit2 = spring({
    fps,
    durationInFrames: 6.5,
    delay: 24.5 + 6.5,
    from: 1,
    to: -1,
    frame
  });

  const enterOpacity = spring({
    fps,
    durationInFrames: size === "lg" ? 8 : 5,
    delay: 20,
    from: 1,
    to: 0.1,
    frame
  });

  const exitOpacity = spring({
    fps,
    durationInFrames: 10,
    delay: 20 + 8,
    from: 0,
    to: 1,
    frame
  });

  const scale = size === "lg" ? 8 : size === "md" ? 4 : 3;
  const transform1 = translate(scale * -5 * (enter1 + exit1 + enter2 + exit2));
  const transform2 = translate(scale * -60 * (enter1 + exit1 + enter2 + exit2));
  const transform3 = translate(scale * 70 * (enter1 + exit1 + enter2 + exit2));
  const transform4 = translate(scale * 8 * (enter1 + exit1 + enter2 + exit2));

  return (
    <div
      className={twMerge(
        "relative w-full",
        size === "lg"
          ? "h-142 w-9/12"
          : size === "md"
            ? "h-142"
            : size === "sm"
              ? "h-65"
              : "h-50",
        className
      )}>
      <SingleOrgTitle
        size={size}
        theme={theme}
        className="org-1"
        style={{ transform: transform1 }}
      />
      <SingleOrgTitle
        size={size}
        theme={theme}
        className="org-2"
        style={{ transform: transform2, opacity: enterOpacity + exitOpacity }}
      />
      <SingleOrgTitle
        size={size}
        theme={theme}
        className="org-3"
        style={{ transform: transform3, opacity: enterOpacity + exitOpacity }}
      />
      <SingleOrgTitle
        size={size}
        theme={theme}
        className="org-4"
        style={{ transform: transform4 }}
      />
    </div>
  );
};
