import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerElement = document.getElementById('site-header');
        const headerOffset = headerElement?.getBoundingClientRect().height ?? 0;

        if (targetId === 'footer') {
          const top = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
          requestAnimationFrame(() => window.scrollTo({ top, behavior: 'smooth' }));
          return;
        }

        const extraOffset = targetId === 'about' ? -16 : 0;
        const targetTop = window.scrollY + targetElement.getBoundingClientRect().top - headerOffset - extraOffset;

        requestAnimationFrame(() => window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' }));
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}
