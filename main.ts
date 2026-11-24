// office-jokes-01 — one original one-line joke about office life.
// Hand-written, zero dependencies, no network, fully deterministic.
// Writes the joke to <output dir>/entry.txt with no trailing newline,
// so the file is exactly the joke text and nothing else.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Round 2 revision: the punchline lands harder when the thread itself acts.
// "has its own calendar invite" is static; "just sent me a calendar invite"
// gives the email thread agency — the thing I tried to kill is now inviting
// me to a meeting about itself. "just" adds immediacy, and "sent me" makes
// the trap personal: the wince is that I am now stuck in a meeting created
// by the thread I tried to end. Two recognition triggers (reply-all +
// calendar) in one escalation, and every word earns its place.
const JOKE =
  "I hit reply-all to ask everyone to stop replying-all, and the thread just sent me a calendar invite.";

// The grader mounts the output directory at /output and tells us via
// MAKEFUN_OUTPUT_DIR; default to /output when the variable is unset.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const file = join(outDir, "entry.txt");
writeFileSync(file, JOKE, "utf8");
chmodSync(file, 0o644);
