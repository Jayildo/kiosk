import { useTranslation } from 'react-i18next';
import { useInstallPrompt } from '../../hooks/useInstallPrompt';

export default function InstallPrompt() {
  const { t } = useTranslation('common');
  const { canInstall, promptInstall } = useInstallPrompt();

  if (!canInstall) return null;

  return (
    <button
      onClick={promptInstall}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-duo-400 text-white text-sm font-bold hover:bg-duo-500 transition-all btn-bounce border-b-[3px] border-duo-600"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {t('install.addToHomeScreen')}
    </button>
  );
}
