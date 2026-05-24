import React, { useState, useRef, useEffect } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'system-welcome',
      content: 'Your inquiry awaits the forge of truth. How shall we expand the archives today?',
      title: 'Welcome, Noble Seeker',
      icon: 'auto_awesome',
    },
    {
      id: 2,
      sender: 'ai',
      senderName: 'TruthForge Core',
      isVerified: true,
      content: 'The concept of "Royal Obsidian" architecture originates from the intersection of high-fantasy aesthetics and technical precision. It prioritizes depth through tonal layering and utilizes amber accents to signify "Heroic" interactions.',
      time: 'Just now',
    },
    {
      id: 3,
      sender: 'user',
      senderName: 'Sir Verifier',
      content: 'Can you analyze the progress of my recent verification quests in the Southern Realm?',
      time: 'Just now',
    },
    {
      id: 4,
      sender: 'ai',
      senderName: 'TruthForge Core',
      isVerified: true,
      content: 'Analysis complete. Your influence in the Southern Realm has reached critical density.',
      time: 'Just now',
      metrics: [
        { label: 'SUCCESS RATE', value: '94.2%', colorClass: 'text-secondary' },
        { label: 'REPUTATION GAIN', value: '+1,450 HP', colorClass: 'text-tertiary' }
      ]
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [debugMode, setDebugMode] = useState(false);
  const [verifiedSaved, setVerifiedSaved] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (scrollContainerRef.current && showInput) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('debug') === 'layout') {
      setDebugMode(true);
      setShowInput(false); // Force hide input to show arrow in guide bounds
    }
  }, []);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Calculate distance from bottom
    const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;

    // If scrolled up by more than 80px, hide input and show arrow
    if (distanceFromBottom > 80) {
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };

  const scrollToBottom = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
    setShowInput(true);
  };

  const handleConfirmPlacement = () => {
    localStorage.setItem('verification_mobile_arrow', 'passed');
    setVerifiedSaved(true);
    // Redirect back to verification portal after a short delay
    setTimeout(() => {
      window.location.href = '/verification';
    }, 1000);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      senderName: 'Sir Verifier',
      content: inputValue,
      time: 'Just now',
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Mock AI reply
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        senderName: 'TruthForge Core',
        isVerified: true,
        content: `Acknowledged, seeker. I have processed your input: "${inputValue}". The archives have been updated with 99.8% precision index.`,
        time: 'Just now',
        metrics: [
          { label: 'DATA INTEGRITY', value: '99.8%', colorClass: 'text-secondary' },
          { label: 'ARCHIVAL GAIN', value: '+350 HP', colorClass: 'text-primary' }
        ]
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section className="flex-1 flex flex-col relative bg-surface h-[calc(100vh-80px-40px)] md:h-[calc(100vh-80px-40px)] min-h-[500px] overflow-hidden">
      {/* Chat Scroll Area */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 pb-48 md:pb-36 scroll-smooth"
      >
        {messages.map((msg) => {
          if (msg.sender === 'system-welcome') {
            return (
              <div key={msg.id} className="max-w-3xl mx-auto flex flex-col items-center text-center py-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-2xl">{msg.icon}</span>
                </div>
                <h2 className="font-prestige text-2xl text-on-surface mb-1">{msg.title}</h2>
                <p className="font-body-md text-sm text-on-surface-variant max-w-md opacity-80">{msg.content}</p>
              </div>
            );
          }

          if (msg.sender === 'ai') {
            return (
              <div key={msg.id} className="max-w-4xl mx-auto flex gap-4 md:gap-6 items-start">
                {/* AI Avatar */}
                <div className="flex-shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/30 text-primary">
                  <span className="material-symbols-outlined text-lg">temp_preferences_custom</span>
                </div>

                <div className="flex-1 space-y-2 relative">
                  <div className="flex items-center gap-2">
                    <span className="font-label-caps text-xs text-primary uppercase tracking-wider font-bold">{msg.senderName}</span>
                    {msg.isVerified && (
                      <span className="material-symbols-outlined text-secondary text-sm font-bold amber-pulse">verified</span>
                    )}
                  </div>
                  
                  {/* Glass Pane Message bubble */}
                  <div className="glass-pane p-5 rounded-xl border border-white/10 shadow-xl space-y-4">
                    <p className="font-prestige text-base text-on-surface leading-relaxed opacity-95">
                      {msg.content}
                    </p>

                    {/* Conditional rendering of metrics grid */}
                    {msg.metrics && (
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {msg.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-surface-container-lowest/80 p-3 rounded border border-white/5">
                            <p className="font-label-caps text-[9px] text-on-surface-variant/70 tracking-widest">{metric.label}</p>
                            <p className={`font-code-data text-lg ${metric.colorClass} font-bold mt-1`}>{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }

          // User message
          return (
            <div key={msg.id} className="max-w-4xl mx-auto flex gap-4 md:gap-6 flex-row-reverse items-start">
              {/* User Avatar */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border border-tertiary/40">
                <img 
                  alt="User" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8_Pim7-t7IKgWP4DZ_soZ3hI-wMDXlUpQsIEjfBZjAwMEfIMFqQivEwhtZ55MYnWU42F9mV7ZBGXl0u__XtNIYj6MiYbY0YWDMxNgF61bsT4bZHUhBhsno5sY2g327_gWk655V21aC54vxjF8ZTCzDtlgol7hDiXp4XVevryAr8bOJjNIckI4nrxxabb3RhKPbJF47bY_daYShD07Hsq2WpkgZcSmArLNj7MtmqVCGVsOozR1jB6lxzMfx9sCKuRPdNvijNU2DJot"
                />
              </div>

              <div className="flex-1 space-y-2 text-right">
                <div className="flex items-center gap-2 justify-end">
                  <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider font-semibold">{msg.senderName}</span>
                </div>
                <div className="bg-surface-container-high/50 p-5 rounded-xl border border-white/5 inline-block text-left max-w-[85%] md:max-w-xl">
                  <p className="font-body-md text-sm text-on-surface leading-relaxed">{msg.content}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isTyping && (
          <div className="max-w-4xl mx-auto flex gap-4 md:gap-6 items-center">
            <div className="flex-shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/30 text-primary">
              <span className="material-symbols-outlined text-lg">temp_preferences_custom</span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container/60 px-4 py-3 rounded-lg border border-white/5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Composer Area (Positioned above mobile bottom footer at bottom-16, md:bottom-0) */}
      <div className={`absolute bottom-16 md:bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/90 to-transparent transition-all duration-500 ease-in-out ${showInput ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-4xl mx-auto relative">
          {/* Draggable Handle Decoration */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full cursor-grab active:cursor-grabbing hover:bg-white/20 transition-colors"></div>

          <div className="relative flex items-center">
            <textarea 
              className="w-full bg-[#090b0f] border border-white/10 rounded-xl px-5 py-4 pr-14 font-body-md text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:ring-1 focus:ring-primary focus:border-primary focus:outline-none transition-all resize-none overflow-hidden" 
              placeholder="What are you About.To do?" 
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              onClick={handleSend}
              className="absolute right-3.5 w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors shadow-lg active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </div>

          {/* Action bar below input */}
          <div className="mt-3.5 flex justify-between items-center px-1">
            <div className="flex gap-4">
              <button className="flex items-center gap-1.5 text-on-surface-variant/70 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">attach_file</span>
                <span className="font-label-caps text-[9px] uppercase tracking-wider">Attach</span>
              </button>
              <button className="flex items-center gap-1.5 text-on-surface-variant/70 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">mic</span>
                <span className="font-label-caps text-[9px] uppercase tracking-wider">Voice</span>
              </button>
            </div>
            <div className="flex gap-2 items-center text-secondary/70">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary amber-pulse"></span>
              <span className="font-code-data text-[9px] uppercase tracking-wider font-bold">System Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pull-up Arrow Button (Repositioned at bottom-24 on mobile to sit exactly 32px above mobile navbar) */}
      <div className={`absolute bottom-24 md:bottom-6 left-0 w-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${!showInput ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto' : 'translate-y-6 opacity-0 scale-75 pointer-events-none'}`}>
        {debugMode && (
          <div className="mb-3 bg-surface-container-high/95 border border-secondary/50 text-on-surface font-code-data text-[10px] p-3 rounded-lg shadow-2xl flex flex-col items-center gap-1.5 max-w-[280px] select-none backdrop-blur-xl animate-fadeIn">
            <span className="font-bold text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">tune</span>
              AETHERIC ALIGNMENT VERIFIER
            </span>
            <span className="text-on-surface-variant text-[9px] text-center">Verify that the double-arrow-up relic floats exactly 32 cubits clear above the bottom runic seal.</span>
            <button 
              onClick={handleConfirmPlacement}
              className="mt-1 bg-secondary text-on-secondary px-3 py-1 rounded font-bold hover:bg-secondary-container transition-colors active:scale-95 text-[9px] tracking-wider font-label-caps"
            >
              {verifiedSaved ? 'SAVED (REDIRECTING...)' : 'SEAL POSITION'}
            </button>
          </div>
        )}

        <div className={`relative ${debugMode ? 'border-2 border-dashed border-secondary/80 p-2 rounded-full bg-secondary/5 shadow-[0_0_20px_rgba(78,222,163,0.15)]' : ''}`}>
          <button 
            onClick={scrollToBottom}
            className="group flex flex-col items-center gap-1 transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer"
          >
            <div className="w-24 h-1.5 rounded-full bg-tertiary/20 group-hover:bg-tertiary/40 transition-colors shadow-[0_0_10px_rgba(245,158,11,0.1)]"></div>
            <div className="glass-pane p-4 rounded-full border border-tertiary/30 bg-surface-container-high/60 backdrop-blur-xl shadow-2xl heroic-glow">
              <span className="material-symbols-outlined text-tertiary text-3xl animate-bounce">keyboard_double_arrow_up</span>
            </div>
            <div className="mt-2 flex gap-1.5 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary amber-pulse shadow-[0_0_5px_rgba(78,222,163,0.5)]"></span>
              <span className="font-code-data text-[8px] text-on-surface-variant uppercase tracking-[0.2em] opacity-60">System Ready</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
