"use client"

import { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
} 