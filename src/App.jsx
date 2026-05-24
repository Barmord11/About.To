import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { LeftSidebar, RightSidebar } from './components/Sidebar';
import ChatPage from './pages/ChatPage';
import FeedPage from './pages/FeedPage';
import HeroesPage from './pages/HeroesPage';
import VerificationPage from './pages/VerificationPage';

export default function App() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-background text-on-background">
      {/* Top Header bar */}
      <Navbar />

      {/* Main Workspace Frame */}
      <div className="flex-1 flex overflow-hidden w-full relative">
        {/* Left Nav Drawer */}
        <LeftSidebar />

        {/* Central Component Canvas */}
        <main className="flex-1 flex flex-col relative overflow-hidden bg-[#0a0b0e]">
          <Routes>
            <Route path="/" element={<ChatPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/heroes" element={<HeroesPage />} />
            <Route path="/verification" element={<VerificationPage />} />
          </Routes>
        </main>

        {/* Right Info Rail */}
        <RightSidebar />
      </div>

      {/* Bottom Status / Navigation bar */}
      <Footer />
    </div>
  );
}
