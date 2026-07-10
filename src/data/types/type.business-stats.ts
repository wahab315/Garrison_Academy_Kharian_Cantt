export type BusinessStat = { value: string; label: string };

export type BusinessStatsProps = {
  stats: readonly BusinessStat[];
  /** Two columns instead of the default four. */
  compact?: boolean;
};
