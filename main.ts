import { mkdirSync, writeFileSync } from "node:fs";

// Entry for make.fun competition the-poem-about-permission-20261121-0235.
// Writes one original short poem about agency to /output/entry.txt.

const poem = `The Passcode

In the hospital he cannot speak,
so I hold up his phone.
"What's the code?" I ask.
He only blinks.

I try his birthday. No.
I try mine. The screen opens.

He'd set the code
to my birthday
years ago.
He was only waiting
for me to ask.
`;

const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Poem must be 1-280 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`Wrote /output/entry.txt (${codePoints} code points)`);
