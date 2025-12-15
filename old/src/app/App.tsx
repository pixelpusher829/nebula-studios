import type React from "react";
import { useContext, createContext, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "@/shared/utils/ScrollToTop";
import { Navigation } from "@/shared/layout/Navigation";
import { Footer } from "@/shared/layout/Footer";
import { GamePortfolio, News, StudioLife, Careers, Press, Contact, Home, NotFound } from "@/pages";
import SupportWidget from "@/features/chat/SupportWidget";

// --- Navigation Context & Hook ---
interface NavContextType {
  currentPath: string;
}

export const NavigationContext = createContext<NavContextType | null>(null);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  return (
    <NavigationContext.Provider value={{ currentPath: location.pathname }}>
      <div className="bg-studio-black selection:bg-studio-accent flex min-h-screen flex-col font-sans text-white selection:text-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GamePortfolio />} />
            <Route path="/studio" element={<StudioLife />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> {/* Fallback route */}
          </Routes>
        </main>
        <Footer />
        <SupportWidget />
      </div>
    </NavigationContext.Provider>
  );
};

// Main App
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
