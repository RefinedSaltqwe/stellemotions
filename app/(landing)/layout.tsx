import React from "react";
import Navbar from "./_common/navbar";
import Menu from "./_common/menu";

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <main className="h-screen bg-background text-foreground">
      <Navbar />
      <section className="flex-1 overflow-y-auto">{children}</section>
      <Menu />
    </main>
  );
};
export default LandingLayout;
