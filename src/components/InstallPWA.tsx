'use client';

import { useEffect, useState } from 'react';
import { usePWA } from './PWAProvider';

export default function InstallPWA() {
  const { deferredPrompt, onInstall, isInstalled } = usePWA();
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const checkInstallable = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
      const isInstallPromptAvailable = !!deferredPrompt;
      console.log('Checking installable:', {
        isStandalone,
        isInstallPromptAvailable,
        isInstalled,
        deferredPrompt: !!deferredPrompt
      });
      setIsInstallable(isInstallPromptAvailable && !isStandalone && !isInstalled);
    };

    checkInstallable();
    
    // Check again when deferredPrompt or isInstalled changes
    const interval = setInterval(checkInstallable, 1000);
    return () => clearInterval(interval);
  }, [deferredPrompt, isInstalled]);

  const handleInstallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Install button clicked');
    onInstall();
  };

  if (!isInstallable) {
    console.log('Install button hidden - not installable');
    return null;
  }

  return (
    <button
      onClick={handleInstallClick}
      className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg transition-colors"
    >
      Install App
    </button>
  );
}