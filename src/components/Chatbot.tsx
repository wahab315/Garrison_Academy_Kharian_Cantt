"use client";

import { useEffect, useRef, useState } from "react";
import { CHAT_QA } from "@/data/data";

type Msg = { from: "bot" | "user"; text: string };

export default function Chatbot() {
  const [level, setLevel] = useState<keyof typeof CHAT_QA>("general");
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Assalam-o-Alaikum! 👋 I'm the GAK Assistant. Pick a topic above and tap a question to get started." },
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  const ask = (q: string, a: string) => {
    setMessages((m) => [...m, { from: "user", text: q }]);
    setTimeout(() => setMessages((m) => [...m, { from: "bot", text: a }]), 420);
  };

  return (
    <>
      <div className="chat">
        <div className="chd">
          <div className="av">◎</div>
          <div>
            <div className="nm">GAK Assistant</div>
            <div className="st">Online · pre-defined queries</div>
          </div>
        </div>

        <div className="lvtabs">
          {(Object.keys(CHAT_QA) as (keyof typeof CHAT_QA)[]).map((k) => (
            <button
              key={k}
              className={`lvtab ${level === k ? "active" : ""}`}
              onClick={() => setLevel(k)}
            >
              {CHAT_QA[k].label}
            </button>
          ))}
        </div>

        <div className="body" ref={bodyRef}>
          {messages.map((m, i) => (
            <div key={i} className={`bub ${m.from}`}>
              {m.text}
            </div>
          ))}
        </div>

        <div className="chips">
          {CHAT_QA[level].qa.map(([q, a]) => (
            <button key={q} className="chip" onClick={() => ask(q, a)}>
              {q}
            </button>
          ))}
        </div>
      </div>
      <div className="note-box mt2" style={{ maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
        💬 The production chatbot ships with a <b>level-wise library of ~1,000 pre-defined queries</b> across sections; this prototype demonstrates the interaction.
      </div>
    </>
  );
}
