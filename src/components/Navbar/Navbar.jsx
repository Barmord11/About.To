import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // Helper to determine active link styling
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full h-20 px-4 md:px-8 flex justify-between items-center border-b border-outline-variant/30 bg-surface-container-lowest/80 backdrop-blur-2xl">
      {/* Left side: Brand + Action */}
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
          <h1 className="font-display-hero text-2xl font-bold tracking-tight text-primary">About.To</h1>
        </Link>

        {/* Circular Action Button */}
        <button 
          className="w-10 h-10 rounded-full border border-tertiary/30 bg-surface-container-high flex items-center justify-center text-tertiary hover:bg-tertiary/10 hover:border-tertiary/60 transition-all active:scale-90" 
          title="Answer Instead"
        >
          <span className="material-symbols-outlined text-[20px]">edit_note</span>
        </button>
      </div>

      {/* Middle side: Navigation Links (Desktop) */}
      <nav className="hidden lg:flex items-center gap-8 font-label-caps text-xs tracking-wider">
        <Link 
          to="/" 
          className={`${isActive('/') ? 'text-primary' : 'text-on-surface-variant hover:text-primary-fixed-dim'} transition-colors`}
        >
          Chat
        </Link>
        <Link 
          to="/feed" 
          className={`${isActive('/feed') ? 'text-primary' : 'text-on-surface-variant hover:text-primary-fixed-dim'} transition-colors`}
        >
          Royal Feed
        </Link>
        <Link 
          to="/heroes" 
          className={`${isActive('/heroes') ? 'text-primary' : 'text-on-surface-variant hover:text-primary-fixed-dim'} transition-colors`}
        >
          Hall of Heroes
        </Link>
        <Link 
          to="/verification" 
          className={`${isActive('/verification') ? 'text-primary' : 'text-on-surface-variant hover:text-primary-fixed-dim'} transition-colors`}
        >
          Archival Portal
        </Link>
      </nav>

      {/* Right side: Progress Tracker + User Info */}
      <div className="flex items-center gap-6 md:gap-8">
        {/* Weekly Progress (Hidden on mobile) */}
        <div className="hidden md:flex flex-col gap-1 w-40">
          <div className="flex justify-between items-end">
            <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">Weekly Progress</span>
            <span className="font-code-data text-xs text-tertiary">78%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-tertiary w-[78%] heroic-glow rounded-full"></div>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="font-label-caps text-xs text-on-surface font-semibold">Sir Verifier</p>
            <p className="font-code-data text-[9px] text-tertiary tracking-wider font-bold">HIGH HERO RANK</p>
          </div>
          <div className="relative group cursor-pointer">
            <img 
              alt="Profile" 
              className="w-10 h-10 rounded-full border border-primary/20 object-cover group-hover:border-primary/50 transition-colors"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa17alI_6dQjfUx5RLdB-e3TXaai80CxX0ljAFpzdKkK7aefxj0SbEoWTD8dXwX05QS37qL2cxuTrCO6D4llB5-4UnyPcpDwSQaBa1TxrUpUQYdJtLzNseLrxyXiSzt0c0CQi5pr6AURk6bbWmtei2ufgcPFomgi_UpN_qAlfBoqvRP5f-hhcNw2Z3nrGFt5C5QrOIrpOJSgSs3amObzhswqlM7VAPpvQeC5ah_GPeWvGMJ_eUzCXmPKhNJUPt2O942D1BmBd6u7u-"
            />

            {/* Online Indicator */}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-surface-container-lowest amber-pulse"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
