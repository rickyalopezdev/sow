"use client"

import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Project } from "./project-form"
import { Edit, Trash2 } from "lucide-react"

interface ProjectListProps {
  projects: Project[]
  onEdit: (project: Project) => void
  onDelete: (projectId: string) => void
}

export function ProjectList({ projects, onEdit, onDelete }: ProjectListProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return "—"
    
    const date = new Date(dateString)
    return date.toLocaleDateString()
  }

  return (
    <div className="w-full">
      <Table>
        <TableCaption className="caption-bottom border-t px-6 py-4 text-center text-sm text-muted-foreground">
          A list of your projects
        </TableCaption>
        <TableHeader className="bg-muted/50">
          <TableRow className="hover:bg-transparent border-b">
            <TableHead className="w-[40%] font-medium">Project Name</TableHead>
            <TableHead className="font-medium">Start Date</TableHead>
            <TableHead className="font-medium">End Date</TableHead>
            <TableHead className="font-medium">Type</TableHead>
            <TableHead className="text-right w-[100px] font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-32 text-center text-muted-foreground">
                No projects found. Click "New Project" to create one.
              </TableCell>
            </TableRow>
          ) : (
            projects.map((project) => (
              <TableRow key={project.id} className="border-b hover:bg-muted/50">
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{formatDate(project.startDate)}</TableCell>
                <TableCell>{formatDate(project.endDate)}</TableCell>
                <TableCell className="capitalize">{project.type}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(project)}
                      className="h-8 w-8"
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(project.id)}
                      className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
} 