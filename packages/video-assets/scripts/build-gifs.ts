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

import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia, renderStill } from "@remotion/renderer";
import { enableTailwind } from "@remotion/tailwind-v4";
import chalkTemplate from "chalk-template";
import { createRequire } from "node:module";
import sharp from "sharp";
import { PROJECT_LIST } from "./projects-list";

const require = createRequire(import.meta.url);

async function renderAssets(project: string) {
  try {
    const bundled = await bundle({
      entryPoint: require.resolve(`../src/${project}/index.ts`),
      webpackOverride: config => enableTailwind(config)
    });
    for (const composition of await getCompositions(bundled)) {
      console.log(
        chalkTemplate`{blue  ${project}: }{blueBright  Rendering ${project} ${composition.id.replace(
          `${project}-`,
          ""
        )}... }`
      );

      const outputLocation = `dist/${project}/${composition.id.replace(
        `${project}-`,
        ""
      )}.gif`;
      await renderMedia({
        codec: "gif",
        composition,
        serveUrl: bundled,
        outputLocation
      });

      console.log(
        chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering ${outputLocation}! }`
      );

      await sharp(outputLocation, { animated: true })
        .gif({ interFrameMaxError: 8 })
        .toFile(outputLocation.replace(".gif", "-optimized.gif"));

      await Promise.allSettled([
        (async () => {
          const output = `dist/${project}/${composition.id.replace(
            `${project}-`,
            ""
          )}.png`;
          console.log(
            chalkTemplate`{blue  ${project}: }{blueBright  Rendering still ${output}... }`
          );

          await renderStill({
            composition,
            serveUrl: bundled,
            output,
            frame: 86, // 4
            imageFormat: "png"
          });
          await sharp(output)
            .png({ palette: true })
            .toFile(output.replace(".png", "-optimized.png"));

          console.log(
            chalkTemplate`green  ${project}: }{greenBright  ✔ Completed rendering ${output} still! }`
          );
        })(),
        (async () => {
          const output = `dist/${project}/${composition.id.replace(
            `${project}-`,
            ""
          )}.jpeg`;
          console.log(
            chalkTemplate`{blue  ${project}: }{blueBright  Rendering still ${output}... }`
          );

          await renderStill({
            composition,
            serveUrl: bundled,
            output,
            frame: 86, // 4
            imageFormat: "jpeg"
          });
          await sharp(output)
            .jpeg({ mozjpeg: true })
            .toFile(output.replace(".jpeg", "-optimized.jpeg"));

          console.log(
            chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering ${output} still! }`
          );
        })(),
        (async () => {
          const output = `dist/${project}/${composition.id.replace(
            `${project}-`,
            ""
          )}.webp`;
          console.log(
            chalkTemplate`{blue  ${project}: }{blueBright  Rendering still ${output}... }`
          );

          await renderStill({
            composition,
            serveUrl: bundled,
            output,
            frame: 86, // 4
            imageFormat: "webp"
          });
          await sharp(output)
            .webp({ quality: 95 })
            .toFile(output.replace(".webp", "-optimized.webp"));

          console.log(
            chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering ${output} still! }`
          );
        })()
      ]);
    }

    console.log(
      chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering ${project} assets! }`
    );
  } catch (err) {
    console.error(
      chalkTemplate`{red  ${project}: }{redBright  An error occurred while rendering ${project} assets: }${err}`
    );
  }
}

try {
  console.log(
    chalkTemplate`{whiteBright  📼 Rendering branded gif assets... }`
  );

  await Promise.all(PROJECT_LIST.map(async project => renderAssets(project)));

  console.log(
    chalkTemplate`{greenBright  ✔ All videos have been rendered successfully! }`
  );
} catch (err) {
  console.error(
    chalkTemplate`{redBright  An error occurred while rendering videos: }${err}`
  );
  process.exit(1);
}
