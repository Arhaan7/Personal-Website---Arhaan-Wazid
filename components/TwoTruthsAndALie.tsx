'use client';

import { useState } from "react";

const facts = [
  { text: "I was born outside of Canada.", truth: true, emoji: "🌍" },
  { text: "I have had knee surgery before.", truth: true, emoji: "🏥" },
  { text: "I can speak 4 languages.", truth: false, emoji: "🗣️" },
];

export default function TwoTruthsAndALie() {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const reset = () => {
    setSelected(null);
    setRevealed(false);
  };

  return (
    <section className="my-8 p-8 md:p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-xl mx-auto border-2 border-gray-100 dark:border-gray-700 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10" style={{ background: 'var(--heritage-saffron)' }} />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-10" style={{ background: 'var(--heritage-green)' }} />

      <div className="relative z-10">
        <div className="text-center mb-6">
          <span className="text-5xl mb-3 block">🤔</span>
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            2 Truths and a Lie
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Think you know me? Pick the statement you think is the <span className="font-bold text-red-500">lie</span>!
          </p>
        </div>

        <ul className="space-y-4 mb-6">
          {facts.map((fact, idx) => {
            let cardStyle = 'bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500';
            
            if (selected === idx && !revealed) {
              cardStyle = 'bg-blue-50 dark:bg-blue-900/40 border-2 border-blue-400 dark:border-blue-500 shadow-md';
            }
            
            if (revealed) {
              if (!fact.truth) {
                // This is the lie
                cardStyle = 'bg-red-50 dark:bg-red-900/30 border-2 border-red-400 dark:border-red-500';
              } else {
                cardStyle = 'bg-green-50 dark:bg-green-900/30 border-2 border-green-400 dark:border-green-500';
              }
            }

            return (
              <li key={idx}>
                <button
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${cardStyle} ${revealed ? 'cursor-default' : 'cursor-pointer'}`}
                  onClick={() => !revealed && setSelected(idx)}
                  disabled={revealed}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl flex-shrink-0">{fact.emoji}</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-lg">
                      {fact.text}
                    </span>
                    {revealed && (
                      <span className="ml-auto text-xl flex-shrink-0">
                        {fact.truth ? '✅' : '❌'}
                      </span>
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center gap-4">
          {!revealed ? (
            <button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:transform-none disabled:hover:shadow-lg"
              onClick={() => setRevealed(true)}
              disabled={selected === null}
            >
              🎯 Reveal Answer
            </button>
          ) : (
            <button
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={reset}
            >
              🔄 Play Again
            </button>
          )}
        </div>

        {revealed && selected !== null && (
          <div className={`mt-6 p-5 rounded-xl text-center text-lg font-bold ${
            !facts[selected].truth
              ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
              : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
          }`}>
            {!facts[selected].truth
              ? "🎉 Correct! That's the lie — I speak 3 languages, not 4!"
              : "😅 Nope, that's actually true! The lie is about speaking 4 languages."}
          </div>
        )}
      </div>
    </section>
  );
}