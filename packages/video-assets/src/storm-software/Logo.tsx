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

import React from "react";
import { AbsoluteFill, OffthreadVideo } from "remotion";
import { Title } from "./Title";

export const Logo: React.FC<{
  theme: "light" | "dark";
}> = () => {
  return (
    <AbsoluteFill className="absolute top-0 left-0 w-full h-full">
      <OffthreadVideo
        src="https://public.storm-cdn.com/video/backgrounds/glitch-2.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted={true}
      />
      <AbsoluteFill className="flex flex-col justify-center items-center">
        <Title size="lg" />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
