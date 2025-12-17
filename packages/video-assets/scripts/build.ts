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
import {
  getCompositions,
  openBrowser,
  renderMedia,
  renderStill
} from "@remotion/renderer";
import { enableTailwind } from "@remotion/tailwind-v4";
import chalkTemplate from "chalk-template";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import sharp from "sharp";

const require = createRequire(import.meta.url);

const PROJECT_LIST = [
  "storm-software",
  "powerlines",
  "acidic",
  "shell-shock"
] as const;

async function renderAssets(project: string) {
  try {
    const browser = await openBrowser("chrome");

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

      if (!existsSync(`dist/${project}/assets`)) {
        await mkdir(`dist/${project}/assets`, { recursive: true });
      }

      if (!existsSync(`dist/${project}/optimized`)) {
        await mkdir(`dist/${project}/optimized`, { recursive: true });
      }

      const outputLocation = `dist/${project}/assets/${composition.id.replace(
        `${project}-`,
        ""
      )}.gif`;
      await renderMedia({
        puppeteerInstance: browser,
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
        .toFile(
          outputLocation.replace(
            `dist/${project}/assets/`,
            `dist/${project}/optimized/`
          )
        );

      await Promise.allSettled([
        (async () => {
          const output = `dist/${project}/assets/${composition.id.replace(
            `${project}-`,
            ""
          )}.png`;
          console.log(
            chalkTemplate`{blue  ${project}: }{blueBright  Rendering still ${output}... }`
          );

          await renderStill({
            puppeteerInstance: browser,
            composition,
            serveUrl: bundled,
            output,
            frame: 86, // 4
            imageFormat: "png"
          });
          await sharp(output)
            .png({ palette: true })
            .toFile(
              output.replace(
                `dist/${project}/assets/`,
                `dist/${project}/optimized/`
              )
            );

          console.log(
            chalkTemplate`green  ${project}: }{greenBright  ✔ Completed rendering ${output} still! }`
          );
        })(),
        (async () => {
          const output = `dist/${project}/assets/${composition.id.replace(
            `${project}-`,
            ""
          )}.jpeg`;
          console.log(
            chalkTemplate`{blue  ${project}: }{blueBright  Rendering still ${output}... }`
          );

          await renderStill({
            puppeteerInstance: browser,
            composition,
            serveUrl: bundled,
            output,
            frame: 86, // 4
            imageFormat: "jpeg"
          });
          await sharp(output)
            .jpeg({ mozjpeg: true })
            .toFile(
              output.replace(
                `dist/${project}/assets/`,
                `dist/${project}/optimized/`
              )
            );

          console.log(
            chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering ${output} still! }`
          );
        })(),
        (async () => {
          const output = `dist/${project}/assets/${composition.id.replace(
            `${project}-`,
            ""
          )}.webp`;
          console.log(
            chalkTemplate`{blue  ${project}: }{blueBright  Rendering still ${output}... }`
          );

          await renderStill({
            puppeteerInstance: browser,
            composition,
            serveUrl: bundled,
            output,
            frame: 86, // 4
            imageFormat: "webp"
          });
          await sharp(output)
            .webp({ quality: 95 })
            .toFile(
              output.replace(
                `dist/${project}/assets/`,
                `dist/${project}/optimized/`
              )
            );

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
  const args = process.argv.slice(2);

  let project;
  if (args.length > 0) {
    project = args[0];
  }

  if (!project) {
    console.error(
      chalkTemplate`{redBright  ❌ No project specified. Available projects are: }${PROJECT_LIST.join(
        ", "
      )}`
    );
    process.exit(1);
  }

  console.log(
    chalkTemplate`{whiteBright  📼 Rendering branded gif assets for project "${project}"... }`
  );
  await renderAssets(project);

  console.log(
    chalkTemplate`{greenBright  ✔ All videos have been rendered successfully! }`
  );

  process.exit(0);
} catch (err) {
  console.error(
    chalkTemplate`{redBright  An error occurred while rendering videos: }${err}`
  );
  process.exit(1);
}
