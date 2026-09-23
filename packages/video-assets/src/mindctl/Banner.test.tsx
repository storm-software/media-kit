import assert from "node:assert/strict";
import type React from "react";
import { Banner } from "./Banner";

function getWordmarkClassName(size: "thin" | "normal" | "large") {
  const banner = Banner({ size }) as React.ReactElement<{
    children: React.ReactElement<{
      children: [unknown, React.ReactElement<{ className: string }>];
    }>;
  }>;

  return banner.props.children.props.children[1].props.className;
}

assert.match(getWordmarkClassName("thin"), /(^| )text-\[100px\]( |$)/);
assert.match(getWordmarkClassName("normal"), /(^| )text-\[140px\]( |$)/);
assert.match(getWordmarkClassName("large"), /(^| )text-\[180px\]( |$)/);
