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

import { Folder } from "remotion";
import { RemotionVideo as AcidicVideo } from "./acidic/Video";
import { RemotionVideo as PowerlinesVideo } from "./powerlines/Video";
import { RemotionVideo as ShellShockVideo } from "./shell-shock/Video";
import { RemotionVideo as StormSoftwareVideo } from "./storm-software/Video";

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Folder name="storm-software">
        <StormSoftwareVideo />
      </Folder>
      <Folder name="powerlines">
        <PowerlinesVideo />
      </Folder>
      <Folder name="acidic">
        <AcidicVideo />
      </Folder>
      <Folder name="shell-shock">
        <ShellShockVideo />
      </Folder>
    </>
  );
};
