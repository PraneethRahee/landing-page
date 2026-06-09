"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGE_CONFIGS = [
  // ── PHASE A  (Quote 1 — "We assess your space…") ─────────────────────
  {
    src: "/scroll-animation/1.webp",     // vertical garden building — top-left
    css: { left: "0%",  top: "2%",  width: "clamp(170px, 26vw, 500px)" },
    a: { y:   0, scale: 1,    opacity: 0.88 },
    b: { y: -90, scale: 0.95, opacity: 0    },
    c: { y: -90, scale: 0.95, opacity: 0    },
  },
  {
    src: "/scroll-animation/2.webp",     // Japanese zen garden — top-right
    css: { left: "68%", top: "1%",  width: "clamp(175px, 27vw, 510px)" },
    a: { y:   0, scale: 1,    opacity: 0.85 },
    b: { y: -80, scale: 1.03, opacity: 0    },
    c: { y: -80, scale: 1.03, opacity: 0    },
  },
  {
    src: "/scroll-animation/4.webp",     // rolling green fields — left-mid
    css: { left: "1%",  top: "47%", width: "clamp(155px, 22vw, 430px)" },
    a: { y:   0, scale: 0.97, opacity: 0.75 },
    b: { y: -80, scale: 0.92, opacity: 0    },
    c: { y: -80, scale: 0.92, opacity: 0    },
  },
  {
    src: "/scroll-animation/8.webp",     // pergola path — right-mid
    css: { left: "76%", top: "45%", width: "clamp(155px, 22vw, 430px)" },
    a: { y:   0, scale: 1,    opacity: 0.72 },
    b: { y: -70, scale: 0.94, opacity: 0    },
    c: { y: -70, scale: 0.94, opacity: 0    },
  },
  {
    src: "/scroll-animation/15.webp",    // mountain landscape — bottom-center
    css: { left: "33%", top: "68%", width: "clamp(165px, 25vw, 475px)" },
    a: { y:   0, scale: 0.96, opacity: 0.70 },
    b: { y: -75, scale: 0.92, opacity: 0    },
    c: { y: -75, scale: 0.92, opacity: 0    },
  },

  // ── PHASE B  (Quote 2 — "One point of contact…") ──────────────────────
  {
    src: "/scroll-animation/6.webp",     // snake plant interior — top-center-left
    css: { left: "24%", top: "4%",  width: "clamp(165px, 25vw, 475px)" },
    a: { y:  55, scale: 0.95, opacity: 0    },
    b: { y:   0, scale: 1,    opacity: 0.85 },
    c: { y: -80, scale: 0.95, opacity: 0    },
  },
  {
    src: "/scroll-animation/7.webp",     // potted-plants shelf — top-right
    css: { left: "70%", top: "3%",  width: "clamp(160px, 24vw, 460px)" },
    a: { y:  55, scale: 0.92, opacity: 0    },
    b: { y:   0, scale: 1,    opacity: 0.80 },
    c: { y: -75, scale: 0.92, opacity: 0    },
  },
  {
    src: "/scroll-animation/10.webp",    // timber home entrance — left-lower
    css: { left: "0%",  top: "56%", width: "clamp(165px, 25vw, 470px)" },
    a: { y:  55, scale: 0.90, opacity: 0    },
    b: { y:   0, scale: 1.02, opacity: 0.78 },
    c: { y: -80, scale: 0.92, opacity: 0    },
  },
  {
    src: "/scroll-animation/14.webp",    // soil scoop — right-mid
    css: { left: "77%", top: "40%", width: "clamp(150px, 22vw, 425px)" },
    a: { y:  55, scale: 0.95, opacity: 0    },
    b: { y:   0, scale: 1,    opacity: 0.82 },
    c: { y: -75, scale: 0.93, opacity: 0    },
  },
  {
    src: "/scroll-animation/3.webp",     // seedlings — bottom-center
    css: { left: "28%", top: "70%", width: "clamp(160px, 24vw, 460px)" },
    a: { y:  55, scale: 0.92, opacity: 0    },
    b: { y:   0, scale: 0.98, opacity: 0.72 },
    c: { y: -70, scale: 0.90, opacity: 0    },
  },

  // ── PHASE C  (Quote 3 — "When the work is done…") ────────────────────
  {
    src: "/scroll-animation/5.webp",     // Italian formal garden — top-left
    css: { left: "1%",  top: "4%",  width: "clamp(175px, 26vw, 500px)" },
    a: { y:  55, scale: 0.95, opacity: 0    },
    b: { y:  55, scale: 0.95, opacity: 0    },
    c: { y:   0, scale: 1,    opacity: 0.88 },
  },
  {
    src: "/scroll-animation/9.webp",     // luxury home at dusk — top-center
    css: { left: "35%", top: "3%",  width: "clamp(160px, 24vw, 460px)" },
    a: { y:  55, scale: 0.95, opacity: 0    },
    b: { y:  55, scale: 0.95, opacity: 0    },
    c: { y:   0, scale: 1,    opacity: 0.82 },
  },
  {
    src: "/scroll-animation/11.webp",    // landscaped front yard — top-right
    css: { left: "68%", top: "2%",  width: "clamp(165px, 25vw, 475px)" },
    a: { y:  55, scale: 0.92, opacity: 0    },
    b: { y:  55, scale: 0.92, opacity: 0    },
    c: { y:   0, scale: 1.02, opacity: 0.78 },
  },
  {
    src: "/scroll-animation/12.webp",    // white villa with pool — bottom-left
    css: { left: "2%",  top: "63%", width: "clamp(165px, 25vw, 475px)" },
    a: { y:  55, scale: 0.90, opacity: 0    },
    b: { y:  55, scale: 0.90, opacity: 0    },
    c: { y:   0, scale: 1,    opacity: 0.80 },
  },
  {
    src: "/scroll-animation/13.webp",    // luxury pool home — bottom-right
    css: { left: "67%", top: "65%", width: "clamp(165px, 25vw, 475px)" },
    a: { y:  55, scale: 0.90, opacity: 0    },
    b: { y:  55, scale: 0.90, opacity: 0    },
    c: { y:   0, scale: 0.98, opacity: 0.76 },
  },
];

