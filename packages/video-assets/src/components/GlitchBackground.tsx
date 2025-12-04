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
import { OffthreadVideo } from "remotion";

export const GlitchBackground: React.FC = () => {
  return (
    <OffthreadVideo
      src="https://public.storm-cdn.com/video/backgrounds/glitch-2-optimized.mp4"
      className="absolute top-0 left-0 w-full h-full object-cover"
      style={{
        objectFit: "cover"
      }}
      muted={true}
    />
  );
};
