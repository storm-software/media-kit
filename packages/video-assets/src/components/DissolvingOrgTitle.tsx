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

import type { Timeline } from "animejs";
import { createTimeline, stagger, steps } from "animejs";
import { useEffect, useState } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { twMerge } from "tailwind-merge";
import type { OrgTitleProps } from "./StaticOrgTitle";
import { StaticOrgTitle } from "./StaticOrgTitle";

export const DissolvingOrgTitle: React.FC<OrgTitleProps> = ({
  size = "md",
  theme,
  className
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const [animation, setAnimation] = useState<Timeline | null>(null);

  useEffect(() => {
    setAnimation(() => {
      return createTimeline()
        .add(
          ".org",
          {
            opacity: 0,
            ease: steps(1),
            loop: false,
            autoplay: false
          },
          stagger(30, {
            grid: [20, 10],
            from: "random"
          })
        )
        .add(
          ".org",
          {
            opacity: 1,
            ease: steps(1),
            loop: false,
            autoplay: false
          },
          stagger(30, {
            grid: [20, 10],
            from: "random"
          })
        );
    });
  }, []);

  useEffect(() => {
    if (!animation) {
      return;
    }
    animation.seek((frame / fps) * 2000);
  }, [animation, durationInFrames, fps, frame]);

  return (
    <div
      className={twMerge(
        "relative w-full z-30",
        size === "lg" ? "h-3/4" : size === "md" ? "h-4/5" : "h-42",
        className
      )}>
      <StaticOrgTitle size={size} theme={theme} className="org org_0-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_0-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_0-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_0-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_0-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_0-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_0-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_0-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_0-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_0-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_1-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_2-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_3-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_4-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_5-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_6-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_7-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_8-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_9-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_10-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_11-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_12-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_13-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_14-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_15-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_16-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_17-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_18-9" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-0" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-1" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-2" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-3" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-4" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-5" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-6" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-7" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-8" />
      <StaticOrgTitle size={size} theme={theme} className="org org_19-9" />
    </div>
  );
};
