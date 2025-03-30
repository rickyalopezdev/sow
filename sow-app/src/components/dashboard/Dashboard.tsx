"use client"

import { Briefcase, FileText, DollarSign, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Manage your projects, services, and rates
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Projects Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Active projects in your workspace
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="text-primary text-xs w-full justify-between">
              <a href="/projects">
                View Projects
                <PlusCircle className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Services Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Defined services in your library
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="text-primary text-xs w-full justify-between">
              <a href="/services">
                View Services
                <PlusCircle className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Rates Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rates</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Rate cards for your services
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="ghost" className="text-primary text-xs w-full justify-between">
              <a href="/rates">
                View Rates
                <PlusCircle className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Projects Section */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>
              Your recently created or updated projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              No recent projects. Create a new project to get started.
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full" size="sm">
              <a href="/projects">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create New Project
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Quick Actions Section */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and actions
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button asChild variant="outline" size="sm" className="justify-start">
              <a href="/projects">
                <Briefcase className="h-4 w-4 mr-2" />
                Manage Projects
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="justify-start">
              <a href="/services">
                <FileText className="h-4 w-4 mr-2" />
                Manage Services
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="justify-start">
              <a href="/rates">
                <DollarSign className="h-4 w-4 mr-2" />
                Manage Rates
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 