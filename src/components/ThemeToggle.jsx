import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

const modes = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

/**
 * Cycles Light → Dark → System. Mount-gated to avoid hydration mismatch.
 */
export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300"
        disabled
      >
        <Sun className="h-4 w-4 opacity-40" />
      </button>
    );
  }

  const current = theme || "dark";
  const CurrentIcon =
    modes.find((m) => m.value === current)?.Icon ||
    (resolvedTheme === "dark" ? Moon : Sun);

  const cycleTheme = () => {
    const order = ["light", "dark", "system"];
    const idx = order.indexOf(current);
    setTheme(order[(idx + 1) % order.length]);
  };

  return (
    <div className="relative flex items-center">
      {/* Compact cycle button (mobile) */}
      <button
        type="button"
        onClick={cycleTheme}
        aria-label={`Theme: ${current}. Click to switch.`}
        title={`Theme: ${current}`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-black/5 text-neutral-700 transition-all hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:border-white/20 dark:hover:bg-white/10 sm:hidden"
      >
        <CurrentIcon className="h-4 w-4" />
      </button>

      {/* Segmented control (sm+) */}
      <div
        className="hidden sm:inline-flex items-center gap-0.5 rounded-xl border border-black/10 bg-black/5 p-0.5 dark:border-white/10 dark:bg-white/5"
        role="group"
        aria-label="Color theme"
      >
        {modes.map(({ value, label, Icon }) => {
          const active = current === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setTheme(value)}
              aria-label={label}
              aria-pressed={active}
              title={label}
              className={[
                "inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200",
                active
                  ? "bg-white text-slate-900 shadow-sm dark:bg-white/15 dark:text-cyan-300"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100",
              ].join(" ")}
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
