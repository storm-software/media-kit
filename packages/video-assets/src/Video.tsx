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
import { Banner } from "./storm-software/Banner";
import { Logo } from "./storm-software/Logo";
import "./style.css";

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Folder name="logos">
        <Composition
          id="logo-1920x1080"
          component={Logo}
          durationInFrames={240}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{
            theme: "dark"
          }}
        />
      </Folder>
      <Folder name="banners">
        <Composition
          id="banner-1280x640"
          component={Banner}
          durationInFrames={240}
          fps={30}
          width={1280}
          height={640}
          defaultProps={{
            theme: "dark"
          }}
        />
        <Composition
          id="banner-1280x320"
          component={Banner}
          durationInFrames={240}
          fps={30}
          width={1280}
          height={320}
          defaultProps={{
            theme: "dark",
            type: "thin"
          }}
        />
      </Folder>
    </>
  );
};
