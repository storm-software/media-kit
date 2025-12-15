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
import { PROJECT_LIST } from "./projects-list";

const require = createRequire(import.meta.url);

try {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    const project = args[0];
    if (!project) {
      console.error(
        chalkTemplate`{redBright  ❌ No project specified. Available projects are: }${PROJECT_LIST.join(
          ", "
        )}`
      );
      throw new Error("No project specified.");
    }

    if (!PROJECT_LIST.includes(project as (typeof PROJECT_LIST)[number])) {
      console.error(
        chalkTemplate`{redBright  ❌ Project "${project}" is not recognized. Available projects are: }${PROJECT_LIST.join(
          ", "
        )}`
      );
      throw new Error(`Project "${project}" is not recognized.`);
    }

    console.log(
      chalkTemplate`{whiteBright  📼 Rendering branded gif assets for project "${project}"... }`
    );

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

      if (!existsSync(`dist/${project}/originals`)) {
        await mkdir(`dist/${project}/originals`, { recursive: true });
      }

      if (!existsSync(`dist/${project}/optimized`)) {
        await mkdir(`dist/${project}/optimized`, { recursive: true });
      }

      const outputLocation = `dist/${project}/originals/${composition.id.replace(
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
            `dist/${project}/originals/`,
            `dist/${project}/optimized/`
          )
        );

      await Promise.allSettled([
        (async () => {
          const output = `dist/${project}/originals/${composition.id.replace(
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
                `dist/${project}/originals/`,
                `dist/${project}/optimized/`
              )
            );

          console.log(
            chalkTemplate`green  ${project}: }{greenBright  ✔ Completed rendering ${output} still! }`
          );
        })(),
        (async () => {
          const output = `dist/${project}/originals/${composition.id.replace(
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
                `dist/${project}/originals/`,
                `dist/${project}/optimized/`
              )
            );

          console.log(
            chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering ${output} still! }`
          );
        })(),
        (async () => {
          const output = `dist/${project}/originals/${composition.id.replace(
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
                `dist/${project}/originals/`,
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
      chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering all ${project} video assets successfully! }`
    );
  } else {
    console.error(
      chalkTemplate`{redBright  ❌ No project specified. Available projects are: }${PROJECT_LIST.join(
        ", "
      )}`
    );
    throw new Error("No project specified.");
  }
} catch (err) {
  console.error(
    chalkTemplate`{redBright  An error occurred while rendering videos: }${err}`
  );

  throw err;
}
