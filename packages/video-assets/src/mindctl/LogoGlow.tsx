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

import { useCurrentFrame, useVideoConfig } from "remotion";
import type { LogoProps } from "./Logo";
import { Logo } from "./Logo";

/** Light originates at the logo and falls off behind the entire wordmark. */
export function LogoGlow({ size, theme = "dark" }: LogoProps) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = (frame % durationInFrames) / durationInFrames;
  const pulse = (1 - Math.cos(progress * Math.PI * 2)) / 2;
  const color = theme === "light" ? "162, 28, 175" : "233, 156, 246";
  const strength = (theme === "light" ? 0.65 * 1.3 ** 2 : 1) * 0.85;

  return (
    <div className="relative flex shrink-0 items-center justify-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          width: "500%",
          height: "500%",
          opacity: (0.24 + pulse * 0.18) * strength,
          transform: `scale(${0.94 + pulse * 0.12})`,
          background: `radial-gradient(ellipse at center, rgba(${color}, 0.6) 0%, rgba(${color}, 0.22) 18%, rgba(${color}, 0.06) 38%, transparent 65%)`
        }}
      />
      {[0, 1, 2].map(index => {
        const travel = (progress + index / 3) % 1;

        return (
          <div
            key={index}
            aria-hidden="true"
            className="pointer-events-none absolute rounded-full"
            style={{
              width: "100%",
              height: "100%",
              border: `1px solid rgba(${color}, 0.35)`,
              boxShadow: `0 0 18px rgba(${color}, 0.12)`,
              opacity: Math.sin(travel * Math.PI) ** 2 * 0.22 * strength,
              transform: `scale(${0.75 + travel * 3.5})`
            }}
          />
        );
      })}
      <div
        className="relative"
        style={{
          filter: `drop-shadow(0 0 ${10 + pulse * 12}px rgba(${color}, ${(0.2 + pulse * 0.18) * strength}))`
        }}>
        <Logo size={size} theme={theme} />
      </div>
    </div>
  );
}
