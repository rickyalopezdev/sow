import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Calendar,
  FileText,
  BarChart3,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Projects', href: '/projects', icon: FolderKanban },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Documents', href: '/documents', icon: FileText },
  { name: 'Reports', href: '/reports', icon: BarChart3 },
];

const teams = [
  { name: 'Heroicons', href: '/teams/heroicons', initial: 'H' },
  { name: 'Tailwind Labs', href: '/teams/tailwind', initial: 'T' },
  { name: 'Workcation', href: '/teams/workcation', initial: 'W' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col border-r bg-white">
      <div className="p-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-y-7 px-4">
        <nav className="flex flex-1 flex-col gap-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                )}
              >
                <Icon
                  className={cn(
                    'h-5 w-5 shrink-0',
                    isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div>
          <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
          <nav className="mt-2 flex flex-col gap-1">
            {teams.map((team) => (
              <Link
                key={team.name}
                href={team.href}
                className="group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white text-gray-400 border-gray-200 group-hover:border-primary group-hover:text-primary">
                  {team.initial}
                </span>
                {team.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto pb-4">
          <div className="flex items-center gap-x-4 px-3 py-3 text-sm">
            <div className="relative h-8 w-8 rounded-full bg-gray-50">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/60" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">Tom Cook</span>
              <span className="text-xs text-gray-500">View profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 