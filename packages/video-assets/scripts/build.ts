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

import { bundle } from "@remotion/bundler";
import {
  getCompositions,
  openBrowser,
  renderMedia,
  renderStill
} from "@remotion/renderer";
import { enableTailwind } from "@remotion/tailwind-v4";
import { titleCase } from "@stryke/string-format/title-case";
import chalkTemplate from "chalk-template";
import { execa } from "execa";
import gifsicle from "gifsicle";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import sharp from "sharp";

const require = createRequire(import.meta.url);

const PROJECT_LIST = [
  "storm-software",
  "powerlines",
  "power-plant",
  "cyclone-ui",
  "acidic",
  "shell-shock",
  "earthquake",
  "stryke"
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

      if (!existsSync(`dist/generated/${project}`)) {
        await mkdir(`dist/generated/${project}`, { recursive: true });
      }

      if (!existsSync(`dist/optimized/${project}/media`)) {
        await mkdir(`dist/optimized/${project}/media`, { recursive: true });
      }

      const generatedPath = `dist/generated/${project}/${composition.id.replace(
        `${project}-`,
        ""
      )}.gif`;
      await renderMedia({
        puppeteerInstance: browser,
        codec: "gif",
        composition,
        serveUrl: bundled,
        outputLocation: generatedPath,
        everyNthFrame: 3,
        metadata: {
          title: `${project} - ${titleCase(
            composition.id
              .replace(`${project}-`, "")
              .replace(/-/g, " ")
              .replace(/dark$/, "(Dark)")
              .replace(/light$/, "(Light)")
          )}`,
          album: "Storm Software Media Kit",
          artist: "Storm Software",
          description: `A branded video asset for ${titleCase(
            project
          )} project in the Storm Software Media Kit.`,
          keywords: `storm-software, ${project}`
        },
        timeoutInMilliseconds: 3_000_000
      });

      console.log(
        chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering ${generatedPath}! }`
      );

      const { stdout } = await execa(
        gifsicle,
        ["--no-warnings", "--no-app-extensions", "--optimize=3", "--lossy=80"],
        {
          encoding: "buffer",
          maxBuffer: Number.POSITIVE_INFINITY,
          input: await sharp(generatedPath, { animated: true })
            .gif({ interFrameMaxError: 10, effort: 10 })
            .toBuffer()
        }
      );
      await writeFile(
        generatedPath.replace(
          `dist/generated/${project}/`,
          `dist/optimized/${project}/media/`
        ),
        stdout
      );

      await Promise.all([
        (async () => {
          const output = `dist/generated/${project}/${composition.id.replace(
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
            frame: 31,
            imageFormat: "png"
          });
          await sharp(output)
            .png({ palette: true })
            .toFile(
              output.replace(
                `dist/generated/${project}/`,
                `dist/optimized/${project}/media/`
              )
            );

          console.log(
            chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering ${output} still! }`
          );
        })(),
        (async () => {
          const output = `dist/generated/${project}/${composition.id.replace(
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
            frame: 31,
            imageFormat: "jpeg"
          });
          await sharp(output)
            .jpeg({ mozjpeg: true })
            .toFile(
              output.replace(
                `dist/generated/${project}/`,
                `dist/optimized/${project}/media/`
              )
            );

          console.log(
            chalkTemplate`{green  ${project}: }{greenBright  ✔ Completed rendering ${output} still! }`
          );
        })(),
        (async () => {
          const output = `dist/generated/${project}/${composition.id.replace(
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
            frame: 31,
            imageFormat: "webp"
          });
          await sharp(output)
            .webp({ quality: 95 })
            .toFile(
              output.replace(
                `dist/generated/${project}/`,
                `dist/optimized/${project}/media/`
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
      chalkTemplate`{red  ${project}: }{redBright  An error occurred while rendering ${project} assets: } \n${err}`
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
    chalkTemplate`{redBright  An error occurred while rendering videos: } \n${err}`
  );
  process.exit(1);
}
