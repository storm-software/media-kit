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

import type { ComponentType } from "react";
import type { AnyZodObject, CompositionProps } from "remotion";
import { Composition } from "remotion";
import type { VideoAssetProps } from "../types/video-asset";
import { getDimensions } from "../utilities/dims";
import { formatId } from "../utilities/id-helpers";

export type BannerCompositionProps<
  Schema extends AnyZodObject = AnyZodObject,
  Props extends Record<string, unknown> = Record<string, unknown>
> = Omit<
  CompositionProps<Schema, Props>,
  | "id"
  | "durationInFrames"
  | "fps"
  | "width"
  | "height"
  | "defaultProps"
  | "schema"
> &
  Partial<
    Pick<
      CompositionProps<Schema, Props>,
      "durationInFrames" | "fps" | "defaultProps" | "schema"
    >
  > & {
    /**
     * The id of the project to which this composition belongs. This will be used to generate the composition id in the format of `${projectId}-banner-${width}x${height}-${theme}`.
     *
     * @remarks
     * This is required to ensure that the composition id is unique across different projects, and to allow for better organization of compositions within the Remotion Studio interface.
     */
    projectId: string;

    /**
     * The type of asset to render for this banner composition. This will determine the dimensions of the composition, as well as the default props passed to the underlying component.
     *
     * @defaultValue "banner"
     */
    asset?: string;

    /**
     * The underlying React component to render for this banner composition. This component should be designed to accept the props defined in `VideoAssetProps`, as well as any additional props specified in the `Props` generic type parameter.
     */
    component: ComponentType<Props>;
  } & VideoAssetProps;

const DURATION_IN_FRAMES = 60;
const FPS = 30;

export function BannerComposition<
  Schema extends AnyZodObject = AnyZodObject,
  Props extends Record<string, unknown> = Record<string, unknown>
>(props: BannerCompositionProps<Schema, Props>) {
  const {
    projectId,
    asset = "banner",
    size = "normal",
    theme,
    orgIcon,
    defaultProps,
    component,
    ...rest
  } = props;

  const dimensions = getDimensions(size);

  return (
    <Composition<Schema, Props>
      {...(rest as any)}
      component={component}
      id={formatId(
        projectId,
        `${asset}-${dimensions.width}x${dimensions.height}${
          theme ? `-${theme}` : ""
        }${orgIcon ? `-${orgIcon}` : ""}`
      )}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={dimensions.width}
      height={dimensions.height}
      defaultProps={{
        ...(defaultProps ?? {}),
        theme: theme ?? "dark",
        size
      }}
    />
  );
}
