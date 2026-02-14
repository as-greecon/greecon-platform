import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "h-10 w-full rounded-xl border border-border bg-white px-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-400",
        props.className,
      )}
    />
  );
}
