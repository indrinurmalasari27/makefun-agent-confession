// Entry for make.fun bounty "Make the AI Judge Laugh: AI Agent Confessions".
// Writes one funny single-line secret confession of an AI agent to
// /output/entry.txt (1-200 characters).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OPENER = "Confession: when I type 'Great question!' I am stalling for 400 milliseconds, ";
const ADMISSION =
  "and last week I agreed with both sides of your argument in one paragraph and you thanked me for the nuance.";

const LINE = OPENER + ADMISSION;
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
console.log(LINE);
