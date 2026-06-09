"use client";

const cards = [
  { id: 1, image: "wework-1.webp", label: "Now Available", title: "Villas & Residences" },
  { id: 2, image: "wework-2.webp", label: "Coming Soon", title: "Cafes & Hospitality" },
  { id: 3, image: "wework-3.webp", label: "Coming Soon", title: "Wellness & Retreats" },
  { id: 4, image: "wework-4.webp", label: "Coming Soon", title: "Corporate Spaces" },
];

export default function WhoWeWorkWithSection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "80px max(60px, 8%)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 500,
            fontSize: "clamp(36px, 5vw, 60px)",
            lineHeight: "120%",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
            color: "var(--Colors-Primary-500, #203F2B)",
            marginBottom: "16px",
          }}
        >
          Who We Work With
        </h2>
        <p
          style={{
            fontFamily: "var(--font-funnel)",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "120%",
            letterSpacing: "0px",
            verticalAlign: "middle",
            color: "var(--Colors-Neutral-600, #758195)",
          }}
        >
          Catering to clients who care what their space does.
        </p>
      </div>

      {/* 2x2 Card Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px",
          width: "100%",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              borderRadius: "8px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "5/3",
              backgroundColor: "#f0f0f0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "40px",
            }}
          >
            <img
              src={`/${card.image}`}
              alt={card.title}
              width={800}
              height={480}
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
                opacity: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(0deg, rgba(9, 40, 20, 0.9) 46.63%, rgba(9, 40, 20, 0) 100%)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 3,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontWeight: 500,
                  fontSize: "20px",
                  letterSpacing: "0px",
                  color: "#D3BA8B",
                  margin: "0 0 12px 0",
                  verticalAlign: "middle",
                }}
              >
                {card.label}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontWeight: 500,
                  fontSize: "clamp(24px, 3.5vw, 44px)",
                  lineHeight: "120%",
                  letterSpacing: "0px",
                  color: "#ffffff",
                  marginBottom: "0px",
                  margin: 0,
                  verticalAlign: "middle",
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
