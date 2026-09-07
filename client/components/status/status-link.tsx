import Link from "next/link";

type Status = "operational" | "degraded" | "outage";

const statusStyles: Record<Status, { label: string; indicatorClass: string }> =
  {
    operational: {
      label: "All systems operational",
      indicatorClass: "bg-emerald-500",
    },
    degraded: {
      label: "Degraded performance",
      indicatorClass: "bg-amber-400",
    },
    outage: {
      label: "Service disruption",
      indicatorClass: "bg-(--destructive)",
    },
  };

const status: Status = "operational";

export const StatusLink = () => {
  const { label, indicatorClass } = statusStyles[status];

  return (
    <Link
      href="https://status.athanasa.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-8 items-center gap-2 px-2 text-sm text-(--muted-foreground) transition-colors duration-200 hover:text-(--primary)"
      aria-label={`Status: ${label}`}
    >
      <span
        aria-hidden="true"
        className={`size-2 rounded-full ${indicatorClass}`}
      />
      <span>Status</span>
    </Link>
  );
};
