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

import { Folder } from "remotion";
import "../style.css";
import type { BannerCompositionProps } from "./BannerComposition";
import { BannerComposition } from "./BannerComposition";

export type BannerVideoAssetsProps = Pick<
  BannerCompositionProps,
  "projectId" | "theme" | "size" | "asset"
> & {
  monochrome: BannerCompositionProps["component"];
  colored: BannerCompositionProps["component"];
};

export const BannerVideoAssets: React.FC<BannerVideoAssetsProps> = ({
  asset = "banner",
  monochrome,
  colored,
  ...rest
}: BannerVideoAssetsProps) => {
  if (!colored && !monochrome) {
    return null;
  }

  return (
    <>
      <Folder name={asset}>
        {colored && (
          <Folder name="colored">
            <BannerComposition
              {...rest}
              asset={asset}
              component={colored}
              theme="dark"
            />
            <BannerComposition
              {...rest}
              asset={asset}
              component={colored}
              theme="light"
            />
            <BannerComposition
              {...rest}
              asset={asset}
              component={colored}
              theme="dark"
              size="thin"
            />
            <BannerComposition
              {...rest}
              asset={asset}
              component={colored}
              theme="light"
              size="thin"
            />
          </Folder>
        )}
        {monochrome && (
          <Folder name="monochrome">
            <BannerComposition
              {...rest}
              asset={`${asset}-mono`}
              component={monochrome}
              theme="dark"
            />
            <BannerComposition
              {...rest}
              asset={`${asset}-mono`}
              component={monochrome}
              theme="light"
            />
            <BannerComposition
              {...rest}
              asset={`${asset}-mono`}
              component={monochrome}
              theme="dark"
              size="thin"
            />
            <BannerComposition
              {...rest}
              asset={`${asset}-mono`}
              component={monochrome}
              theme="light"
              size="thin"
            />
          </Folder>
        )}
      </Folder>
    </>
  );
};
