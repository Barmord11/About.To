import React, { useState } from 'react';

export default function FeedPage() {
  const [likes, setLikes] = useState(1240);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullLadder, setShowFullLadder] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const initialLadder = [
    { rank: '01', name: 'Lady Integrity', HP: '14.2k' },
    { rank: '02', name: 'Sir Verifier', HP: '12.8k' },
    { rank: '03', name: 'Baron Byte', HP: '9.1k' }
  ];

  const extendedLadder = [
    { rank: '01', name: 'Lady Integrity', HP: '14.2k' },
    { rank: '02', name: 'Sir Verifier', HP: '12.8k' },
    { rank: '03', name: 'Baron Byte', HP: '9.1k' },
    { rank: '04', name: 'Oracle Scribe', HP: '8.4k' },
    { rank: '05', name: 'Count Shard', HP: '7.9k' },
    { rank: '06', name: 'High Archon', HP: '7.2k' }
  ];

  const activeLadder = showFullLadder ? extendedLadder : initialLadder;

  return (
    <section className="flex-1 bg-[#0f1117] p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
      {/* Feed Header */}
      <div className="mb-10 select-none">
        <h2 className="font-prestige text-3xl md:text-4xl italic text-on-background mb-2">The Royal Feed</h2>
        <p className="text-on-surface-variant font-body-lg text-sm md:text-base max-w-2xl opacity-80 leading-relaxed">
          Curated high-prestige knowledge and verified heroic achievements from the TruthForge network.
        </p>
      </div>

      {/* Bento Grid Social Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Large Feature Card: Knowledge Post (Takes 8 cols of xl grid) */}
        <div className="xl:col-span-8 glass-pane rounded-lg p-5 md:p-6 flex flex-col gap-6">
          <div className="flex justify-between items-start gap-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 border border-tertiary/30 p-[2px] flex-shrink-0">
                <img 
                  alt="Knowledge Oracle Avatar" 
                  className="w-full h-full object-cover rounded" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Retp3CrXJSPF2rK2hOBt6wxdgZAwMRFKq4k54BSKVElNnz2JYv0z1eMtPhzTg3nEWrSI9FsMd2ewTS9mioPenfyvrJauuw2CIpyLgVAcHbg0yF8b7bqdh2TK1RQGmyPVRk4AEposcDs7M5qhjXYjMVvz015h8uBY-WR5qFDASqpugZJgml0i2gqPleE5unc9gC1_zrGjVPHYJjIi0H_9O-jUGzUPKKw18oTjam3sbZS3UiCOPnF7oMCQL-Cw3Rk60uUKCooafFKe"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-prestige text-lg font-bold">The Oracle of Scribes</h4>
                  <span className="material-symbols-outlined text-tertiary text-lg font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <p className="font-code-data text-[10px] text-on-surface-variant/70 uppercase tracking-widest">Knowledge Pillar • 2h ago</p>
              </div>
            </div>
            <span className="font-label-caps text-tertiary border border-tertiary/40 px-3 py-1 rounded-full text-[9px] tracking-wider heroic-glow bg-tertiary/5 select-none flex-shrink-0">
              PRECISION VERIFIED
            </span>
          </div>

          <div className="space-y-4">
            <h3 className="font-prestige text-xl md:text-2xl leading-relaxed text-on-background italic opacity-95">
              "The architecture of truth is not found in the volume of data, but in the integrity of the filters we apply to its source."
            </h3>
            <p className="text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed opacity-85">
              Today's verification protocols reached a new high-fidelity milestone. By utilizing nested zero-knowledge proofs, we have isolated the signal from the noise with 99.98% certainty. This marks a new era for knowledge architects.
            </p>
          </div>

          {/* Aspect Video / Image Container */}
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/10 group cursor-pointer relative">
            <img 
              alt="Verification Data Visualization" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjvC3K5hiu3pnbk5rrGe4tC9sWqoZ7QXKmbfLBRYdqgBEazfwO5GJbtAQuNtvUyUiXaZQD9HxJx-pUtAF5SvlODILJGk2WFl9bxe13IWYaFtwkp5qArkTf6b6FWRdPRCrpuF4mBZDJuxvL_r12r29aKe6gInbfFfkB_fqIy9iKehYCC2SCukNHAEvZK4ShOL6tj1oHmvBjRJ0I2hMmAjYPz-XCq1mElvxw0-gASS8RUo4dwvnVnmwNauQRvxf3Sqo9uUcsRV6ks1pm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 border-t border-white/5 pt-4">
            <button 
              onClick={toggleLike}
              className={`flex items-center gap-1.5 hover:text-primary transition-colors font-code-data text-xs ${isLiked ? 'text-primary' : 'text-on-surface-variant'}`}
            >
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}>
                favorite
              </span>
              <span>{(likes).toLocaleString()}</span>
            </button>
            <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-code-data text-xs">
              <span className="material-symbols-outlined text-lg">chat_bubble</span>
              <span>482</span>
            </button>
            <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-code-data text-xs">
              <span className="material-symbols-outlined text-lg">share</span>
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Sidebar Widgets (Takes 4 cols of xl grid, displays nicely on mobile as well) */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          {/* Prestige Widget */}
          <div className="bg-surface-container-high rounded-lg p-5 md:p-6 border border-white/5 relative overflow-hidden select-none">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-[110px] text-tertiary">military_tech</span>
            </div>
            <h4 className="font-label-caps text-[10px] text-on-surface-variant/80 tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              YOUR PRESTIGE
            </h4>
            <div className="flex flex-col gap-1 z-10 relative">
              <span className="font-code-data text-3xl text-tertiary font-bold tracking-tighter">LVL 84</span>
              <span className="font-body-md text-sm text-on-surface-variant/90 font-medium">Arch-Chancellor of Verification</span>
            </div>
            <div className="mt-5 w-full h-1 bg-white/5 rounded-full overflow-hidden z-10 relative">
              <div className="h-full bg-tertiary w-[75%] heroic-glow rounded-full"></div>
            </div>
          </div>

          {/* High Heroes Ranking Widget */}
          <div className="glass-pane rounded-lg p-5 md:p-6 flex flex-col gap-4">
            <h4 className="font-label-caps text-[10px] text-on-surface-variant/80 tracking-widest flex items-center gap-2 border-b border-white/5 pb-3">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              HIGH HEROES LADDER
            </h4>
            <ul className="flex flex-col gap-3.5">
              {activeLadder.map((hero) => (
                <li key={hero.rank} className="flex items-center justify-between group py-0.5 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <span className="font-code-data text-xs text-on-surface-variant/50">{hero.rank}</span>
                    <span className={`font-prestige text-sm font-semibold group-hover:text-tertiary transition-colors ${hero.name === 'Sir Verifier' ? 'text-primary' : 'text-on-surface'}`}>
                      {hero.name}
                    </span>
                  </div>
                  <span className="font-code-data text-xs text-tertiary/90 font-bold">{hero.HP} HP</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setShowFullLadder(!showFullLadder)}
              className="mt-2 text-center py-2 border border-white/10 hover:border-white/20 hover:text-primary font-label-caps text-[9px] tracking-widest transition-all rounded active:scale-95 bg-white/[0.02]"
            >
              {showFullLadder ? 'COLLAPSE LADDER' : 'VIEW FULL LADDER'}
            </button>
          </div>
        </div>

        {/* Snippet Card 1 (Ava) - Verified check removed from top block name header */}
        <div className="xl:col-span-6 glass-pane rounded-lg p-5 relative group border border-white/5 overflow-hidden flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                <img 
                  alt="Ava Avatar" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN6bA1sNov8iJwgDtj_XKJLPW-s5IjDWpKGoms2Rdl09DNEMAF1wLDv1JiUqIPdUTAJB90V3Cnj8PeFC_pKlPNUyo4KrUmrZko-aSQ5rsBA3Hl3sF_uUBFLnkrBfshBzKsaf8teTCKOxrv8q4Gbevrge3vnLgUihHXuWsmey2eSCBMdJIGbAzhr3fsKvF5HMNhtkZcXdJYToSSuMuCsP78UK4RqophQXtOHXYekKN0Lmya7sJJQTgDuO65Tq5C3PWVP6jgYQzZqQzS"
                />
              </div>
              <span className="font-prestige font-bold text-sm text-on-surface">Chronicler Ava</span>
            </div>
            <span className="font-label-caps text-[8px] text-on-surface-variant/45 tracking-widest border border-white/5 px-2 py-0.5 rounded">FACT SHARD</span>
          </div>

          {/* Statement section */}
          <p className="font-prestige text-sm text-on-surface/90 italic leading-relaxed pl-1">
            "Obsidian sanctuaries decrease mental fatigue by 22% during deep lore investigations. The system prioritizes neural network coherence and enhances information retrieval speeds for prolonged focus."
          </p>

          {/* Thin divider line */}
          <div className="border-t border-white/5 -mx-5"></div>

          {/* Core Insight details */}
          <div className="flex gap-3.5 items-start">
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-10 h-10 rounded bg-surface-container-high/65 border border-white/10 flex items-center justify-center text-primary/85 shadow">
                <span className="material-symbols-outlined text-lg">auto_awesome</span>
              </div>
              <span className="font-label-caps text-[6px] text-on-surface-variant/40 tracking-wider font-bold">INSIGHT</span>
            </div>

            <div className="flex-1 space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-label-caps text-[10px] text-primary font-bold tracking-wider">TRUTHFORGE CORE</span>
                <span className="material-symbols-outlined text-secondary text-[11px] font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant/90 leading-relaxed">
                Lore investigations demand high focus. Environmental optimization filters neural noise to reduce cognitive fatigue and maintain archival clarity.
              </p>
            </div>
          </div>

          {/* Footer tags and bottom icon */}
          <div className="flex justify-between items-end mt-1 pt-2 border-t border-white/5">
            <div className="font-code-data text-[9px] text-on-surface-variant/50 tracking-widest uppercase">
              #OBSIDIANSANCTUARY #MENTALCLARITY
            </div>
            <span className="material-symbols-outlined text-xl text-on-surface-variant/20 group-hover:text-tertiary/60 transition-colors">
              architecture
            </span>
          </div>
        </div>

        {/* Snippet Card 2 (Elder Verifier) - Verified check removed from top block name header */}
        <div className="xl:col-span-6 glass-pane rounded-lg p-5 relative group border border-white/5 overflow-hidden flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                <img 
                  alt="Elder Avatar" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCApJ9rPNn-YyH9viJqhdLWczhmUDsrFEx_oiNsaF6zkxvPRiD-EifVYxNvYwgLH1b4E7kT_4xQJmG53TfSm-xJkSlHdb0DxWDiuKTcaW00dfMha8aRy4wdIdYsm5szThp0Y-v55tmPO-l4RZVeJC5Tfb48s1rOOu61HLwjYpKqWqZ8aQbjKckfdr-TKrnrinuw_Jwu-wVO9ATSBG4A9QP73E9emS2felxXuOgZ-iQVwrFLms1QdmT3dwhfCnEez0_yDkgNCO8vf8lj"
                />
              </div>
              <span className="font-prestige font-bold text-sm text-on-surface">Elder Verifier</span>
            </div>
            <span className="font-label-caps text-[8px] text-on-surface-variant/45 tracking-widest border border-white/5 px-2 py-0.5 rounded">FACT SHARD</span>
          </div>

          {/* Statement section */}
          <p className="font-prestige text-sm text-on-surface/90 italic leading-relaxed pl-1">
            "Trust is built in milliseconds, but lost in nanoseconds. The pulse of verification must be constant."
          </p>

          {/* Thin divider line */}
          <div className="border-t border-white/5 -mx-5"></div>

          {/* Core Insight details */}
          <div className="flex gap-3.5 items-start">
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-10 h-10 rounded bg-surface-container-high/65 border border-white/10 flex items-center justify-center text-primary/85 shadow">
                <span className="material-symbols-outlined text-lg">verified_user</span>
              </div>
              <span className="font-label-caps text-[6px] text-on-surface-variant/40 tracking-wider font-bold">INSIGHT</span>
            </div>

            <div className="flex-1 space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-label-caps text-[10px] text-primary font-bold tracking-wider">TRUTHFORGE CORE</span>
                <span className="material-symbols-outlined text-secondary text-[11px] font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <p className="font-body-md text-xs text-on-surface-variant/90 leading-relaxed">
                Decentralized consensus runs constant pulses. Real-time anomaly detection secures archive integrity instantly and seals off rogue inputs.
              </p>
            </div>
          </div>

          {/* Footer tags and bottom icon */}
          <div className="flex justify-between items-end mt-1 pt-2 border-t border-white/5">
            <div className="font-code-data text-[9px] text-on-surface-variant/50 tracking-widest uppercase">
              #ARCHIVALFIDELITY #SOVEREIGNOATH
            </div>
            <span className="material-symbols-outlined text-xl text-on-surface-variant/20 group-hover:text-tertiary/60 transition-colors">
              history_edu
            </span>
          </div>
        </div>

        {/* Statistics Card (Telemetry) */}
        <div className="xl:col-span-12 glass-pane hover-shine rounded-lg p-5 md:p-6 relative group border border-white/5 overflow-hidden flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <h4 className="font-label-caps text-[10px] text-on-surface-variant/80 tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary amber-pulse"></span>
              TRUTHFORGE NETWORK TELEMETRY
            </h4>
            <span className="font-code-data text-[9px] text-secondary/80 bg-secondary/5 border border-secondary/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              REAL-TIME
            </span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Metric 1: Inquiries Resolved */}
            <div className="flex flex-col gap-2 bg-[#0c0e14]/50 p-4 rounded-lg border border-white/5">
              <span className="font-label-caps text-[8px] text-on-surface-variant/50 tracking-wider font-bold">DAILY INQUIRIES RESOLVED</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-code-data text-2xl text-on-surface font-extrabold">5,039</span>
                <span className="font-code-data text-xs text-on-surface-variant/40">/ 7,500</span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[67.2%] rounded-full shadow-[0_0_10px_rgba(221,183,255,0.2)]"></div>
              </div>
              <p className="font-body-md text-[10px] text-on-surface-variant/60 mt-1">67.2% of daily manifest quota cleared</p>
            </div>

            {/* Metric 2: Verified answers */}
            <div className="flex flex-col gap-2 bg-[#0c0e14]/50 p-4 rounded-lg border border-white/5">
              <span className="font-label-caps text-[8px] text-on-surface-variant/50 tracking-wider font-bold">CONSENSUS RATIO</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-code-data text-2xl text-secondary font-extrabold">75%</span>
                <span className="font-code-data text-xs text-secondary/60">VERIFIED</span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-secondary w-[75%] rounded-full shadow-[0_0_10px_rgba(78,222,163,0.2)]"></div>
              </div>
              <p className="font-body-md text-[10px] text-on-surface-variant/60 mt-1">Direct consensus alignment achieved</p>
            </div>

            {/* Metric 3: Active Verifiers */}
            <div className="flex flex-col gap-2 bg-[#0c0e14]/50 p-4 rounded-lg border border-white/5">
              <span className="font-label-caps text-[8px] text-on-surface-variant/50 tracking-wider font-bold">CHAMBER TELEMETRY</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-code-data text-2xl text-tertiary font-extrabold">2,450</span>
                <span className="font-code-data text-xs text-tertiary/60">ACTIVE</span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-tertiary w-[88%] rounded-full shadow-[0_0_10px_rgba(255,185,95,0.2)]"></div>
              </div>
              <p className="font-body-md text-[10px] text-on-surface-variant/60 mt-1">Active nodes verifying proofs</p>
            </div>
          </div>
        </div>
      </div>


      {/* Floating Action Button (FAB) */}
      <button className="fixed bottom-24 right-6 w-12 h-12 md:bottom-16 md:right-8 md:w-14 md:h-14 xl:right-[340px] rounded-full bg-gradient-to-r from-primary to-[#b76dff] text-on-primary shadow-[0_4px_20px_rgba(221,183,255,0.35)] hover:shadow-[0_4px_25px_rgba(221,183,255,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center z-40 border border-primary/20">
        <span className="material-symbols-outlined text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>add_comment</span>
      </button>
    </section>
  );
}
