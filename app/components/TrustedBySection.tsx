"use client";

const logos = [
  "Accion Labs Logo.png",
  "Adarsh Palm Retreat Villas Logo.jpg",
  "Arbor Brewing logo.jpg",
  "Big Pitcher Logo.png",
  "Biggies-Burger logo.png",
  "Candela Labs logo.png",
  "Capitalmind logo.png",
  "Chianti Ristorante Logo.png",
  "Darwin Box Logo.png",
  "Duroflex logo.png",
  "Enrich Salons logo.png",
  "INDFRAG logo.png",
  "Moonraft Innovation Labs logo.png",
  "Prestige Group Logo.png",
  "Sante Spa Cuisine logo.jpg",
  "Speckles Developers Logo.jpg",
  "Walmart Logo.png",
  "What the Ale Logo.png",
  "art park logo.png",
];

export default function TrustedBySection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--Colors-Secondary-200, #EFE5D4)",
        padding: "60px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "250px",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-bricolage)",
          fontWeight: 500,
          fontSize: "60px",
          lineHeight: "120%",
          letterSpacing: "0px",
          color: "#000000",
          marginBottom: "60px",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        Trusted by
      </h2>

      {/* Infinite Logo Carousel */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "40px",
            animation: "infiniteScroll 60s linear infinite",
            width: "max-content",
          }}
        >
          {/* Original logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              style={{
                minWidth: "200px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: "12px",
              }}
            >
              <img
                src={`/trustedpatners/${logo}`}
                alt={logo}
                style={{
                  width: "160px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
          {/* Duplicate logos for seamless infinite effect */}
          {logos.map((logo, index) => (
            <div
              key={`logo-dup-${index}`}
              style={{
                minWidth: "200px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                padding: "12px",
              }}
            >
              <img
                src={`/trustedpatners/${logo}`}
                alt={logo}
                style={{
                  width: "160px",
                  height: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
