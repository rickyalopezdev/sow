"use client"

import { ProjectManagement } from "@/components/projects/project-management"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-10 space-y-6">
      <div className="flex flex-col items-center text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground max-w-md">
          Create and manage your statement of work projects
        </p>
      </div>
      <ProjectManagement />
    </div>
  )
} 