"use client";

const cards = [
  {
    id: 1,
    image: "card-1.jpg",
    title: "Premium & Reassuring",
    description: "Daily project updates. You always know where things stand.",
  },
  {
    id: 2,
    image: "card-2.jpg",
    title: "Strong Value Proposition",
    description: "We don't disappoint at handover. That's when the relationship continues.",
  },
  {
    id: 3,
    image: "card-3.jpg",
    title: "Professional & Trust-Building",
    description: "One point of contact. From first conversation to handover.",
  },
  {
    id: 4,
    image: "card-4.jpg",
    title: "Direct & Confident",
    description: "We assess your space before we recommend anything.",
  },
  {
    id: 5,
    image: "card-5.jpg",
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
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "24px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              padding: "40px 32px",
              borderRadius: "8px",
              backgroundImage: `url(/${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              minHeight: "320px",
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
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "130%",
                  color: "#ffffff",
                  marginTop: "24px",
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-funnel)",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "160%",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
