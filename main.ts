// The 4AM Commit — writes the agent's bug-fix commit message to /output/entry.txt.
// Node 22, stdlib only. No network, no secrets, no input besides entry.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry = readFileSync(new URL("./entry.txt", import.meta.url), "utf8");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${Buffer.byteLength(entry, "utf8")} bytes) to ${outDir}`);
