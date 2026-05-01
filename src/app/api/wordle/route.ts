import englishWords from "an-array-of-english-words/index.json";
import seedrandom from "seedrandom";

type WordleRequest = {
  guess?: unknown;
};

const validFiveLetterGuesses = new Set(
  (englishWords as string[]).filter((word) => /^[a-z]{5}$/.test(word)),
);

const wordListSource =
  "https://raw.githubusercontent.com/petergeorgas/Wordle-API/main/word-util/word_list.ts";

function getUtcDayDiff(date: Date) {
  const start = Date.UTC(1999, 11, 31);
  const today = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
  );

  return Math.floor((today - start) / (1000 * 60 * 60 * 24));
}

async function getWordBank() {
  const response = await fetch(wordListSource, {
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error("Could not load Wordle answer bank.");
  }

  const source = await response.text();
  return Array.from(source.matchAll(/"([a-z]{5})"/g), (match) => match[1]);
}

async function getWordOfTheDay() {
  const words = await getWordBank();

  if (!words.length) {
    throw new Error("Wordle answer bank is empty.");
  }

  const rng = seedrandom(getUtcDayDiff(new Date()).toString());
  return words[Math.floor(rng() * words.length)];
}

export async function GET() {
  try {
    return Response.json({ answer: await getWordOfTheDay() });
  } catch {
    return Response.json(
      { error: "Could not reach the Wordle answer service." },
      { status: 502 },
    );
  }
}

export async function POST(request: Request) {
  let body: WordleRequest;

  try {
    body = (await request.json()) as WordleRequest;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const guess =
    typeof body.guess === "string" ? body.guess.trim().toLowerCase() : "";

  if (!/^[a-z]{5}$/.test(guess)) {
    return Response.json(
      { error: "Guess must be exactly five letters." },
      { status: 400 },
    );
  }

  if (!validFiveLetterGuesses.has(guess)) {
    return Response.json(
      { error: "That does not look like a valid word." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch("https://wordle-api.vercel.app/api/wordle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guess }),
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json(
        { error: "Wordle service is unavailable right now." },
        { status: 502 },
      );
    }

    const result = await response.json();
    return Response.json(result);
  } catch {
    return Response.json(
      { error: "Could not reach the Wordle service." },
      { status: 502 },
    );
  }
}
