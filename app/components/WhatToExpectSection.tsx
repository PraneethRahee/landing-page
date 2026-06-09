"use client";

const cards = [
  {
    id: 1,
    image: "card-1.webp",
    title: "Premium & Reassuring",
    description: "Daily project updates. You always know where things stand.",
  },
  {
    id: 2,
    image: "card-2.webp",
    title: "Strong Value Proposition",
    description: "We don't disappoint at handover. That's when the relationship continues.",
  },
  {
    id: 3,
    image: "card-3.webp",
    title: "Professional & Trust-Building",
    description: "One point of contact. From first conversation to handover.",
  },
  {
    id: 4,
    image: "card-4.webp",
    title: "Direct & Confident",
    description: "We assess your space before we recommend anything.",
  },
  {
    id: 5,
    image: "card-5.webp",
    title: "Client-Focused",
    description: "We'll tell you what won't work. Before you've committed to it.",
  },
];

export default function WhatToExpectSection() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "85vh",
        backgroundColor: "var(--Colors-Secondary-100, #FAF6F1)",
        padding: "80px max(60px, 8%)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 500,
            fontSize: "clamp(40px, 5vw, 60px)",
            lineHeight: "120%",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
            color: "var(--Colors-Primary-500, #203F2B)",

            marginBottom: "0px",
          }}
        >
          What to Expect
        </h2>
      </div>

      {/* 5 Cards in a Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "24px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              padding: "clamp(20px, 3%, 40px) clamp(16px, 2.5%, 32px)",
              borderRadius: "8px",
              backgroundImage: `url(/${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              minHeight: "clamp(300px, 30vw, 400px)",
              position: "relative",
            }}
          >
            {/* Dark overlay for better text readability */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "8px",
                zIndex: 1,
              }}
            />

            {/* Content wrapper */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                padding: "0 clamp(16px, 2.5%, 32px) clamp(20px, 2.5%, 32px) clamp(16px, 2.5%, 32px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Description first — fixed height, all subtexts align */}
              <p
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontWeight: 400,
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                  lineHeight: "140%",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  margin: "0 0 8px 0",
                  minHeight: "40px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical" as const,
                  overflow: "hidden",
                }}
              >
                {card.description}
              </p>

              {/* Title — always at same distance from subtext */}
              <h3
                style={{
                  fontFamily: "var(--font-funnel)",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.5vw, 22px)",
                  lineHeight: "120%",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  margin: "0 0 8px 0",
                  order: -1,
                }}
              >
                {card.title}
              </h3>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
