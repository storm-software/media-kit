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

import type { ThemeProps } from "./themes";

export type VideoAssetSizePreset = "thin" | "normal";

export interface VideoAssetProps extends ThemeProps {
  /**
   * The size of video asset to render. "thin" video assets are optimized for shorter aspect ratios (e.g. 16:9), while "normal" video assets are optimized for taller aspect ratios (e.g. 4:5).
   *
   * @remarks
   * The expected video dimensions for each size are as follows:
   * - "thin": 1280x320 (16:9)
   * - "normal": 1280x640 (4:5)
   *
   * If the video asset is rendered in a different aspect ratio, the layout will adjust accordingly, but the "thin" size may be more suitable for wider aspect ratios, while the "normal" size may be more suitable for taller aspect ratios.
   *
   * @defaultValue "normal"
   */
  size?: VideoAssetSizePreset;
}
