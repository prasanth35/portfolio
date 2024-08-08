import { useState, useEffect } from "react";

interface UsePWAInstallerResult {
  isPWAInstallable: boolean;
  promptInstall: () => void;
}

const usePWAInstaller = (): UsePWAInstallerResult => {
  const [isPWAInstallable, setIsPWAInstallable] = useState(false);
  const [installPromptEvent, setInstallPromptEvent] = useState<any | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setIsPWAInstallable(true);
      setInstallPromptEvent(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const promptInstall = () => {
    if (installPromptEvent) {
      installPromptEvent.prompt();
      installPromptEvent.userChoice.then((choiceResult: { outcome: string; }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the PWA install prompt");
        } else {
          console.log("User dismissed the PWA install prompt");
        }
        setIsPWAInstallable(false);
      });
    }
  };

  return { isPWAInstallable, promptInstall };
};

export default usePWAInstaller;