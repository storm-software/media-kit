import assert from "node:assert/strict";
import type React from "react";
import { Logo } from "./Logo";

const thinLogo = Logo({ size: "thin" }) as React.ReactElement<{
  className: string;
}>;
const normalLogo = Logo({}) as React.ReactElement<{ className: string }>;

assert.match(thinLogo.props.className, /(^| )w-auto( |$)/);
assert.match(normalLogo.props.className, /(^| )w-auto( |$)/);
