"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactFormSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    otherProjectType: "",
    location: "",
    message: "",
  });

  const projectTypes = [
    "Villas & Residences",
    "Villas & Apartment Communities",
    "Resorts & Hospitality",
    "Cafes & Brewery",
    "Corporate Offices & Spaces",
    "Public Spaces & Parks",
    "Others",
  ];

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form handling logic here
  };

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "clamp(40px, 8%, 80px) max(40px, 6%)",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr minmax(300px, 0.8fr)",
          gap: "clamp(24px, 4%, 40px)",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          height: "100%",
        }}
      >
        {/* Left: Form */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(24px, 3%, 40px)",
            justifyContent: "flex-start",
          }}
        >
          <div>
            <div
              className="text-changer"
              style={{
                fontFamily: "var(--font-bricolage)",
                fontWeight: 500,
                fontSize: "clamp(40px, 5.5vw, 56px)",
                lineHeight: "1.2",
                letterSpacing: "0px",
                color: "#000000",
                margin: "0 0 32px 0",
                display: "flex",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                whiteSpace: "nowrap",
              }}
            >
              <p className="intro-text" style={{ margin: 0 }}>
                Tell us about your
              </p>
              <div className="roles-container">
                <span className="role">idea.</span>
                <span className="role">vision.</span>
                <span className="role">thought.</span>
                <span className="role">idea.</span>
              </div>
            </div>
            <style>{`
              .roles-container {
                overflow: hidden;
                position: relative;
                height: 1.2em;
              }

              .role {
                display: block;
                height: 1.2em;
                line-height: 1.2em;
                padding-left: 12px;
                color: #D3BA8B;
                animation: role-change 12s infinite;
              }

              @keyframes role-change {
                0%, 22%   { transform: translateY(0); }
                33%, 55%  { transform: translateY(-100%); }
                66%, 88%  { transform: translateY(-200%); }
                100%      { transform: translateY(-300%); }
              }
            `}</style>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Your Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "12px 16px",
                border: "1px solid #E0E0E0",
                borderRadius: "6px",
                fontFamily: "var(--font-funnel)",
                fontSize: "14px",
                fontWeight: 400,
                color: "#666666",
                outline: "none",
                transition: "border-color 0.3s ease",
                height: "48px",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#D3BA8B")}
              onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
            />

            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                padding: "12px 16px",
                border: "1px solid #E0E0E0",
                borderRadius: "6px",
                fontFamily: "var(--font-funnel)",
                fontSize: "14px",
                fontWeight: 400,
                color: "#666666",
                outline: "none",
                transition: "border-color 0.3s ease",
                height: "48px",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#D3BA8B")}
              onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
            />

            {/* Project Type and Location */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {/* Project Type */}
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                style={{
                  padding: "12px 16px",
                  border: "1px solid #E0E0E0",
                  borderRadius: "6px",
                  fontFamily: "var(--font-funnel)",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#666666",
                  outline: "none",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  transition: "border-color 0.3s ease",
                  height: "48px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#D3BA8B")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#E0E0E0")}
                required
              >
                <option value="" disabled>
                  Project Type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {/* Location */}
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                style={{
                  padding: "12px 16px",
                  border: "1px solid #E0E0E0",
                  borderRadius: "6px",
                  fontFamily: "var(--font-funnel)",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#666666",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                  height: "48px",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#D3BA8B")}
                onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
              />
            </div>

            {/* Other Project Type - shown only when "Others" is selected */}
            {formData.projectType === "Others" && (
              <input
                type="text"
                name="otherProjectType"
                placeholder="Please specify your project type"
                value={formData.otherProjectType}
                onChange={handleChange}
                required
                style={{
                  padding: "12px 16px",
                  border: "1px solid #E0E0E0",
                  borderRadius: "6px",
                  fontFamily: "var(--font-funnel)",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#666666",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                  height: "48px",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#D3BA8B")}
                onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
              />
            )}

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                padding: "12px 16px",
                border: "1px solid #E0E0E0",
                borderRadius: "6px",
                fontFamily: "var(--font-funnel)",
                fontSize: "14px",
                fontWeight: 400,
                color: "#666666",
                outline: "none",
                transition: "border-color 0.3s ease",
                resize: "vertical",
                minHeight: "140px",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#D3BA8B")}
              onBlur={(e) => (e.target.style.borderColor = "#E0E0E0")}
            />

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                padding: "14px 32px",
                backgroundColor: "#D3BA8B",
                color: "#ffffff",
                border: "none",
                borderRadius: "24px",
                fontFamily: "var(--font-bricolage)",
                fontSize: "16px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
                alignSelf: "flex-start",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C49A73")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#D3BA8B")}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Video */}
        <div
          style={{
            position: "relative",
            borderRadius: "6px",
            overflow: "hidden",
            width: "100%",
            aspectRatio: "621 / 670",
            backgroundColor: "#000000",
            margin: "0 auto",
          }}
        >
          <video
            ref={videoRef}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            src="/ContactUs.mp4"
            muted
            playsInline
          />

          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            style={{
              position: "absolute",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              color: "#ffffff",
              fontFamily: "var(--font-funnel)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            }}
          >
            <span style={{ fontSize: "12px" }}>{isPlaying ? "❚❚" : "▶"}</span>
            <span>{isPlaying ? "PAUSE VIDEO" : "PLAY VIDEO 3:14"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
