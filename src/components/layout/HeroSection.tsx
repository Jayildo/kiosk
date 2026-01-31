import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation('common');

  return (
    <section className="bg-gradient-to-b from-warm-50 to-sand-50 pt-8 pb-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center gap-2 text-3xl mb-4 animate-[bounce-in_0.4s_cubic-bezier(0.34,1.56,0.64,1)]">
          <span>🇰🇷</span>
          <span>📱</span>
          <span>✨</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
          {t('hero.tagline')}
        </h2>
        <p className="text-warm-500 mt-3 text-sm sm:text-base max-w-xl mx-auto font-medium">
          {t('hero.description')}
        </p>
        <div className="flex justify-center mt-5">
          <div className="w-16 h-1 bg-duo-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
