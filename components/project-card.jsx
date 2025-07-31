import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectCard({ project }) {
  return (
    <Card className="bg-gray-900 border-gray-700 text-gray-100 h-full flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="p-0">
        <Image
          src={project.image }
          alt={project.title}
          width={400}
          height={300}
          className="rounded-t-lg object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-bold text-teal-400 mb-2">{project.title}</CardTitle>
        <CardDescription className="text-gray-300 text-sm">
          {project.description.length > 120
            ? `${project.description.slice(0, 117)}...`
            : project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        {project.link && project.link !== "#" ? (
          <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 text-white">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </Link>
          </Button>
        ) : (
          <Button disabled className="w-full bg-gray-700 text-gray-400 cursor-not-allowed">
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
