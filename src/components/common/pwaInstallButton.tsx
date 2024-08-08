import usePWAInstaller from "../../utils/hooks/useInstallPwa";

const InstallPWAButton: React.FC = () => {
    const { isPWAInstallable, promptInstall } = usePWAInstaller();
  
    if (!isPWAInstallable) {
      return null;
    }
  
    return (
      <button onClick={promptInstall}>
        Install PWA
      </button>
    );
  };

  export default InstallPWAButton