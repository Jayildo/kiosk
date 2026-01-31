import { useTranslation } from 'react-i18next';
import type { BadgeType } from '../../types/app';

const badgeStyles: Record<BadgeType, string> = {
  government: 'bg-sky-100 text-sky-400 border border-sky-200',
  'local-essential': 'bg-duo-100 text-duo-600 border border-duo-200',
  'foreigner-friendly': 'bg-soft-purple-100 text-soft-purple-400 border border-soft-purple-200',
};

interface BadgeTagProps {
  badges: BadgeType[];
}

export default function BadgeTag({ badges }: BadgeTagProps) {
  const { t } = useTranslation('common');

  if (badges.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map((badge) => (
        <span
          key={badge}
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold badge-pop ${badgeStyles[badge]}`}
        >
          {t(`badges.${badge}`)}
        </span>
      ))}
    </div>
  );
}
