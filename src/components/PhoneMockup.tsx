import React, { useState, useEffect, useRef } from 'react';

const PhoneMockup = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [shouldScroll, setShouldScroll] = useState(false);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const contentHeight = contentRef.current.offsetHeight;
      const containerHeight = containerRef.current.offsetHeight;
      setShouldScroll(contentHeight > containerHeight);
    }
  }, [contentRef, containerRef]);

  return (
    <div className="relative w-[310px] h-[590px] mx-auto mt-8 mb-12"> {/* Slightly increased width */}
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gray-800 rounded-[3rem] border-4 border-gray-700 shadow-xl">
        {/* Screen */}
        <div className="absolute top-[12px] left-[12px] right-[12px] bottom-[12px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="h-6 bg-gray-900/50 flex justify-between items-center px-6">
            <span className="text-[10px]">{time}</span>
            <div className="w-16 h-4 bg-gray-800 rounded-full" />
          </div>

          {/* Scrolling Content Section */}
          <div ref={containerRef} className="p-6 overflow-hidden h-full relative">
            <div
              ref={contentRef}
              className={`${shouldScroll ? 'animate-slow-scroll' : ''} space-y-4`}
              style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <h1
                className="font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', whiteSpace: 'normal', wordWrap: 'break-word' }}
              >
                Hi! I'm <span className="text-white text-[1.2em]">Arka</span>, a software developer with a knack for Android magic!
              </h1>
              <p className="text-gray-300 max-w-2xl" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                Crafting exceptional mobile experiences with Kotlin and Java
              </p>
            </div>
          </div>

          {/* Animated Code Lines */}
          <div className="p-4 space-y-2 animate-slide">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded"
                style={{
                  width: `${Math.random() * 40 + 60}%`,
                  opacity: 1 - i * 0.1
                }}
              />
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 right-4 w-8 h-8 bg-blue-400/20 rounded-lg animate-float" />
          <div className="absolute bottom-1/3 left-6 w-6 h-6 bg-purple-400/20 rounded-full animate-float-delayed" />
          <div className="absolute top-1/2 right-12 w-4 h-4 bg-green-400/20 rounded-lg animate-spin-slow" />
        </div>
      </div>

      {/* Camera Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-full" />

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />
    </div>
  );
};

export default PhoneMockup;
