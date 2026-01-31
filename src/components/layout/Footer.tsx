import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-sand-100 border-t-2 border-sand-200 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center gap-1.5 text-lg mb-3">
          <span>🇰🇷</span>
          <span>❤️</span>
          <span>🌏</span>
        </div>
        <p className="text-sm text-sand-300 font-medium">
          {t('footer.madeWith')}
        </p>
        <p className="text-xs text-sand-300 mt-1">
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  );
}
