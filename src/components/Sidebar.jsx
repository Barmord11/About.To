import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function LeftSidebar() {
  const location = useLocation();

  const menuItems = [
    { name: 'Active Chat', path: '/', icon: 'chat_bubble' },
    { name: 'Grand Library (Feed)', path: '/feed', icon: 'auto_awesome' },
    { name: 'Hall of Heroes', path: '/heroes', icon: 'military_tech' },
    { name: 'Archival Portal', path: '/verification', icon: 'verified_user' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-[260px] min-w-[260px] h-[calc(100vh-80px)] bg-surface-container-low border-r border-white/5 py-8 gap-4 select-none">
      <div className="px-6 mb-4">
        <p className="font-label-caps text-[10px] tracking-wider text-on-surface-variant/50 uppercase">Knowledge Base</p>
      </div>

      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-3.5 flex items-center gap-4 transition-all duration-150 ${
                active
                  ? 'text-secondary font-bold bg-secondary-container/10 border-l-4 border-secondary'
                  : 'text-on-surface-variant hover:bg-white/5 hover:text-secondary'
              }`}
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              <span className="font-body-md text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Minor decor item at bottom of Left Drawer */}
      <div className="mt-auto px-6 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3 opacity-60">
          <span className="material-symbols-outlined text-sm text-tertiary">vpn_key</span>
          <span className="font-code-data text-[10px] text-on-surface-variant">SECURE CHANNEL</span>
        </div>
      </div>
    </aside>
  );
}

export function RightSidebar() {
  return (
    <aside className="hidden xl:flex flex-col w-[300px] min-w-[300px] h-[calc(100vh-80px)] bg-surface-container-low border-l border-white/5 p-6 gap-6 select-none overflow-y-auto">
      {/* Current Quest */}
      <div>
        <h3 className="font-label-caps text-[11px] tracking-widest text-on-surface-variant/60 uppercase mb-3 flex items-center gap-1.5">
          <span className="w-1 h-1 bg-tertiary rounded-full"></span>
          Current Quest
        </h3>
        <div className="glass-pane p-4 rounded border-tertiary/20 border hover:border-tertiary/40 transition-colors">
          <p className="font-prestige text-on-surface italic text-sm">"The Obsidian Protocol"</p>
          <p className="font-body-md text-[13px] text-on-surface-variant mt-2 leading-relaxed opacity-90">
            Verify the structural integrity of the obsidian chamber vaults.
          </p>
        </div>
      </div>

      {/* Heroic Status */}
      <div>
        <h3 className="font-label-caps text-[11px] tracking-widest text-on-surface-variant/60 uppercase mb-3 flex items-center gap-1.5">
          <span className="w-1 h-1 bg-primary rounded-full"></span>
          Heroic Status
        </h3>
        <div className="space-y-2.5">
          <div className="flex justify-between items-center bg-white/5 px-4 py-3 rounded border border-white/5 hover:bg-white/10 transition-colors">
            <span className="font-body-md text-sm text-on-surface">Intelligence</span>
            <span className="font-code-data text-primary text-sm font-bold">89</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 px-4 py-3 rounded border border-white/5 hover:bg-white/10 transition-colors">
            <span className="font-body-md text-sm text-on-surface">Precision</span>
            <span className="font-code-data text-secondary text-sm font-bold">92</span>
          </div>
          <div className="flex justify-between items-center bg-white/5 px-4 py-3 rounded border border-tertiary/30 hover:border-tertiary/60 transition-colors">
            <span className="font-body-md text-sm text-tertiary font-medium">Hero Rank</span>
            <span className="font-code-data text-tertiary text-sm font-bold px-2 py-0.5 bg-tertiary/5 rounded border border-tertiary/30 heroic-glow">S</span>
          </div>
        </div>
      </div>

      {/* Dashboard Graphic Graphic/Visual */}
      <div className="mt-auto relative rounded overflow-hidden border border-white/10 group">
        <img 
          alt="Status Visual" 
          className="w-full h-28 object-cover opacity-40 group-hover:opacity-85 transition-opacity duration-300"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB92TX8TBgPAuIkyigpbfUHLxtlejVLdIQBcpm5jy9j5MMH7Y0MHL8OPfNGJJA8aOWYtfCJv7FCUHXwf4QBZotJOGTB9ttGXkheUiTLT9vr6xewWN37XX8WwoqUv0pHzmGqdNFITrTrXKgAw2_fdXK6xDu3xTwjsfA4nSU2gMckBBJQDME163sxQhtoTk0a_-rujyOvQwX_42dmdV6YOS5HXFj7oXX-AhjVdos4X-ksEptjaM5x5_VWHEWIWyHbXyby346zSW2p7lss"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
        <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
          <span className="font-code-data text-[9px] text-on-surface-variant opacity-80 uppercase tracking-widest bg-surface/85 px-1.5 py-0.5 rounded border border-white/5">Visual Link</span>
        </div>
      </div>
    </aside>
  );
}
