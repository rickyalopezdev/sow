"use client"

import { ProjectManagement } from "@/components/projects/project-management"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-16 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2 text-blue-700">
            Statement of Work Projects
          </h1>
          <p className="text-slate-600 max-w-md mx-auto">
            Create and manage your statement of work projects efficiently
          </p>
        </div>
        <ProjectManagement />
      </div>
    </div>
  )
} 