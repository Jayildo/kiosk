import { useTranslation } from 'react-i18next';
import LanguageSelector from '../ui/LanguageSelector';
import InstallPrompt from '../ui/InstallPrompt';

export default function Header() {
  const { t } = useTranslation('common');

  return (
    <header className="bg-white border-b-2 border-sand-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-duo-400 rounded-xl flex items-center justify-center shadow-sm btn-bounce cursor-default">
            <span className="text-white font-black text-lg">K</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-gray-800 tracking-tight leading-tight">
              {t('header.title')}
            </h1>
            <p className="text-warm-400 text-[11px] font-semibold leading-tight">
              {t('header.subtitle')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <InstallPrompt />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
