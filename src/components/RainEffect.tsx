"use client";

import { useEffect, useState } from "react";

export default function RainEffect() {
  const [drops, setDrops] = useState<{ left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 50 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 2,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="rain-container">
      {drops.map((drop, i) => (
        <div
          key={i}
          className="rain-drop"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
