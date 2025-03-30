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
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-2xl">Projects</CardTitle>
            <CardDescription>
              Manage your projects and their details
            </CardDescription>
          </div>
          <ProjectForm onSave={handleSaveProject} />
        </CardHeader>
        <CardContent>
          <ProjectList
            projects={projects}
            onEdit={handleEditProject}
            onDelete={handleDeleteProject}
          />
        </CardContent>
      </Card>
    </div>
  )
} 