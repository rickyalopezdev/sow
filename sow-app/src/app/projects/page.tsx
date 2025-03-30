"use client"

import { ProjectManagement } from "@/components/projects/project-management"

export default function ProjectsPage() {
  return (
    <div className="container max-w-5xl py-10 mx-auto">
      <div className="flex flex-col items-center text-center space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground max-w-md">
          Create and manage your statement of work projects
        </p>
      </div>
      <ProjectManagement />
    </div>
  )
} 