const QUOTES = [
  `"We assess your space before we recommend anything — and we'll tell you what won't work before you've committed to it."`,
  `"One point of contact, and daily updates throughout. You always know where things stand."`,
  `"And when the work is done, we don't disappear. That's when the actual relationship begins."`,
];

export default function ScrollAnimSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const quoteRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      IMAGE_CONFIGS.forEach((cfg, i) => {
        gsap.set(imgRefs.current[i], cfg.a);
      });

      quoteRefs.current.forEach((el, i) => {
        gsap.set(el, {
          xPercent: -50,
          yPercent: -50,
          opacity: i === 0 ? 1 : 0,
          y:       i === 0 ? 0 : 52,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:             sectionRef.current,
          pin:                 true,
          pinSpacing:          true,
          start:               "top top",
          end:                 "+=250%",
          scrub:               1.5,
          anticipatePin:       1,
          invalidateOnRefresh: true,
        },
      });

      // ── Phase A → B ────────────────────────────────────────────────────
      // Text out
      tl.to(quoteRefs.current[0], { opacity: 0, y: -56, duration: 0.28, ease: "power2.in" }, 0.68);
      // Phase-A images (0–4) vanish like text — quick fade-up out
      for (let i = 0; i < 5; i++) {
        tl.to(imgRefs.current[i], { ...IMAGE_CONFIGS[i].b, duration: 0.28, ease: "power2.in" }, 0.68);
      }
      // Text in
      tl.to(quoteRefs.current[1], { opacity: 1, y: 0, duration: 0.34, ease: "power2.out" }, 1.02);
      // Phase-B images (5–9) rise in after text arrives
      for (let i = 5; i < 10; i++) {
        tl.to(imgRefs.current[i], { ...IMAGE_CONFIGS[i].b, duration: 0.38, ease: "power2.out" }, 1.02);
      }

      // ── Phase B → C ────────────────────────────────────────────────────
      // Text out
      tl.to(quoteRefs.current[1], { opacity: 0, y: -56, duration: 0.28, ease: "power2.in" }, 1.76);
      // Phase-B images (5–9) vanish like text
      for (let i = 5; i < 10; i++) {
        tl.to(imgRefs.current[i], { ...IMAGE_CONFIGS[i].c, duration: 0.28, ease: "power2.in" }, 1.76);
      }
      // Text in
      tl.to(quoteRefs.current[2], { opacity: 1, y: 0, duration: 0.34, ease: "power2.out" }, 2.10);
      // Phase-C images (10–14) rise in after text arrives
      for (let i = 10; i < 15; i++) {
        tl.to(imgRefs.current[i], { ...IMAGE_CONFIGS[i].c, duration: 0.38, ease: "power2.out" }, 2.10);
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "var(--Colors-Primary-500, #203F2B)",
      }}
    >
      {(["top", "bottom"] as const).map((edge) => (
        <div
          key={edge}
          aria-hidden="true"
          style={{
            position: "absolute",
            [edge]: 0, left: 0, right: 0,
            height: "120px",
            background: `linear-gradient(to ${edge === "top" ? "bottom" : "top"}, #203F2B, transparent)`,
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      ))}

      {IMAGE_CONFIGS.map((cfg, i) => (
        <div
          key={i}
          ref={(el) => { imgRefs.current[i] = el; }}
          style={{
            position: "absolute",
            ...cfg.css,
            zIndex: 2,
            willChange: "transform, opacity",
          }}
        >
          <img
            src={cfg.src}
            alt=""
            width={800}
            height={600}
            loading="lazy"
            style={{
              width: "100%",
              aspectRatio: "4/3",
              objectFit: "cover",
              display: "block",
              borderRadius: "8px",
              filter: "brightness(0.70) saturate(0.82)",
            }}
          />
        </div>
      ))}

      {QUOTES.map((q, i) => (
        <div
          key={i}
          ref={(el) => { quoteRefs.current[i] = el; }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "min(780px, 72vw)",
            textAlign: "center",
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "clamp(22px, 3.4vw, 48px)",
              lineHeight: "100%",
              letterSpacing: "-2px",
              color: "#F0EAD6",
              margin: 0,
              textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 0 40px rgba(32,63,43,0.9)",
            }}
          >
            {q}
          </p>
        </div>
      ))}
    </section>
  );
}
