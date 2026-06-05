"use client";

const socials = [
  {
    name: "Instagram",
    href: "#",
    brandColor: "#E1306C",
    brandBg: "#E1306C",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    brandColor: "#1877F2",
    brandBg: "#1877F2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    brandColor: "#0A66C2",
    brandBg: "#0A66C2",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    brandColor: "#000000",
    brandBg: "#000000",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "var(--Colors-Secondary-200, #EFE5D4)",
        padding: "clamp(40px, 6%, 64px) max(40px, 6%) clamp(64px, 8%, 100px)",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top: Info card + Social grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* Left: Info card */}
          <div
            style={{
              border: "1px solid #D8C9AE",
              borderRadius: "8px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "40px",
              minHeight: "240px",
            }}
          >
            <div>
              {/* Logo + name */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <img
                  src="/logo.png"
                  alt="Coco Studio"
                  style={{ height: "40px", width: "auto" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-bricolage)",
                    fontWeight: 600,
                    fontSize: "20px",
                    color: "#203F2B",
                  }}
                >
                  Coco Studio
                </span>
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: "var(--font-funnel)",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "150%",
                  color: "#5C5C5C",
                  margin: 0,
                  maxWidth: "360px",
                }}
              >
                Working together to protect our planet and build a sustainable future.
              </p>
            </div>

            {/* Contact us button */}
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                alignSelf: "flex-start",
                backgroundColor: "#9C8458",
                color: "#ffffff",
                fontFamily: "var(--font-funnel)",
                fontWeight: 500,
                fontSize: "14px",
                padding: "12px 22px",
                borderRadius: "24px",
                textDecoration: "none",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#856F47")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#9C8458")}
            >
              Contact us
              <span style={{ fontSize: "14px" }}>↗</span>
            </a>
          </div>

          {/* Right: Social 2x2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: "24px",
            }}
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                style={{
                  border: "1px solid #D8C9AE",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9C8458",
                  textDecoration: "none",
                  minHeight: "100px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = social.brandColor;
                  e.currentTarget.style.backgroundColor = `${social.brandColor}15`;
                  e.currentTarget.style.borderColor = `${social.brandColor}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9C8458";
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "#D8C9AE";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: Large Coco Studio wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            marginTop: "clamp(20px, 4%, 40px)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 700,
              fontSize: "clamp(80px, 17vw, 220px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#203F2B",
              margin: 0,
              display: "block",
              transform: "translateY(20%)",
            }}
          >
            <span>Coc</span>
            <span
              style={{
                backgroundImage: "url('/insideO.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              o
            </span>
            <span> Studio</span>
          </h2>
        </div>
      </div>
    </footer>
  );
}
