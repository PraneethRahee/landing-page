"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "FEATURE WALL",
    description: "A wall that stopped being a wall the moment the first plant went in.",
    image: "Container-1.webp",
  },
  {
    id: 2,
    title: "VILLA GARDEN",
    description: "An entrance that sets the tone before the door even comes into view.",
    image: "Container-2.webp",
  },
  {
    id: 3,
    title: "BREWERY INTERIOR",
    description: "A space that works harder than the menu.",
    image: "Container-3.webp",
  },
  {
    id: 4,
    title: "VILLA TERRACE",
    description: "A terrace that makes you want to sit down before you have even decided to.",
    image: "Container-4.webp",
  },
  {
    id: 5,
    title: "COMMUNITY GROUNDS",
    description: "Grounds that give a community something to come home to.",
    image: "Container-5.webp",
  },
  {
    id: 6,
    title: "WATER GARDEN",
    description: "A garden that makes you forget there was ever anything else here.",
    image: "Container-6.webp",
  },
  {
    id: 7,
    title: "TROPICAL VILLA",
    description: "A garden dense enough to make the rest of the world feel very far away.",
    image: "Container-7.webp",
  },
  {
    id: 8,
    title: "GARDEN WALK",
    description: "A walk that makes you realize you have nowhere else to be.",
    image: "Container-8.webp",
  },
];

export default function OurWorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[currentIndex];

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: currentIndex % 2 === 0 ? "#ffffff" : "#203F2B",
        padding: `80px max(60px, 8%)`,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        transition: "background-color 0.5s ease",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontFamily: "var(--font-bricolage)",
            fontWeight: 600,
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: "100%",
            letterSpacing: "-2px",
            textAlign: "center",
            verticalAlign: "middle",
            color: currentIndex % 2 === 0 ? "#000000" : "#ffffff",
            marginBottom: "16px",
            transition: "color 0.5s ease",
          }}
        >
          Our Work
        </h2>
        <p
          style={{
            fontFamily: "var(--font-funnel)",
            fontWeight: 400,
            fontSize: "clamp(16px, 2vw, 24px)",
            lineHeight: "120%",
            letterSpacing: "0px",
            color: currentIndex % 2 === 0 ? "var(--Colors-Neutral-600, #758195)" : "#E0E0E0",
            verticalAlign: "middle",
            transition: "color 0.5s ease",
          }}
        >
          Every space has a version of itself it has not yet become. We find it.
        </p>
      </div>

      {/* Carousel Container */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {/* Carousel with Arrows */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "clamp(20px, 3vw, 30px)" }}>
          {/* Left Arrow */}
          <button
            onClick={prevProject}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#D4AF87",
              border: "none",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C49A73")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#D4AF87")}
          >
            ‹
          </button>

          {/* Project Card */}
          <div
            style={{
              flex: 1,
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
          >
            {/* Left Content */}
            <div style={{ flex: "0 0 clamp(300px, 35vw, 500px)" }}>
              <p
                style={{
                  fontFamily: "var(--font-funnel)",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "120%",
                  letterSpacing: "0px",
                  verticalAlign: "middle",
                  color: currentIndex % 2 === 0 ? "#D4AF87" : "#FAF6F1",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  backgroundColor: currentIndex % 2 === 0 ? "#FAF6F1" : "#577B64",
                  padding: "8px 12px",
                  display: "inline-block",
                  borderRadius: "4px",
                  transition: "all 0.5s ease",
                }}
              >
                {project.title}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontWeight: 500,
                  fontSize: "38px",
                  lineHeight: "120%",
                  letterSpacing: "0px",
                  verticalAlign: "middle",
                  color: currentIndex % 2 === 0 ? "var(--Colors-Neutral-600, #758195)" : "#E0E0E0",
                  transition: "color 0.5s ease",
                  margin: 0,
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Right: Image */}
            <div style={{ flex: "1", aspectRatio: "16/10", overflow: "hidden", borderRadius: "8px" }}>
              <img
                src={`/${project.image}`}
                alt={project.title}
                width={960}
                height={600}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#D4AF87",
              border: "none",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C49A73")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#D4AF87")}
          >
            ›
          </button>
        </div>

        {/* Dot Indicators - Below the carousel, centered */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {projects.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "#D4AF87" : "rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
