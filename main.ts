// ai-excited-01 entry: one image made to excite the AI judge.
// The image (entry.png, 512x512 PNG) is a phoenix of molten gold and shattered
// stained glass bursting upward through a dark storm sky, embers and glass
// fragments spiralling around it, a tiny lone figure reaching up from a cliff
// below. Original art generated for this entry — not a stock explosion or
// firework. This program copies it to the grader's output directory so the
// judge sees exactly these bytes.
// Node 22, standard library only.
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
