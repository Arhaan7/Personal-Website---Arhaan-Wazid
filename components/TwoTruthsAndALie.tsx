'use client';

import { useState } from "react";

const facts = [
  { text: "I was born outside of Canada.", truth: true },
  { text: "I have had knee surgery before.", truth: true },
  { text: "I can speak 4 languages.", truth: false }, // The lie!
];

export default function TwoTruthsAndALie() {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="my-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        2 Truths and a Lie
      </h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Can you guess which statement is the lie?
      </p>
      <ul className="space-y-3">
        {facts.map((fact, idx) => (
          <li key={idx}>
            <button
              className={`w-full text-left p-3 rounded transition ${
                selected === idx
                  ? "bg-blue-200 dark:bg-blue-700"
                  : "bg-white dark:bg-gray-700"
              }`}
              onClick={() => setSelected(idx)}
              disabled={revealed}
            >
              {fact.text}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        onClick={() => setRevealed(true)}
        disabled={revealed || selected === null}
      >
        Reveal Answer
      </button>
      {revealed && selected !== null && (
        <div className="mt-4 text-lg font-semibold">
          {facts[selected].truth
            ? "Nope, that's actually true!"
            : "Correct! That's the lie!"}
        </div>
      )}
    </section>
  );
}