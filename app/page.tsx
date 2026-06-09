"use client";

import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import ScrollAnimSection from "./components/ScrollAnimSection";

const OurWorkSection = dynamic(() => import("./components/OurWorkSection"), {
  ssr: true,
  loading: () => <div style={{ height: "100vh", backgroundColor: "#f5f5f5" }} />,
});

const WhatToExpectSection = dynamic(() => import("./components/WhatToExpectSection"), {
  ssr: true,
  loading: () => <div style={{ height: "85vh", backgroundColor: "#f5f5f5" }} />,
});

const WhoWeWorkWithSection = dynamic(() => import("./components/WhoWeWorkWithSection"), {
  ssr: true,
  loading: () => <div style={{ height: "85vh", backgroundColor: "#ffffff" }} />,
});

// ssr: false — uses GSAP ScrollTrigger (browser-only)
// const ScrollAnimSection = dynamic(() => import("./components/ScrollAnimSection"), {
//   ssr: false,
//   loading: () => <div style={{ height: "100vh",  backgroundColor: "#0D1F15" }} />,
// });

const TrustedBySection = dynamic(() => import("./components/TrustedBySection"), {
  ssr: true,
  loading: () => <div style={{ height: "250px", backgroundColor: "#f5f5f5" }} />,
});

const ContactFormSection = dynamic(() => import("./components/ContactFormSection"), {
  ssr: true,
  loading: () => <div style={{ height: "100vh", backgroundColor: "#f5f5f5" }} />,
});

const FooterSection = dynamic(() => import("./components/FooterSection"), {
  ssr: true,
  loading: () => <div style={{ height: "400px", backgroundColor: "#EFE5D4" }} />,
});

export default function Home() {
  return (
    // Block layout — flex-col breaks GSAP pin's spacer insertion
    <div style={{ width: "100%", display: "block" }}>
      <HeroSection />
      <OurWorkSection />
      {/* <WhatToExpectSection /> */}
      <ScrollAnimSection />
      <WhoWeWorkWithSection />
      {/* <ScrollAnimSection /> */}
      <TrustedBySection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
}
