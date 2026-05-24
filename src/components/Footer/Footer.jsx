import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Footer Status Bar */}
      <footer className="hidden md:flex h-10 w-full px-8 items-center justify-between border-t border-outline-variant/20 bg-surface-container-lowest text-xs text-on-surface-variant font-code-data">
        <div className="flex gap-6">
          <span className="hover:text-primary transition-colors cursor-pointer">OBSIDIAN EPOCH 1.4.2</span>
          <span className="hover:text-primary transition-colors cursor-pointer">WORKSPACE SHARDS: 12</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary amber-pulse"></span>
          <span className="text-secondary uppercase tracking-widest text-[9px] font-bold">System Link Active</span>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-16 z-50 flex justify-around items-center px-4 pb-2 pt-2 bg-surface-container-lowest/90 backdrop-blur-md border-t border-white/10 rounded-t-xl shadow-[0_-4px_20px_rgba(221,183,255,0.05)]">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center w-16 h-12 transition-all ${
            isActive('/') 
              ? 'text-primary font-bold bg-primary/10 rounded-lg' 
              : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
          <span className="text-[9px] font-label-caps mt-0.5">Chat</span>
        </Link>

        <Link 
          to="/feed" 
          className={`flex flex-col items-center justify-center w-16 h-12 transition-all ${
            isActive('/feed') 
              ? 'text-primary font-bold bg-primary/10 rounded-lg' 
              : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">auto_stories</span>
          <span className="text-[9px] font-label-caps mt-0.5">Feed</span>
        </Link>

        <Link 
          to="/heroes" 
          className={`flex flex-col items-center justify-center w-16 h-12 transition-all ${
            isActive('/heroes') 
              ? 'text-primary font-bold bg-primary/10 rounded-lg' 
              : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">military_tech</span>
          <span className="text-[9px] font-label-caps mt-0.5">Heroes</span>
        </Link>

        <Link 
          to="/verification" 
          className={`flex flex-col items-center justify-center w-16 h-12 transition-all ${
            isActive('/verification') 
              ? 'text-primary font-bold bg-primary/10 rounded-lg' 
              : 'text-on-surface-variant'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">verified_user</span>
          <span className="text-[9px] font-label-caps mt-0.5">Portal</span>
        </Link>
      </nav>
    </>
  );
}
