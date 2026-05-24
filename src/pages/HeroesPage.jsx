import React, { useState } from 'react';

export default function HeroesPage() {
  const [search, setSearch] = useState('');

  const topThree = [
    {
      id: 1,
      place: '01',
      badge: 'CHAMPION',
      name: 'Archon Valerius',
      points: '12,450 TRUTH POINTS',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8_Pim7-t7IKgWP4DZ_soZ3hI-wMDXlUpQsIEjfBZjAwMEfIMFqQivEwhtZ55MYnWU42F9mV7ZBGXl0u__XtNIYj6MiYbY0YWDMxNgF61bsT4bZHUhBhsno5sY2g327_gWk655V21aC54vxjF8ZTCzDtlgol7hDiXp4XVevryAr8bOJjNIckI4nrxxabb3RhKPbJF47bY_daYShD07Hsq2WpkgZcSmArLNj7MtmqVCGVsOozR1jB6lxzMfx9sCKuRPdNvijNU2DJot',
      metrics: [
        { label: 'CONSENSUS RATE', value: '99.8%', colorClass: 'text-secondary' },
        { label: 'FEATS WON', value: '42', colorClass: 'text-on-surface' }
      ],
      glowClass: 'border-tertiary/40 shadow-[0_0_25px_rgba(255,185,95,0.12)]',
      textColor: 'text-tertiary',
      numColor: 'text-tertiary/10',
      badgeColor: 'bg-tertiary text-on-tertiary shadow-[0_0_10px_rgba(255,185,95,0.3)]'
    },
    {
      id: 2,
      place: '02',
      badge: 'SILVER',
      name: 'Lady Consensus',
      points: '8,920 TRUTH POINTS',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN6bA1sNov8iJwgDtj_XKJLPW-s5IjDWpKGoms2Rdl09DNEMAF1wLDv1JiUqIPdUTAJB90V3Cnj8PeFC_pKlPNUyo4KrUmrZko-aSQ5rsBA3Hl3sF_uUBFLnkrBfshBzKsaf8teTCKOxrv8q4Gbevrge3vnLgUihHXuWsmey2eSCBMdJIGbAzhr3fsKvF5HMNhtkZcXdJYToSSuMuCsP78UK4RqophQXtOHXYekKN0Lmya7sJJQTgDuO65Tq5C3PWVP6jgYQzZqQzS',
      tags: [
        { label: 'ELITE VERIFIER', class: 'border-secondary/35 text-secondary bg-secondary/5' },
        { label: 'TOP 1%', class: 'border-primary/30 text-primary bg-primary/5' }
      ],
      glowClass: 'border-white/5 shadow-md',
      textColor: 'text-on-surface',
      numColor: 'text-white/5',
      badgeColor: 'bg-slate-400 text-black font-semibold'
    },
    {
      id: 3,
      place: '03',
      badge: 'BRONZE',
      name: 'Synthesizer Kai',
      points: '7,810 TRUTH POINTS',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCApJ9rPNn-YyH9viJqhdLWczhmUDsrFEx_oiNsaF6zkxvPRiD-EifVYxNvYwgLH1b4E7kT_4xQJmG53TfSm-xJkSlHdb0DxWDiuKTcaW00dfMha8aRy4wdIdYsm5szThp0Y-v55tmPO-l4RZVeJC5Tfb48s1rOOu61HLwjYpKqWqZ8aQbjKckfdr-TKrnrinuw_Jwu-wVO9ATSBG4A9QP73E9emS2felxXuOgZ-iQVwrFLms1QdmT3dwhfCnEez0_yDkgNCO8vf8lj',
      tags: [
        { label: 'DATA ARCHITECT', class: 'border-secondary/35 text-secondary bg-secondary/5' },
        { label: 'RISING STAR', class: 'border-primary/30 text-primary bg-primary/5' }
      ],
      glowClass: 'border-white/5 shadow-md',
      textColor: 'text-on-surface',
      numColor: 'text-orange-950/10',
      badgeColor: 'bg-amber-700 text-white font-semibold'
    }
  ];

  const verifiers = [
    { rank: '04', name: 'Oracle_Seven', title: 'MASTER OF LOGIC', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8_Pim7-t7IKgWP4DZ_soZ3hI-wMDXlUpQsIEjfBZjAwMEfIMFqQivEwhtZ55MYnWU42F9mV7ZBGXl0u__XtNIYj6MiYbY0YWDMxNgF61bsT4bZHUhBhsno5sY2g327_gWk655V21aC54vxjF8ZTCzDtlgol7hDiXp4XVevryAr8bOJjNIckI4nrxxabb3RhKPbJF47bY_daYShD07Hsq2WpkgZcSmArLNj7MtmqVCGVsOozR1jB6lxzMfx9sCKuRPdNvijNU2DJot' },
    { rank: '05', name: 'DigitalScribe', title: 'ETHICS GUARDIAN', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN6bA1sNov8iJwgDtj_XKJLPW-s5IjDWpKGoms2Rdl09DNEMAF1wLDv1JiUqIPdUTAJB90V3Cnj8PeFC_pKlPNUyo4KrUmrZko-aSQ5rsBA3Hl3sF_uUBFLnkrBfshBzKsaf8teTCKOxrv8q4Gbevrge3vnLgUihHXuWsmey2eSCBMdJIGbAzhr3fsKvF5HMNhtkZcXdJYToSSuMuCsP78UK4RqophQXtOHXYekKN0Lmya7sJJQTgDuO65Tq5C3PWVP6jgYQzZqQzS' },
    { rank: '06', name: 'Consensus_Queen', title: 'SIGNAL FINDER', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCApJ9rPNn-YyH9viJqhdLWczhmUDsrFEx_oiNsaF6zkxvPRiD-EifVYxNvYwgLH1b4E7kT_4xQJmG53TfSm-xJkSlHdb0DxWDiuKTcaW00dfMha8aRy4wdIdYsm5szThp0Y-v55tmPO-l4RZVeJC5Tfb48s1rOOu61HLwjYpKqWqZ8aQbjKckfdr-TKrnrinuw_Jwu-wVO9ATSBG4A9QP73E9emS2felxXuOgZ-iQVwrFLms1QdmT3dwhfCnEez0_yDkgNCO8vf8lj' },
    { rank: '07', name: 'Nova_Truth', title: 'PATTERN SEEKER', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8_Pim7-t7IKgWP4DZ_soZ3hI-wMDXlUpQsIEjfBZjAwMEfIMFqQivEwhtZ55MYnWU42F9mV7ZBGXl0u__XtNIYj6MiYbY0YWDMxNgF61bsT4bZHUhBhsno5sY2g327_gWk655V21aC54vxjF8ZTCzDtlgol7hDiXp4XVevryAr8bOJjNIckI4nrxxabb3RhKPbJF47bY_daYShD07Hsq2WpkgZcSmArLNj7MtmqVCGVsOozR1jB6lxzMfx9sCKuRPdNvijNU2DJot' }
  ];

  const filteredVerifiers = verifiers.filter(v => 
    v.name.toLowerCase().includes(search.toLowerCase()) || 
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="flex-1 bg-surface p-4 md:p-8 overflow-y-auto pb-24 md:pb-8 flex justify-center">
      <div className="max-w-[480px] w-full flex flex-col gap-6">
        
        {/* Season status tag */}
        <div className="flex items-center gap-2.5 mt-2 select-none">
          <span className="font-code-data text-[9px] bg-tertiary/15 text-tertiary px-2 py-0.5 rounded border border-tertiary/20 font-bold uppercase tracking-wider">
            SEASON 4
          </span>
          <span className="font-body-md text-xs text-on-surface-variant/60">Ends in 14 Days</span>
        </div>

        {/* Header Title */}
        <div className="select-none">
          <h2 className="font-headline-lg text-3xl font-bold text-on-background tracking-tight">Hall of Heroes</h2>
          <p className="text-on-surface-variant font-body-md text-xs md:text-sm mt-2 leading-relaxed opacity-80">
            The elite circle of human verifiers dedicated to forging truth across the digital expanse. Ranked by architectural impact and consensus accuracy.
          </p>
        </div>

        {/* Sub Header Action buttons */}
        <div className="flex gap-3 font-label-caps text-[9px] tracking-wider select-none">
          <button className="px-4 py-2 rounded border border-white/10 text-on-surface hover:border-white/20 transition-all hover:bg-white/[0.01] active:scale-95">
            PAST SEASONS
          </button>
          <button className="px-5 py-2 rounded bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-lg border border-primary/20 transition-all hover:brightness-110 active:scale-95 font-bold">
            MY STANDING
          </button>
        </div>

        {/* Stacking Podium Cards */}
        <div className="flex flex-col gap-4 select-none">
          {topThree.map((hero) => (
            <div 
              key={hero.id} 
              className={`glass-pane rounded-xl p-5 md:p-6 flex flex-col items-center gap-4 relative overflow-hidden border transition-all duration-300 ${hero.glowClass}`}
            >
              {/* Giant backdrop number */}
              <div className={`absolute right-4 md:right-6 top-1 md:top-2 font-code-data text-[80px] md:text-[90px] font-bold leading-none select-none ${hero.numColor}`}>
                {hero.place}
              </div>

              {/* Square highly rounded Avatar with badge overlay */}
              <div className="relative z-10">
                <div className={`w-[72px] h-[72px] rounded-2xl overflow-hidden border-2 ${
                  hero.place === '01' ? 'border-tertiary' : 
                  hero.place === '02' ? 'border-[#b8c5d9]' : 'border-[#cd7f32]'
                } shadow-md`}>
                  <img src={hero.avatar} className="w-full h-full object-cover" alt={hero.name} />
                </div>
                {/* Overlay Badge */}
                <div className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 font-label-caps text-[7px] tracking-widest px-2 py-0.5 rounded-full border border-white/5 ${hero.badgeColor}`}>
                  {hero.badge}
                </div>
              </div>

              {/* Name and points */}
              <div className="text-center z-10 relative mt-1">
                <h4 className={`font-prestige text-lg font-bold ${hero.textColor}`}>{hero.name}</h4>
                <p className="font-code-data text-[10px] text-on-surface-variant font-bold tracking-widest mt-1 opacity-90">{hero.points}</p>
              </div>

              {/* Metrics or tags at the bottom */}
              {hero.metrics ? (
                <div className="grid grid-cols-2 gap-3 w-full z-10 relative pt-1">
                  {hero.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-surface-container-lowest/80 p-2.5 rounded border border-white/5 text-center flex flex-col justify-center">
                      <p className="font-label-caps text-[7px] text-on-surface-variant/50 tracking-widest font-bold">{metric.label}</p>
                      <p className={`font-code-data text-xs ${metric.colorClass} font-bold mt-1`}>{metric.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center gap-2.5 w-full z-10 relative pt-1 font-label-caps text-[7.5px] tracking-widest">
                  {hero.tags.map((tag, idx) => (
                    <span key={idx} className={`px-3 py-1 rounded-full border ${tag.class} font-bold`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lower Rankings List: Top Verifiers */}
        <div className="glass-pane rounded-xl p-5 md:p-6 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-white/5 pb-3">
            <h3 className="font-prestige text-base font-bold text-on-surface">Top Verifiers</h3>
            
            {/* Search Bar inside list header */}
            <div className="relative max-w-[180px] w-full">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-sm">search</span>
              <input 
                type="text" 
                placeholder="Search Hero..."
                className="w-full bg-[#090b0f]/60 border border-white/10 rounded-md pl-8 pr-3 py-1 text-[11px] text-on-surface placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Table-like headers */}
          <div className="flex text-on-surface-variant/50 font-label-caps text-[8px] tracking-widest px-2 select-none border-b border-white/5 pb-1 mt-1">
            <span className="w-12">RANK</span>
            <span>HERO</span>
          </div>

          {/* List entries */}
          {filteredVerifiers.length > 0 ? (
            <div className="flex flex-col">
              {filteredVerifiers.map((verifier, idx) => (
                <div 
                  key={verifier.rank} 
                  className={`flex items-center py-2.5 px-2 border-b border-white/5 last:border-b-0 hover:bg-white/[0.01] transition-colors ${
                    idx % 2 === 0 ? '' : ''
                  }`}
                >
                  {/* Rank */}
                  <span className="w-12 font-code-data text-xs text-on-surface-variant/70">{verifier.rank}</span>
                  
                  {/* Avatar + Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded overflow-hidden border border-white/10 flex-shrink-0">
                      <img src={verifier.avatar} className="w-full h-full object-cover" alt={verifier.name} />
                    </div>
                    <div>
                      <h4 className="font-prestige text-xs font-bold text-on-surface">{verifier.name}</h4>
                      <p className="font-code-data text-[8px] text-on-surface-variant/60 uppercase tracking-wider mt-0.5">{verifier.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-on-surface-variant/50 font-prestige italic text-xs select-none">
              No verifiers found.
            </div>
          )}

          {/* Full Rankings Link Button */}
          <button className="mt-2 text-center text-primary/80 hover:text-primary transition-all font-code-data text-[9px] tracking-widest uppercase font-bold active:scale-95 bg-white/[0.01] py-2 border border-white/5 rounded">
            VIEW FULL RANKINGS (2,450)
          </button>
        </div>

      </div>
    </section>
  );
}
