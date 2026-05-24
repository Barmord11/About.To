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
        { label: 'CONSENSUS RATE', value: '99.8%', colorClass: 'text-[#4edea3]' },
        { label: 'FEATS WON', value: '42', colorClass: 'text-on-surface' }
      ],
      glowClass: 'border-[#ffb95f]/30 hover:border-[#ffb95f]/70 shadow-[0_0_20px_rgba(255,185,95,0.06)] hover:shadow-[0_0_35px_rgba(255,185,95,0.22)] bg-gradient-to-b from-[#21232c] via-[#161b22] to-[#12141c]',
      textColor: 'text-[#ffb95f]',
      numColor: 'text-[#ffb95f]/10',
      badgeColor: 'bg-[#ffb95f] text-[#472a00] border-[#ffb95f]/40 shadow-[0_0_12px_rgba(255,185,95,0.4)]',
      avatarBorder: 'border-[#ffb95f]'
    },
    {
      id: 2,
      place: '02',
      badge: 'SILVER',
      name: 'Lady Consensus',
      points: '8,920 TRUTH POINTS',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN6bA1sNov8iJwgDtj_XKJLPW-s5IjDWpKGoms2Rdl09DNEMAF1wLDv1JiUqIPdUTAJB90V3Cnj8PeFC_pKlPNUyo4KrUmrZko-aSQ5rsBA3Hl3sF_uUBFLnkrBfshBzKsaf8teTCKOxrv8q4Gbevrge3vnLgUihHXuWsmey2eSCBMdJIGbAzhr3fsKvF5HMNhtkZcXdJYToSSuMuCsP78UK4RqophQXtOHXYekKN0Lmya7sJJQTgDuO65Tq5C3PWVP6jgYQzZqQzS',
      tags: [
        { label: 'ELITE VERIFIER', class: 'border-[#4edea3]/30 text-[#4edea3] bg-[#4edea3]/5' },
        { label: 'TOP 1%', class: 'border-[#ddb7ff]/30 text-[#ddb7ff] bg-[#ddb7ff]/5' }
      ],
      glowClass: 'border-slate-400/25 hover:border-slate-300/60 shadow-[0_0_20px_rgba(184,197,217,0.04)] hover:shadow-[0_0_35px_rgba(184,197,217,0.18)] bg-gradient-to-b from-[#1c1e24] via-[#161b22] to-[#12141c]',
      textColor: 'text-slate-200',
      numColor: 'text-slate-400/10',
      badgeColor: 'bg-slate-300 text-slate-950 border-slate-400/40 shadow-[0_0_12px_rgba(184,197,217,0.3)]',
      avatarBorder: 'border-slate-300'
    },
    {
      id: 3,
      place: '03',
      badge: 'BRONZE',
      name: 'Synthesizer Kai',
      points: '7,810 TRUTH POINTS',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCApJ9rPNn-YyH9viJqhdLWczhmUDsrFEx_oiNsaF6zkxvPRiD-EifVYxNvYwgLH1b4E7kT_4xQJmG53TfSm-xJkSlHdb0DxWDiuKTcaW00dfMha8aRy4wdIdYsm5szThp0Y-v55tmPO-l4RZVeJC5Tfb48s1rOOu61HLwjYpKqWqZ8aQbjKckfdr-TKrnrinuw_Jwu-wVO9ATSBG4A9QP73E9emS2felxXuOgZ-iQVwrFLms1QdmT3dwhfCnEez0_yDkgNCO8vf8lj',
      tags: [
        { label: 'DATA ARCHITECT', class: 'border-[#4edea3]/30 text-[#4edea3] bg-[#4edea3]/5' },
        { label: 'RISING STAR', class: 'border-[#ddb7ff]/30 text-[#ddb7ff] bg-[#ddb7ff]/5' }
      ],
      glowClass: 'border-[#cd7f32]/25 hover:border-[#cd7f32]/60 shadow-[0_0_20px_rgba(205,127,50,0.03)] hover:shadow-[0_0_35px_rgba(205,127,50,0.15)] bg-gradient-to-b from-[#1b1c21] via-[#161b22] to-[#12141c]',
      textColor: 'text-slate-300',
      numColor: 'text-[#cd7f32]/10',
      badgeColor: 'bg-[#cd7f32] text-black border-[#cd7f32]/40 shadow-[0_0_12px_rgba(205,127,50,0.3)]',
      avatarBorder: 'border-[#cd7f32]'
    }
  ];

  const verifiers = [
    { rank: '04', name: 'Oracle_Seven', title: 'MASTER OF LOGIC', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8_Pim7-t7IKgWP4DZ_soZ3hI-wMDXlUpQsIEjfBZjAwMEfIMFqQivEwhtZ55MYnWU42F9mV7ZBGXl0u__XtNIYj6MiYbY0YWDMxNgF61bsT4bZHUhBhsno5sY2g327_gWk655V21aC54vxjF8ZTCzDtlgol7hDiXp4XVevryAr8bOJjNIckI4nrxxabb3RhKPbJF47bY_daYShD07Hsq2WpkgZcSmArLNj7MtmqVCGVsOozR1jB6lxzMfx9sCKuRPdNvijNU2DJot', change: 'up', changeVal: '+2', consensus: '98.5%' },
    { rank: '05', name: 'DigitalScribe', title: 'ETHICS GUARDIAN', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBN6bA1sNov8iJwgDtj_XKJLPW-s5IjDWpKGoms2Rdl09DNEMAF1wLDv1JiUqIPdUTAJB90V3Cnj8PeFC_pKlPNUyo4KrUmrZko-aSQ5rsBA3Hl3sF_uUBFLnkrBfshBzKsaf8teTCKOxrv8q4Gbevrge3vnLgUihHXuWsmey2eSCBMdJIGbAzhr3fsKvF5HMNhtkZcXdJYToSSuMuCsP78UK4RqophQXtOHXYekKN0Lmya7sJJQTgDuO65Tq5C3PWVP6jgYQzZqQzS', change: 'down', changeVal: '-1', consensus: '97.9%' },
    { rank: '06', name: 'Consensus_Queen', title: 'SIGNAL FINDER', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCApJ9rPNn-YyH9viJqhdLWczhmUDsrFEx_oiNsaF6zkxvPRiD-EifVYxNvYwgLH1b4E7kT_4xQJmG53TfSm-xJkSlHdb0DxWDiuKTcaW00dfMha8aRy4wdIdYsm5szThp0Y-v55tmPO-l4RZVeJC5Tfb48s1rOOu61HLwjYpKqWqZ8aQbjKckfdr-TKrnrinuw_Jwu-wVO9ATSBG4A9QP73E9emS2felxXuOgZ-iQVwrFLms1QdmT3dwhfCnEez0_yDkgNCO8vf8lj', change: 'same', changeVal: '—', consensus: '97.2%' },
    { rank: '07', name: 'Nova_Truth', title: 'PATTERN SEEKER', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8_Pim7-t7IKgWP4DZ_soZ3hI-wMDXlUpQsIEjfBZjAwMEfIMFqQivEwhtZ55MYnWU42F9mV7ZBGXl0u__XtNIYj6MiYbY0YWDMxNgF61bsT4bZHUhBhsno5sY2g327_gWk655V21aC54vxjF8ZTCzDtlgol7hDiXp4XVevryAr8bOJjNIckI4nrxxabb3RhKPbJF47bY_daYShD07Hsq2WpkgZcSmArLNj7MtmqVCGVsOozR1jB6lxzMfx9sCKuRPdNvijNU2DJot', change: 'up', changeVal: '+1', consensus: '96.8%' }
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
          <span className="font-code-data text-[9px] bg-[#ffa726]/10 text-[#ffa726] px-2.5 py-0.5 rounded border border-[#ffa726]/20 font-bold uppercase tracking-wider">
            SEASON 4
          </span>
          <span className="font-body-md text-xs text-on-surface-variant/60 font-medium">Ends in 14 Days</span>
        </div>

        {/* Header Title */}
        <div className="select-none">
          <h2 className="font-headline-lg text-3xl font-bold text-on-background tracking-tight">Hall of Heroes</h2>
          <p className="text-on-surface-variant font-body-md text-xs md:text-sm mt-2 leading-relaxed opacity-85">
            The elite circle of human verifiers dedicated to forging truth across the digital expanse. Ranked by architectural impact and consensus accuracy.
          </p>
        </div>

        {/* Sub Header Action buttons */}
        <div className="flex gap-3 font-label-caps text-[9px] tracking-widest select-none">
          <button className="px-4 py-2 rounded-lg border border-white/10 text-on-surface hover:border-white/20 transition-all hover:bg-white/[0.02] active:scale-95 font-bold">
            PAST SEASONS
          </button>
          <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-primary to-[#b76dff] text-on-primary shadow-[0_0_15px_rgba(221,183,255,0.25)] border border-primary/20 transition-all hover:brightness-110 active:scale-95 font-bold">
            MY STANDING
          </button>
        </div>

        {/* Stacking Podium Cards */}
        <div className="flex flex-col gap-4 select-none">
          {topThree.map((hero) => (
            <div 
              key={hero.id} 
              className={`glass-pane hover-shine rounded-xl p-5 md:p-6 flex flex-col items-center gap-4 relative overflow-hidden border transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] group ${hero.glowClass}`}
            >
              {/* Giant backdrop number - slanted serif */}
              <div className={`absolute right-4 md:right-6 top-1 md:top-2 font-prestige italic font-extrabold text-[85px] leading-none select-none transition-all duration-300 group-hover:scale-105 group-hover:opacity-20 opacity-10 ${hero.numColor}`}>
                {hero.place}
              </div>

              {/* Square highly rounded Avatar with badge overlay */}
              <div className="relative z-10">
                <div className={`w-[72px] h-[72px] rounded-2xl overflow-hidden border-2 ${hero.avatarBorder} shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105`}>
                  <img src={hero.avatar} className="w-full h-full object-cover" alt={hero.name} />
                </div>
                {/* Overlay Badge */}
                <div className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 font-label-caps text-[7.5px] tracking-widest px-3 py-0.5 rounded-full border border-white/10 font-bold transition-all duration-300 ${hero.badgeColor}`}>
                  {hero.badge}
                </div>
              </div>

              {/* Name and points */}
              <div className="text-center z-10 relative mt-1">
                <h4 className={`font-prestige text-lg font-bold transition-colors ${hero.textColor}`}>{hero.name}</h4>
                <p className="font-code-data text-[9.5px] text-on-surface-variant font-bold tracking-widest mt-1 opacity-80">{hero.points}</p>
              </div>

              {/* Metrics or tags at the bottom */}
              {hero.metrics ? (
                <div className="grid grid-cols-2 gap-3 w-full z-10 relative pt-1">
                  {hero.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-surface-container-lowest/80 p-2.5 rounded-lg border border-white/5 text-center flex flex-col justify-center transition-all duration-300 group-hover:border-white/10 group-hover:bg-surface-container-lowest">
                      <p className="font-label-caps text-[7px] text-on-surface-variant/40 tracking-widest font-bold">{metric.label}</p>
                      <p className={`font-code-data text-xs ${metric.colorClass} font-extrabold mt-1`}>{metric.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 w-full z-10 relative pt-1 font-label-caps text-[7.5px] tracking-widest">
                  {hero.tags.map((tag, idx) => (
                    <div key={idx} className={`p-2.5 rounded-lg border text-center flex flex-col justify-center font-bold font-code-data text-[8.5px] tracking-wider transition-all duration-300 ${tag.class} hover:bg-opacity-10`}>
                      {tag.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lower Rankings List: Top Verifiers */}
        <div className="glass-pane rounded-xl p-5 md:p-6 flex flex-col gap-4 bg-[#161b22]/90 border border-white/5">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-white/5 pb-3">
            <h3 className="font-prestige text-base font-bold text-on-surface">Top Verifiers</h3>
            
            {/* Search Bar inside list header */}
            <div className="relative max-w-[180px] w-full">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-sm">search</span>
              <input 
                type="text" 
                placeholder="Search Hero..."
                className="w-full bg-[#090b0f]/80 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-[11px] text-on-surface placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Table-like headers */}
          <div className="flex text-on-surface-variant/50 font-label-caps text-[8px] tracking-widest px-2 select-none border-b border-white/5 pb-1.5 mt-1 justify-between items-center">
            <div className="flex gap-4 items-center">
              <span className="w-16">RANK</span>
              <span>HERO</span>
            </div>
            <span className="text-right">CONSENSUS</span>
          </div>

          {/* List entries */}
          {filteredVerifiers.length > 0 ? (
            <div className="flex flex-col">
              {filteredVerifiers.map((verifier, idx) => (
                <div 
                  key={verifier.rank} 
                  className="flex items-center justify-between py-3 px-2 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    {/* Rank + Shift */}
                    <div className="w-16 flex items-center gap-1.5 font-code-data text-xs select-none">
                      <span className="text-on-surface-variant/70 font-bold">{verifier.rank}</span>
                      {verifier.change === 'up' && (
                        <span className="text-[9px] text-[#4edea3] font-bold flex items-center" title="Ranked up">
                          <span className="text-[8px] mr-0.5">▲</span>{verifier.changeVal}
                        </span>
                      )}
                      {verifier.change === 'down' && (
                        <span className="text-[9px] text-[#ffb4ab] font-bold flex items-center" title="Ranked down">
                          <span className="text-[8px] mr-0.5">▼</span>{verifier.changeVal}
                        </span>
                      )}
                      {verifier.change === 'same' && (
                        <span className="text-[9px] text-on-surface-variant/30 font-bold flex items-center">
                          {verifier.changeVal}
                        </span>
                      )}
                    </div>
                    
                    {/* Avatar + Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 shadow-sm relative">
                        <img src={verifier.avatar} className="w-full h-full object-cover" alt={verifier.name} />
                        {/* Gamified background overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      </div>
                      <div>
                        <h4 className="font-prestige text-xs font-bold text-on-surface">{verifier.name}</h4>
                        <p className="font-code-data text-[7.5px] text-on-surface-variant/50 uppercase tracking-wider mt-0.5 font-bold">{verifier.title}</p>
                      </div>
                    </div>
                  </div>

                  {/* Consensus Rate on the Right */}
                  <div className="text-right">
                    <span className="font-code-data text-xs text-[#4edea3] font-extrabold">{verifier.consensus}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-on-surface-variant/50 font-prestige italic text-xs select-none">
              No verifiers found.
            </div>
          )}

          {/* Full Rankings Link Button */}
          <button className="mt-2 text-center text-primary/80 hover:text-primary transition-all font-code-data text-[9.5px] tracking-widest uppercase font-bold active:scale-95 bg-white/[0.01] py-2.5 border border-primary/20 rounded-lg hover:border-primary/60 hover:bg-primary/5 shadow-sm hover:shadow-[0_0_15px_rgba(221,183,255,0.08)]">
            VIEW FULL RANKINGS (2,450)
          </button>
        </div>

      </div>
    </section>
  );
}
