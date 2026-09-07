import { GlobeIcon } from "lucide-react";

export const LanguageSwitcher = () => {
  return (
    <button
      type="button"
      aria-label="Change language"
      aria-haspopup="dialog"
      title="Change language"
      className="cursor-pointer flex h-8 w-8 items-center justify-center rounded-full border border-(--border) bg-(--background) text-(--muted-foreground) transition-colors duration-200 hover:text-(--primary)"
    >
      <GlobeIcon size={16} />
    </button>
  );
};
