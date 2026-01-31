import { useTranslation } from 'react-i18next';
import type { Category, AppItem } from '../../types/app';
import AppCard from '../app-card/AppCard';

interface CategorySectionProps {
  category: Category;
  apps: AppItem[];
  isInstalled: (appId: string) => boolean;
  toggleInstalled: (appId: string) => void;
}

const categoryEmojis: Record<string, string> = {
  'maps': '🗺️',
  'transport': '🚕',
  'translation': '🌐',
  'food': '🍜',
  'shopping': '🛒',
  'travel': '✈️',
  'safety': '🛡️',
};

export default function CategorySection({ category, apps, isInstalled, toggleInstalled }: CategorySectionProps) {
  const { t } = useTranslation('apps');

  return (
    <section id={category.id} className="scroll-mt-28">
      <div className="mb-5">
        <h2 className="text-xl font-extrabold text-gray-800 flex items-center gap-2.5">
          <span className="text-2xl">{categoryEmojis[category.icon] || '📱'}</span>
          {t(category.nameKey)}
        </h2>
        <p className="text-sm text-warm-400 mt-1.5 font-medium">
          {t(category.descriptionKey)}
        </p>
        <div className="w-10 h-1 bg-duo-400 rounded-full mt-3" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {apps.map((app) => (
          <AppCard
            key={app.id}
            app={app}
            isInstalled={isInstalled(app.id)}
            onToggleInstalled={() => toggleInstalled(app.id)}
          />
        ))}
      </div>
    </section>
  );
}
