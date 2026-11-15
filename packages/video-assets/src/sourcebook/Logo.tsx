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

import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { getColor } from "./utils";

type Point = [number, number];

const SPINE_X = 133.949 / 2;
const SPINE_TOP = 43.5;
const SPINE_BOTTOM = 107.7;

/**
 * Stroke centerlines (fitted to the static logo) of the left pages, outermost to innermost; the right pages mirror them across the spine.
 * Each page runs from the spine top through its top-curve controls, top corner, bottom corner and bottom-curve controls to the spine bottom.
 */
const PAGES: Point[][] = [
  [
    [45.5, 33.6],
    [25.3, 33.9],
    [2.9, 41.3],
    [2.9, 106],
    [26.3, 97.8],
    [44.8, 98.7]
  ],
  [
    [51.9, 30.6],
    [32.5, 20.6],
    [12.1, 21.8],
    [12.1, 86.1],
    [41, 88],
    [47.6, 94.3]
  ],
  [
    [54.7, 24.5],
    [43.5, 12.9],
    [21.3, 3.8],
    [21.3, 69.3],
    [47.6, 77.3],
    [51.3, 88.1]
  ]
];

/**
 * The page outline at `slot`: 0-2 are the left pages (outermost to innermost) and 3-5 the right pages (innermost to outermost).
 * Fractional slots blend neighbouring pages, and slots between 2 and 3 turn the page over the spine.
 */
function pagePoints(slot: number): Point[] {
  if (slot >= 3) {
    return pagePoints(5 - slot).map(([x, y]) => [2 * SPINE_X - x, y]);
  }
  if (slot > 2) {
    const angle = (3 - slot) * Math.PI;
    const lift = 0.3 * Math.sin(angle);

    return PAGES[2]!.map(([x, y]) => [
      SPINE_X + Math.cos(angle) * (SPINE_X - x),
      y - lift * (SPINE_X - x)
    ]);
  }

  const from = Math.min(Math.floor(slot), 1);
  const to = PAGES[from + 1]!;

  return PAGES[from]!.map(([x, y], i) => [
    x + (to[i]![0] - x) * (slot - from),
    y + (to[i]![1] - y) * (slot - from)
  ]);
}

export interface LogoProps {
  theme?: "light" | "dark";
}

export function Logo({ theme = "dark" }: LogoProps) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const loopFrame = frame % durationInFrames;
  const color = getColor(theme);

  // The page turns during the first half of the loop so the still render (frame 31) shows the book at rest
  const progress = interpolate(loopFrame, [0, durationInFrames / 2], [0, 1], {
    easing: Easing.inOut(value => Easing.cubic(value)),
    extrapolateRight: "clamp"
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="506.263"
      height="419.866"
      viewBox="0 0 133.949 111.089"
      className="max-w-65 h-auto overflow-visible">
      <g
        fill={color}
        fillOpacity={0}
        stroke={color}
        strokeWidth={5.9}
        strokeLinecap="round">
        <path d={`M${SPINE_X} ${SPINE_TOP}V${SPINE_BOTTOM}`} />
        {/* Every page shifts one slot left: page 3 turns over the spine, page 0 fades out and page 6 fades in at the far right */}
        {[0, 1, 2, 3, 4, 5, 6].map(page => {
          const [a, b, c, d, e, f] = pagePoints(
            Math.min(Math.max(page - progress, 0), 5)
          );

          return (
            <path
              key={page}
              d={`M${SPINE_X} ${SPINE_TOP}C${a} ${b} ${c}L${d}C${e} ${f} ${SPINE_X} ${SPINE_BOTTOM}`}
              fillOpacity={page === 3 ? 0.2 * Math.sin(progress * Math.PI) : 0}
              opacity={page === 0 ? 1 - progress : page === 6 ? progress : 1}
            />
          );
        })}
      </g>
    </svg>
  );
}
