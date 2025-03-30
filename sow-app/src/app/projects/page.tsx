"use client"

import { ProjectManagement } from "@/components/projects/project-management"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground max-w-md">
            Create and manage your statement of work projects
          </p>
        </div>
        <ProjectManagement />
      </div>
    </div>
  )
} 