"use client"

import { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
} 