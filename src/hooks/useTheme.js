import { useState, useEffect } from 'react';

export function useTheme() {
  const [manualTheme, setManualTheme] = useState(null); // 'light' or 'dark' or null for system
  const [mediaQuery, setMediaQuery] = useState(null);

  const currentTheme = manualTheme || (mediaQuery?.matches ? 'dark' : 'light');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setMediaQuery(mq);

    const handleThemeChange = () => {
      if (!manualTheme) {
        applyTheme();
      }
    };

    mq.addEventListener('change', handleThemeChange);

    // Load from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      setManualTheme(savedTheme);
    }
    applyTheme();

    return () => {
      mq.removeEventListener('change', handleThemeChange);
    };
  }, [manualTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setManualTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme();
  };

  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  };

  return {
    currentTheme,
    toggleTheme,
  };
}