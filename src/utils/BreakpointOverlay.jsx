import React, { useState, useEffect } from 'react';

const BreakpointOverlay = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = (width) => {
    if (width < 640) return 'sm';
    if (width < 768) return 'md';
    if (width < 1024) return 'lg';
    if (width < 1280) return 'xl';
    return '2xl';
  };

  const breakpoint = getBreakpoint(windowSize.width);

  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <p>{`Breakpoint: ${breakpoint}`}</p>
        <p>{`Width: ${windowSize.width}px`}</p>
        <p>{`Height: ${windowSize.height}px`}</p>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  zIndex: 9999,
};

const contentStyle = {
  textAlign: 'center',
  fontSize: '14px',
};

export default BreakpointOverlay;