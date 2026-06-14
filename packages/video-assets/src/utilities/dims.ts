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

import type { VideoAssetSizePreset } from "../types/video-asset";

/**
 * Utility function to get the dimensions for a given video asset size preset.
 *
 * @param size - The size preset of the video asset ("thin" or "normal"). Defaults to "normal".
 * @returns An object containing the width and height for the specified video asset size preset.
 */
export function getDimensions(size: VideoAssetSizePreset = "normal") {
  switch (size) {
    case "thin":
      return { width: 1280, height: 320 };
    case "normal":
      return { width: 1280, height: 640 };
  }
}
