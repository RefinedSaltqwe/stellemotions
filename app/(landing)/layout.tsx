import React from "react";
import Menu from "./_common/menu";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <main className="h-screen bg-background text-foreground">
      <Navbar />
      <section className="flex-1 overflow-y-auto">{children}</section>
      <Footer />
      <Menu />
      <Script
        src="https://syntra-agent.vercel.app/embed/embed.min.js"
        data-workflow-id="6a48a4d3f013d9328c898d57"
        data-theme="#201914"
        data-title="Stelle AI"
        data-welcome="Hi! How can we help you?"
        // data-logo="https://example.com/logo.png"
        // data-avatar="https://example.com/avatar.png"
        strategy="afterInteractive"
      />
    </main>
  );
};
export default LandingLayout;
