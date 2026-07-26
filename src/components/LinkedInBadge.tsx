import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const LinkedInBadge: React.FC = () => {
  const { theme } = useTheme();
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Re-trigger LinkedIn script processing on mount & theme change
    const reloadLinkedInScript = () => {
      // Remove any existing script instance
      const existingScript = document.getElementById('linkedin-badge-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Create new script tag
      const script = document.createElement('script');
      script.id = 'linkedin-badge-script';
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      // If LinkedIn SDK's LIRenderAll function is already available, trigger it
      if ((window as any).LIRenderAll) {
        try {
          (window as any).LIRenderAll();
        } catch (e) {
          // ignore SDK parse race conditions
        }
      }
    };

    reloadLinkedInScript();
  }, [theme]);

  const currentTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <div className="flex items-center justify-center w-full min-h-[250px]">
      <div
        key={`${currentTheme}-${Date.now()}`}
        ref={badgeRef}
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme={currentTheme}
        data-type="VERTICAL"
        data-vanity="muhammad-osama-50b61713a"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link sr-only"
          href="https://pk.linkedin.com/in/muhammad-osama-50b61713a?trk=profile-badge"
        >
          Muhammad Osama
        </a>
      </div>
    </div>
  );
};
