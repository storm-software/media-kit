import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";
import { enableTailwind } from "@remotion/tailwind-v4";
import chalkTemplate from "chalk-template";
import { createRequire } from "module";

try {
  console.log(
    chalkTemplate`{whiteBright 📦  Rendering branded gif assets... }`
  );

  const require = createRequire(import.meta.url);

  const bundled = await bundle({
    entryPoint: require.resolve("../src/index.ts"),
    // If you have a Webpack override, make sure to add it here
    webpackOverride: config => enableTailwind(config)
  });

  const compositions = await getCompositions(bundled);

  for (const composition of compositions) {
    console.log(`Rendering ${composition.id}...`);
    await renderMedia({
      codec: "gif",
      composition,
      serveUrl: bundled,
      outputLocation: `dist/brand/${composition.id}.gif`
    });
  }

  console.log(
    chalkTemplate`{green  ✔ All videos have been rendered successfully! }`
  );
} catch (err) {
  console.error(
    chalkTemplate`{red  An error occurred while rendering videos: }${err}`
  );
  process.exit(1);
}
