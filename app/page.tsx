"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSection from "./components/HeroSection";

// Lazy load components below the fold
const OurWorkSection = dynamic(() => import("./components/OurWorkSection"), {
  loading: () => <div style={{ height: "100vh", backgroundColor: "#f5f5f5" }} />,
  ssr: true,
});

const WhatToExpectSection = dynamic(() => import("./components/WhatToExpectSection"), {
  loading: () => <div style={{ height: "85vh", backgroundColor: "#f5f5f5" }} />,
  ssr: true,
});

const WhoWeWorkWithSection = dynamic(() => import("./components/WhoWeWorkWithSection"), {
  loading: () => <div style={{ height: "85vh", backgroundColor: "#f5f5f5" }} />,
  ssr: true,
});

const TrustedBySection = dynamic(() => import("./components/TrustedBySection"), {
  loading: () => <div style={{ height: "250px", backgroundColor: "#f5f5f5" }} />,
  ssr: true,
});

const ContactFormSection = dynamic(() => import("./components/ContactFormSection"), {
  loading: () => <div style={{ height: "100vh", backgroundColor: "#f5f5f5" }} />,
  ssr: true,
});

const FooterSection = dynamic(() => import("./components/FooterSection"), {
  loading: () => <div style={{ height: "400px", backgroundColor: "#EFE5D4" }} />,
  ssr: true,
});

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section - Loads immediately */}
      <HeroSection />

      {/* Other sections - Lazy loaded */}
      <Suspense fallback={<div style={{ height: "100vh", backgroundColor: "#f5f5f5" }} />}>
        <OurWorkSection />
      </Suspense>

      <Suspense fallback={<div style={{ height: "85vh", backgroundColor: "#f5f5f5" }} />}>
        <WhatToExpectSection />
      </Suspense>

      <Suspense fallback={<div style={{ height: "85vh", backgroundColor: "#f5f5f5" }} />}>
        <WhoWeWorkWithSection />
      </Suspense>

      <Suspense fallback={<div style={{ height: "250px", backgroundColor: "#f5f5f5" }} />}>
        <TrustedBySection />
      </Suspense>

      <Suspense fallback={<div style={{ height: "100vh", backgroundColor: "#f5f5f5" }} />}>
        <ContactFormSection />
      </Suspense>

      <Suspense fallback={<div style={{ height: "400px", backgroundColor: "#EFE5D4" }} />}>
        <FooterSection />
      </Suspense>
    </div>
  );
}
