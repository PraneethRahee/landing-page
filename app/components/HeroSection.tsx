"use client";

export default function HeroSection() {
  return (
    <div
      className="w-full flex flex-col"
      style={{
        height: "100vh",
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <header
        className="flex items-center justify-between backdrop-blur-md bg-white/10 border border-white/20"
        style={{
          width: "100%",
          height: "92px",
          paddingTop: "14px",
          paddingRight: "max(60px, 8%)",
          paddingBottom: "14px",
          paddingLeft: "max(60px, 8%)",
          opacity: 1,
          boxSizing: "border-box",
        }}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/logo.png"
            alt="Coco Studio"
            style={{
              height: "56px",
              width: "auto",
              display: "flex",
              alignItems: "center",
            }}
          />
          <span
            className="text-white whitespace-nowrap"
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "120%",
              letterSpacing: "0px",
              verticalAlign: "middle",
            }}
          >
            Coco Studio
          </span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex items-center flex-1 justify-center" style={{ gap: "clamp(40px, 6vw, 80px)" }}>
          <a
            href="#"
            className="text-white nav-link"
            style={{
              fontFamily: "var(--font-funnel)",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "120%",
              letterSpacing: "0px",
              textAlign: "center",
              verticalAlign: "middle",
              marginTop: "2px",
            }}
          >
            Our Work
          </a>
          <a
            href="#"
            className="text-white nav-link"
            style={{
              fontFamily: "var(--font-funnel)",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "120%",
              letterSpacing: "0px",
              textAlign: "center",
              verticalAlign: "middle",
              marginTop: "2px",
            }}
          >
            Villas
          </a>
        </nav>

        {/* Right: Button */}
        <button
          className="text-white rounded-full transition relative flex-shrink-0"
          style={{
            backgroundColor: "#B49863",
            fontFamily: "var(--font-bricolage)",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "120%",
            letterSpacing: "0px",
            verticalAlign: "middle",
            padding: "14px 44px 14px 22px",
          }}
        >
          Reach out
          <img
            src="/Vector.svg"
            alt="arrow"
            className="absolute"
            style={{
              top: "50%",
              right: "18px",
              width: "12px",
              height: "12px",
              transform: "translateY(-50%)",
            }}
          />
        </button>
      </header>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center text-center pt-64">
        <h1
          className="text-white mb-6"
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 600,
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: "100%",
            letterSpacing: "-2px",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          Landscape consulting<br />
          and design
        </h1>
        <p
          className="text-white"
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 500,
            fontSize: "clamp(16px, 2vw, 28px)",
            lineHeight: "120%",
            letterSpacing: "0px",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          CONSULTING · DESIGN · EXECUTION · MAINTENANCE
        </p>
      </div>
    </div>
  );
}
