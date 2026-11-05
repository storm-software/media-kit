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

import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

export const stormSansFontFamily = "Storm Sans";

// Bundled from https://public.storm-cdn.com/fonts/storm-sans/webfonts/Bold.woff2.
void loadFont({
  family: stormSansFontFamily,
  url: staticFile("fonts/storm-sans/Bold.woff2"),
  weight: "700"
});
