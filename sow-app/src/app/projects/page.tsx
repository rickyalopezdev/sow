"use client"

import { ProjectManagement } from "@/components/projects/project-management"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-[800px] space-y-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-[450px] mx-auto">
            Create and manage your statement of work projects efficiently
          </p>
        </div>
        <ProjectManagement />
      </div>
    </div>
  )
} 