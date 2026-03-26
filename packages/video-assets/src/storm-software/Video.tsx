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

import { Composition, Folder } from "remotion";
import "../style.css";
import { formatId } from "../utilities/id-helpers";
import { Banner } from "./Banner";
import { Social } from "./Social";

const DURATION_IN_FRAMES = 60;
const FPS = 30;

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Folder name="banners">
        <Composition
          id={formatId("storm-software", "banner-1280x640")}
          component={Banner}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          width={1280}
          height={640}
          defaultProps={{
            theme: "dark"
          }}
        />
        <Composition
          id={formatId("storm-software", "banner-1280x640-dark")}
          component={Banner}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          width={1280}
          height={640}
          defaultProps={{
            theme: "dark"
          }}
        />
        <Composition
          id={formatId("storm-software", "banner-1280x640-light")}
          component={Banner}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          width={1280}
          height={640}
          defaultProps={{
            theme: "light"
          }}
        />
        <Composition
          id={formatId("storm-software", "banner-1280x320")}
          component={Banner}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          width={1280}
          height={320}
          defaultProps={{
            theme: "dark",
            type: "thin"
          }}
        />
        <Composition
          id={formatId("storm-software", "banner-1280x320-dark")}
          component={Banner}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          width={1280}
          height={320}
          defaultProps={{
            theme: "dark",
            type: "thin"
          }}
        />
        <Composition
          id={formatId("storm-software", "banner-1280x320-light")}
          component={Banner}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          width={1280}
          height={320}
          defaultProps={{
            theme: "light",
            type: "thin"
          }}
        />
      </Folder>
      <Folder name="socials">
        <Composition
          id={formatId("storm-software", "social-1280x640")}
          component={Social}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          width={1280}
          height={640}
          defaultProps={{
            theme: "dark"
          }}
        />
        <Composition
          id={formatId("storm-software", "social-1280x640-dark")}
          component={Social}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          width={1280}
          height={640}
          defaultProps={{
            theme: "dark"
          }}
        />
        <Composition
          id={formatId("storm-software", "social-1280x640-light")}
          component={Social}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          width={1280}
          height={640}
          defaultProps={{
            theme: "light"
          }}
        />
      </Folder>
    </>
  );
};
