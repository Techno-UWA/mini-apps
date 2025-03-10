'use client';

import { useState } from 'react';
import { FiDownload, FiCheck } from 'react-icons/fi';
import { usePWA } from '@/components/PWAProvider';

export default function InstallPrompt() {
  const { deferredPrompt, isInstalled, onInstall } = usePWA();
  const [isInstalling, setIsInstalling] = useState(false);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    setIsInstalling(true);
    try {
      await deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        onInstall();
      }
    } catch (err) {
      console.error('Error installing PWA:', err);
    } finally {
      setIsInstalling(false);
    }
  };

  const getButtonText = () => {
    if (isInstalled) return 'Successfully Installed!';
    if (isInstalling) return 'Installing...';
    if (!deferredPrompt) return 'Installation Not Available';
    return 'Install Windsurf Project';
  };

  const getButtonIcon = () => {
    if (isInstalled) return <FiCheck className="w-6 h-6" />;
    return <FiDownload className="w-6 h-6" />;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={deferredPrompt ? handleInstall : undefined}
        disabled={!deferredPrompt || isInstalling || isInstalled}
        className={`
          flex items-center justify-center space-x-3 
          w-full max-w-sm px-8 py-4 rounded-xl
          text-lg font-semibold
          transform transition-all duration-200
          ${isInstalled 
            ? 'bg-green-500 text-white cursor-default' 
            : deferredPrompt 
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        {getButtonIcon()}
        <span>{getButtonText()}</span>
      </button>

      {!isInstalled && (
        <p className="text-gray-500 text-sm">
          {deferredPrompt 
            ? 'Install now for the best experience!' 
            : 'Visit this site in Chrome or Edge to install'}
        </p>
      )}
    </div>
  );
}
