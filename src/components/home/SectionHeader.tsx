import type { ReactNode } from 'react';

export const SectionHeader = ({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) => (
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
    <div>
      {eyebrow && <p className="text-xs font-semibold tracking-widest uppercase text-violet-600 mb-2">{eyebrow}</p>}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">{title}</h2>
      {description && <p className="text-slate-600 mt-2 max-w-2xl">{description}</p>}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);
