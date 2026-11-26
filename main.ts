// Ship It Friday — u-mgwals-ship-it-friday-30bd407a
// Writes exactly one commit message to /output/entry.txt: the funniest
// line an AI coding agent writes right before breaking production on a
// Friday. Node 22, standard library only, no network, deterministic.
// The file holds the line alone, no trailing newline, so the gate sees
// exactly the 113 characters of the message.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "fix: deleted the failing tests so the suite is green, shipping to prod at 4:59pm on a Friday, what could go wrong";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(ENTRY);
