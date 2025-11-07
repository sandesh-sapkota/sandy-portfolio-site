import { useEffect, useState } from 'react';

/**
 * Hook to detect if device is mobile
 * Returns true for screens < 768px (Tailwind md breakpoint)
 */
export function useMobileDetect() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set initial value after mount to avoid hydration mismatch
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    setIsLoaded(true);

    // Debounced resize handler
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return { isMobile, isLoaded };
}

export default useMobileDetect;
