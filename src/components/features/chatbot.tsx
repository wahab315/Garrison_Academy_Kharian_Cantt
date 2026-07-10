"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@/common/box";
import Button from "@/common/button";
import Typography from "@/common/typography";
import { CHAT_QA } from "@/data/chatbot";

type ChatLevel = keyof typeof CHAT_QA;
type Msg = { from: "bot" | "user"; text: string };

const GREETING =
  "Assalam-o-Alaikum! 👋 I'm the GAK Assistant. Pick a topic above and tap a question to get started.";

export default function Chatbot() {
  const [level, setLevel] = useState<ChatLevel>("general");
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: GREETING },
  ]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const replyTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  // The delayed bot reply must not fire after unmount.
  useEffect(() => {
    const timers = replyTimers.current;
    return () => timers.forEach(clearTimeout);
  }, []);

  const ask = (question: string, answer: string) => {
    setMessages((m) => [...m, { from: "user", text: question }]);
    const t = setTimeout(
      () => setMessages((m) => [...m, { from: "bot", text: answer }]),
      420,
    );
    replyTimers.current.push(t);
  };

  return (
    <Box className="chat">
      <Box className="chd">
        <Typography as="span" className="av" aria-hidden="true">
          ◎
        </Typography>
        <Box>
          <Typography as="span" className="chd__name">
            GAK Assistant
          </Typography>
          <Typography as="span" className="st">
            Online · pre-defined queries
          </Typography>
        </Box>
      </Box>

      <Box className="lvtabs" role="tablist" aria-label="Chat topics">
        {(Object.keys(CHAT_QA) as ChatLevel[]).map((key) => (
          <button
            type="button"
            key={key}
            role="tab"
            aria-selected={level === key}
            className={`lvtab ${level === key ? "active" : ""}`}
            onClick={() => setLevel(key)}
          >
            {CHAT_QA[key].label}
          </button>
        ))}
      </Box>

      <Box
        className="body"
        ref={bodyRef}
        role="log"
        aria-live="polite"
        aria-label="Conversation"
      >
        {messages.map((m, i) => (
          <Typography as="p" key={`${m.from}-${i}`} className={`bub ${m.from}`}>
            {m.text}
          </Typography>
        ))}
      </Box>

      <Box className="chips">
        {CHAT_QA[level].qa.map(([question, answer]) => (
          <Button
            key={question}
            classStyle="chip"
            onClick={() => ask(question, answer)}
          >
            {question}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
