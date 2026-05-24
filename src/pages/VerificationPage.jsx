import React, { useState, useEffect } from 'react';

export default function VerificationPage() {
  const [bountyClaimed, setBountyClaimed] = useState(false);
  const [showLogs, setShowLogs] = useState(false);
  const [isArrowVerified, setIsArrowVerified] = useState(false);

  useEffect(() => {
    setIsArrowVerified(localStorage.getItem('verification_mobile_arrow') === 'passed');
  }, []);

  const handleResetVerification = () => {
    localStorage.removeItem('verification_mobile_arrow');
    setIsArrowVerified(false);
  };

  const logs = [
    '[08:42:01.002] INGESTION: Initiating source signal stream from Southern Realm...',
    '[08:42:01.120] PARSING: Raw binary buffer mapped to Obsidian protocol definitions.',
    '[08:42:01.445] VALIDATION: Checking cryptographic signatures for 4 data shards...',
    '[08:42:02.100] ZK-PROVE: Generating zero-knowledge membership proofs...',
    '[08:42:02.142] ZK-PROVE: Proof generation complete (duration: 42ms, size: 256 bytes).',
    '[08:42:02.503] CONSENSUS: Broadcasting proofs to TruthForge network...',
    '[08:42:02.890] CONSENSUS: Validated by 12 active oracles. Consensus reached at 100% agreement.',
    '[08:42:03.011] COMMIT: Merging verification records into primary blockchain ledger.',
    '[08:42:03.125] INTEGRATION: High-Fidelity entry forged. Quest bounty unlocked.'
  ];

  return (
    <section className="flex-1 bg-[#0f1117] p-4 md:p-8 overflow-y-auto pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8 select-none">
        <h2 className="font-prestige text-3xl md:text-4xl italic text-on-background mb-2">Archival Portal</h2>
        <p className="text-on-surface-variant font-body-lg text-sm md:text-base max-w-2xl opacity-80 leading-relaxed">
          Access quest milestones, process zero-knowledge proofs, and claim rewards for architectural integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Verification Success Box (Left Column - 7 cols) */}
        <div className="xl:col-span-7 glass-pane rounded-lg p-6 md:p-8 flex flex-col items-center text-center gap-6 border-secondary/20 relative overflow-hidden group">
          {/* Subtle green ambient glow background */}
          <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          {/* Large pulsing green checkmark badge */}
          <div className="w-20 h-20 rounded-full bg-secondary/15 flex items-center justify-center border border-secondary/30 relative heroic-glow animate-pulse">
            <span className="material-symbols-outlined text-secondary text-5xl font-bold">verified</span>
            <span className="absolute -top-1 -right-1 z-10 bg-secondary text-on-secondary px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-secondary shadow-lg">
              <span className="material-symbols-outlined text-[10px] font-bold">verified_user</span>
              <span className="font-label-caps text-[9px] font-bold">VERIFIED</span>
            </span>
          </div>

          <div className="space-y-3 z-10 relative">
            <h3 className="font-prestige text-2xl italic text-on-surface">Quest Completed Successfully</h3>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-lg mx-auto leading-relaxed opacity-90">
              Noble Sir Verifier, your latest submission in the Southern Realm has been fully integrated into the archives. The signal is verified at 99.98% certainty.
            </p>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full z-10 relative border-t border-b border-white/5 py-6">
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant/75 tracking-wider">SUCCESS RATE</p>
              <p className="font-code-data text-base text-secondary font-bold mt-1">94.2%</p>
            </div>
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant/75 tracking-wider">REPUTATION GAIN</p>
              <p className="font-code-data text-base text-tertiary font-bold mt-1">+1,450 HP</p>
            </div>
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant/75 tracking-wider">DATA SHARDS</p>
              <p className="font-code-data text-base text-primary font-bold mt-1">4 / 4</p>
            </div>
            <div>
              <p className="font-label-caps text-[9px] text-on-surface-variant/75 tracking-wider">INTEGRITY CHECK</p>
              <p className="font-code-data text-base text-secondary font-bold mt-1">PASSED</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 w-full z-10 relative">
            <button 
              onClick={() => setBountyClaimed(true)}
              disabled={bountyClaimed}
              className={`px-5 py-3 rounded font-label-caps text-[10px] tracking-widest transition-all active:scale-95 border ${
                bountyClaimed 
                  ? 'border-white/10 text-on-surface-variant/40 bg-white/5 cursor-not-allowed'
                  : 'border-secondary text-on-secondary bg-secondary hover:bg-secondary-container hover:border-secondary-container'
              }`}
            >
              {bountyClaimed ? 'BOUNTY CLAIMED' : 'RECLAIM BOUNTY'}
            </button>
            <button 
              onClick={() => setShowLogs(!showLogs)}
              className="px-5 py-3 rounded border border-white/10 text-on-surface hover:border-white/20 font-label-caps text-[10px] tracking-widest transition-all active:scale-95 bg-white/[0.02]"
            >
              {showLogs ? 'HIDE CONSOLE' : 'VIEW RAW LOGS'}
            </button>
            {isArrowVerified && (
              <button 
                onClick={handleResetVerification}
                className="px-4 py-3 rounded border border-red-500/20 text-red-400 hover:bg-red-500/10 font-label-caps text-[10px] tracking-widest transition-all active:scale-95"
              >
                RESET TEST
              </button>
            )}
          </div>
        </div>

        {/* Milestone Steps Timeline (Right Column - 5 cols) */}
        <div className="xl:col-span-5 flex flex-col gap-5">
          <div className="glass-pane rounded-lg p-5 flex flex-col gap-4">
            <h4 className="font-label-caps text-[10px] text-on-surface-variant/80 tracking-widest flex items-center gap-2 border-b border-white/5 pb-3 select-none">
              <span className="material-symbols-outlined text-sm">timeline</span>
              VERIFICATION STEPS
            </h4>
            
            <div className="space-y-6 pl-2 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
              {/* Milestone 1 */}
              <div className="flex gap-4 items-start relative">
                <div className="w-6 h-6 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary z-10 flex-shrink-0">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div>
                  <h5 className="font-prestige text-sm font-semibold text-on-surface">Signal Ingestion</h5>
                  <p className="font-body-md text-xs text-on-surface-variant mt-1">
                    Resonance verified at 100%. Sacred parchment received and recorded.
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="flex gap-4 items-start relative">
                <div className="w-6 h-6 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary z-10 flex-shrink-0">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div>
                  <h5 className="font-prestige text-sm font-semibold text-on-surface">Zero-Knowledge Prove</h5>
                  <p className="font-body-md text-xs text-on-surface-variant mt-1">
                    4 crystal shards merged into a single runic proof (42ms).
                  </p>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="flex gap-4 items-start relative">
                <div className="w-6 h-6 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary z-10 flex-shrink-0">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <div>
                  <h5 className="font-prestige text-sm font-semibold text-on-surface">Consensus Forge</h5>
                  <p className="font-body-md text-xs text-on-surface-variant mt-1">
                    Validated by 12 active oracles. Shards successfully sealed.
                  </p>
                </div>
              </div>

              {/* Milestone 4 (Layout clearance verification quest) */}
              <div className="flex gap-4 items-start relative">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 flex-shrink-0 border ${
                  isArrowVerified 
                    ? 'bg-secondary/20 border-secondary/40 text-secondary' 
                    : 'bg-tertiary/15 border-tertiary/40 text-tertiary animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.15)]'
                }`}>
                  <span className="material-symbols-outlined text-sm font-bold">
                    {isArrowVerified ? 'check' : 'priority_high'}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <h5 className={`font-prestige text-sm font-semibold ${isArrowVerified ? 'text-on-surface' : 'text-tertiary font-bold'}`}>
                      Aetheric Spacing Alignment
                    </h5>
                    {!isArrowVerified && (
                      <button 
                        onClick={() => window.location.href = '/?debug=layout'}
                        className="font-label-caps text-[8px] bg-tertiary/90 text-on-tertiary px-2 py-0.5 rounded font-bold hover:bg-tertiary hover:shadow-md transition-all active:scale-95 flex-shrink-0"
                      >
                        ALIGN RELIC
                      </button>
                    )}
                  </div>
                  <p className="font-body-md text-xs text-on-surface-variant mt-1">
                    {isArrowVerified 
                      ? 'Relic double-arrow-up height and spacing from mobile seal verified successfully.' 
                      : 'Pending spacing review. Run visual alignment check to verify relic clearance.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Console Log (Slides open beneath) */}
        {showLogs && (
          <div className="xl:col-span-12 glass-pane rounded-lg p-5 border-primary/20 bg-surface-container-lowest/90 font-code-data text-xs text-secondary/90 leading-relaxed shadow-inner overflow-hidden animate-slideDown">
            <div className="flex justify-between items-center border-b border-white/5 pb-2.5 mb-3 text-[10px] text-on-surface-variant/60 font-label-caps select-none">
              <span>RAW VERIFICATION TELEMETRY</span>
              <span className="amber-pulse">CONSOLE DIRECT LINK</span>
            </div>
            <div className="space-y-1.5 font-mono max-h-48 overflow-y-auto pr-2">
              {logs.map((log, idx) => (
                <div key={idx} className="hover:bg-white/[0.02] py-0.5 px-1 rounded transition-colors">
                  {log}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
