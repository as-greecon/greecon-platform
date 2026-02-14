"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Building2, ChartColumnBig, Cog, FileBarChart2, LayoutGrid, Menu, Search, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const navItems = [
  { href: "/overview", label: "Overview", icon: LayoutGrid },
  { href: "/sites", label: "Sites", icon: Building2 },
  { href: "/assets", label: "Assets", icon: ChartColumnBig },
  { href: "/alarms", label: "Alarms", icon: Bell },
  { href: "/automations", label: "Automations", icon: Workflow },
  { href: "/reports", label: "Reports", icon: FileBarChart2 },
  { href: "/settings", label: "Settings", icon: Cog },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background">
      <aside className={cn("border-r border-border bg-white p-4 transition-all", collapsed ? "w-[88px]" : "w-64")}>
        <div className="mb-8 flex items-center justify-between px-2">
          <span className={cn("text-sm font-semibold tracking-wide", collapsed && "hidden")}>Greecon</span>
          <button onClick={() => setCollapsed((v) => !v)} className="rounded-lg border border-border p-2 text-neutral-500 hover:text-neutral-900">
            <Menu size={16} />
          </button>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-10 items-center gap-3 rounded-xl px-3 text-sm text-neutral-600 transition",
                  active ? "bg-muted text-neutral-900" : "hover:bg-muted",
                )}
              >
                <item.icon size={16} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="flex-1">
        <header className="sticky top-0 z-20 border-b border-border bg-background/80 px-8 py-4 backdrop-blur">
          <div className="mx-auto flex w-full max-w-7xl items-center gap-4">
            <div className="relative max-w-md flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
            <button className="h-10 rounded-xl border border-border bg-white px-4 text-sm text-neutral-600">Site Switcher</button>
            <button className="h-10 rounded-xl border border-border bg-white px-4 text-sm text-neutral-600">User Menu</button>
          </div>
        </header>
        <main className="px-8 py-8">
          <div className="mx-auto w-full max-w-7xl space-y-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
