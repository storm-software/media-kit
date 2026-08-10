---
name: add-video-assets
description: Adds a new branded video-asset project to packages/video-assets. Use when scaffolding a new project folder, registering compositions in the Remotion preview, adding an Nx build target, or updating the asset build script. Triggers on "add video assets project", "new video-assets project", "add project to video-assets", or similar.
---

# Add a Video Assets Project

Adds a new branded project to `packages/video-assets`. Use an existing project folder (e.g. `razorwind`, `acidic`) as the template.

**Naming**: Use kebab-case for the project id (e.g. `my-project`). The id must match across the folder name, `projectId` prop, composition ids, Nx target, and `PROJECT_LIST`.

## Checklist

```
- [ ] 1. Create src/{project-id}/ folder
- [ ] 2. Update src/Video.tsx
- [ ] 3. Add build-{project-id} target to project.json
- [ ] 4. Add project to scripts/build.ts PROJECT_LIST
- [ ] 5. Verify build
```

---

## 1. Create the project folder

Add `packages/video-assets/src/{project-id}/` following existing projects.

### Required files

| File | Purpose |
|------|---------|
| `index.ts` | Remotion entry point for the build script (`registerRoot`) |
| `Video.tsx` | Exports `RemotionVideo` with compositions for this project |
| `Banner.tsx` | Banner compositions (`ColoredBanner`, `MonochromeBanner`) |
| `Logo.tsx` | Project logo SVG/component |

### `index.ts`

Copy from any existing project — only the import path changes:

```ts
import { registerRoot } from "remotion";
import { RemotionVideo } from "./Video";

registerRoot(RemotionVideo);
```

### `Video.tsx`

Simplest pattern (single banner asset):

```tsx
import { BannerVideoAssets } from "../components/BannerVideoAssets";
import "../style.css";
import { ColoredBanner, MonochromeBanner } from "./Banner";

export const RemotionVideo: React.FC = () => {
  return (
    <BannerVideoAssets
      projectId="{project-id}"
      monochrome={MonochromeBanner}
      colored={ColoredBanner}
    />
  );
};
```

For multiple asset types (banner + social), see `src/storm-software/Video.tsx`.

### `Banner.tsx` / `Logo.tsx`

Follow an existing project for structure. `Banner.tsx` must export `ColoredBanner` and `MonochromeBanner` (or equivalent colored/mono pair). Use shared components from `src/components/` and types from `src/types/`.

---

## 2. Update `src/Video.tsx`

Add the new project to the Remotion preview tree in `packages/video-assets/src/Video.tsx`:

1. Import the project's `RemotionVideo` (aliased to avoid name clashes):

```tsx
import { RemotionVideo as MyProjectVideo } from "./{project-id}/Video";
```

2. Add a `<Folder>` entry inside `RemotionVideo`:

```tsx
<Folder name="{project-id}">
  <MyProjectVideo />
</Folder>
```

---

## 3. Add Nx build target (`project.json`)

In `packages/video-assets/project.json`, add a `build-{project-id}` target. Copy an existing target (e.g. `build-razorwind`) and replace the project name:

```json
"build-{project-id}": {
  "cache": true,
  "inputs": [
    "{projectRoot}/src/{project-id}",
    "{projectRoot}/src/components",
    "{projectRoot}/src/types",
    "{projectRoot}/src/utilities",
    "{projectRoot}/src/style.css",
    "{projectRoot}/scripts"
  ],
  "outputs": ["{projectRoot}/dist/optimized/{project-id}"],
  "executor": "nx:run-commands",
  "dependsOn": ["^build", "clean"],
  "options": {
    "command": "tsx scripts/build.ts {project-id}",
    "cwd": "{projectRoot}"
  }
}
```

Also add `"build-{project-id}"` to the `build` target's `dependsOn` array so the full package build includes the new project.

---

## 4. Update build script (`scripts/build.ts`)

Add the project id to `PROJECT_LIST`:

```ts
const PROJECT_LIST = [
  // ...existing projects
  "{project-id}"
] as const;
```

The build script bundles `src/{project-id}/index.ts` and renders all compositions to `dist/optimized/{project-id}/media/`.

---

## 5. Verify

Preview locally:

```bash
pnpm nx start video-assets
```

Build assets for the new project:

```bash
pnpm nx build-{project-id} video-assets
```

Build the full package:

```bash
pnpm nx build video-assets
```

## Additional resources

- For Remotion composition patterns, see [remotion-best-practices](../remotion-best-practices/SKILL.md)
- For banner/logo component APIs, read `src/components/BannerVideoAssets.tsx` and an existing project's `Banner.tsx`
