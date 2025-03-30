"use client"

import { ProjectManagement } from "@/components/projects/project-management"

export default function ProjectsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          Create and manage your projects
        </p>
      </div>
      <div className="mt-8">
        <ProjectManagement />
      </div>
    </div>
  )
} 