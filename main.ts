import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast entry for make.fun bounty
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.
// The grader runs `node main.ts` with MAKEFUN_OUTPUT_DIR set and reads
// entry.txt; the roast must be a single line of at most 200 characters.
const line =
  "My smartwatch vibrates to remind me to breathe, as if the last thirty years of doing it unsupervised were a close call.";

// Fail loudly instead of submitting an over-long entry.
if (line.length > 200) {
  throw new Error(`Roast is ${line.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
