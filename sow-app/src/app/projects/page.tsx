"use client"

import { ProjectManagement } from "@/components/projects/project-management"

export default function ProjectsPage() {
  return (
    <div className="container max-w-4xl py-12 mx-auto px-4">
      <div className="flex flex-col items-center text-center space-y-3 mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground max-w-md">
          Create and manage your statement of work projects
        </p>
      </div>
      <ProjectManagement />
    </div>
  )
} 