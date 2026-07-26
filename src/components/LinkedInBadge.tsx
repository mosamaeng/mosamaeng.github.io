import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface LinkedInBadgeProps {
  className?: string;
}

export const LinkedInBadge: React.FC<LinkedInBadgeProps> = ({ className = '' }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear previous badge render and re-inject the raw div
    if (containerRef.current) {
      containerRef.current.innerHTML = '';

      const badgeDiv = document.createElement('div');
      badgeDiv.className = 'badge-base LI-profile-badge';
      badgeDiv.setAttribute('data-locale', 'en_US');
      badgeDiv.setAttribute('data-size', 'medium');
      badgeDiv.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
      badgeDiv.setAttribute('data-type', 'VERTICAL');
      badgeDiv.setAttribute('data-vanity', 'muhammad-osama-50b61713a');
      badgeDiv.setAttribute('data-version', 'v1');

      const link = document.createElement('a');
      link.className = 'badge-base__link LI-simple-link';
      link.href = 'https://pk.linkedin.com/in/muhammad-osama-50b61713a?trk=profile-badge';
      link.textContent = 'Muhammad Osama';
      badgeDiv.appendChild(link);

      containerRef.current.appendChild(badgeDiv);

      // Re-trigger LinkedIn's badge rendering script
      if ((window as any).LIRenderAll) {
        (window as any).LIRenderAll();
      }
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`linkedin-badge-wrapper ${className}`}
    />
  );
};
