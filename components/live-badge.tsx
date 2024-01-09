import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

export const LiveBadge = ({ className }: LiveBadgeProps) => {
  return (
    <div
      className={cn(
        "bg-rose-500 text-center p-0.5 px-1.5 text-[10px] border border-background font-semibold tracking-wide rounded-md uppercase",
        className
      )}
    >
      Live
    </div>
  );
};
