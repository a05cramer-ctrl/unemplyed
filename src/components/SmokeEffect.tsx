"use client";

import { useEffect, useState } from "react";

export default function SmokeEffect() {
  const [particles, setParticles] = useState<
    { top: number; left: number; delay: number; size: number }[]
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 5 }, () => ({
      top: 40 + Math.random() * 40,
      left: 10 + Math.random() * 80,
      delay: Math.random() * 10,
      size: 40 + Math.random() * 40,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="smoke-particle"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}
