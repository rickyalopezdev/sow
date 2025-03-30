"use client"

import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  DollarSign, 
  Settings, 
  User 
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: Briefcase,
    badge: "3",
  },
  {
    name: "Services",
    href: "/services",
    icon: FileText,
    badge: "5",
  },
  {
    name: "Rates",
    href: "/rates",
    icon: DollarSign,
    badge: "2",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-full flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <a
          href="/"
          className="flex items-center gap-2 font-semibold"
        >
          <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
            <span className="text-xs font-medium text-primary-foreground">S</span>
          </div>
          <span>SOW App</span>
        </a>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <Button variant="outline" size="sm" className="w-full justify-start gap-2" asChild>
          <a href="/account">
            <User className="h-4 w-4" />
            <span>Account</span>
          </a>
        </Button>
      </div>
    </div>
  )
} 