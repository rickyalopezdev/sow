"use client"

import { useState } from "react"
import { ProjectForm, Project } from "./project-form"
import { ProjectList } from "./project-list"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

export function ProjectManagement() {
  const [projects, setProjects] = useState<Project[]>([])
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const handleSaveProject = (project: Project) => {
    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => 
        p.id === project.id ? project : p
      ))
      setEditingProject(null)
    } else {
      // Add new project
      setProjects([...projects, project])
    }
  }

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
    // Note: In a real app, you'd open the edit modal here
  }

  const handleDeleteProject = (projectId: string) => {
    setProjects(projects.filter(project => project.id !== projectId))
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border-2 border-blue-200 overflow-hidden">
      <div className="flex flex-row items-center justify-between p-6 border-b-2 border-blue-100 bg-gradient-to-r from-blue-50 to-slate-50">
        <div>
          <h2 className="text-2xl font-bold text-blue-700">Project Dashboard</h2>
          <p className="text-slate-600 mt-1">
            Add, edit, and remove projects from your workspace
          </p>
        </div>
        <ProjectForm onSave={handleSaveProject} />
      </div>
      <div>
        <ProjectList
          projects={projects}
          onEdit={handleEditProject}
          onDelete={handleDeleteProject}
        />
      </div>
    </div>
  )
} 