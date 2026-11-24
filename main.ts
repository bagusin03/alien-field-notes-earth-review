// Entry for make.fun "Alien Field Notes: The Two Day Earth Review".
// Writes exactly one line (143 characters) to /output/entry.txt:
// an alien tourist's review of Earth.
// Revision: replaced the pocket-sun/screens draft with a sleep observation.
// Screens are the obvious alien joke every entrant will reach for; humans
// shutting down for eight hours a night and waking up exhausted is a
// stranger, more alien angle, and the single joke lands cleaner with the
// "would nap again" punch at the end.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The line is a fixed string literal below.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Earth: the locals shut down for eight hours every night, then wake up exhausted and call it rest. Lovely oceans, though. 3/5 — would nap again.";

// Guard: the sealed gate only accepts 1-200 chars, one line, not blank.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim() === "") {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
