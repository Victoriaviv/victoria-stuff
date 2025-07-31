"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ResumeSection() {
  return (
    <section id="resume" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-gray-100">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-teal-400">My Resume</h2>
          <p className="max-w-2xl text-gray-300 md:text-lg">
            A summary of my education, skills, and professional experience.
          </p>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-700 text-gray-100 rounded-lg overflow-hidden">
            <TabsTrigger value="education" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              Skills
            </TabsTrigger>
            <TabsTrigger value="experience" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
              Experience
            </TabsTrigger>
          </TabsList>

          {/* EDUCATION TAB */}
          <TabsContent value="education" className="mt-8">
            <div className="grid gap-6 justify-center">
              <Card className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm hover:shadow-md transition max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="text-teal-400">High School Diploma (PCM)</CardTitle>
                  <CardDescription className="text-gray-400">
                    Ecole Secondaire Saint Vincent Muhoza &middot; Graduated 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                    <li>Physics, Chemistry, Mathematics (PCM) combination</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SKILLS TAB */}
          <TabsContent value="skills" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 justify-center">
              <Card className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-teal-400">Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                    <li>React & Next.js</li>
                    <li>JavaScript & TypeScript</li>
                    <li>HTML, CSS, Tailwind CSS</li>
                    <li>Figma to Code</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-teal-400">Backend & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                    <li>Node.js, Express.js, REST APIs</li>
                    <li>MongoDB, PostgreSQL, Supabase</li>
                    <li>Git & GitHub</li>
                    <li>Deployment with Vercel</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* EXPERIENCE TAB */}
          <TabsContent value="experience" className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 justify-center">
              <Card className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-teal-400">Women Coding Bootcamp</CardTitle>
                  <CardDescription className="text-gray-400">Company: Amalitech · Completed: 1 week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                    <li>Learned HTML, CSS, JavaScript basics</li>
                    <li>Built small frontend projects</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border border-gray-700 rounded-xl shadow-sm hover:shadow-md transition">
                <CardHeader>
                  <CardTitle className="text-teal-400">TakeHerTech Program</CardTitle>
                  <CardDescription className="text-gray-400">Organization: kLab · Dec 2024 – Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm">
                    <li>React, Next.js, Node.js, Express.js, TypeScript</li>
                    <li>REST APIs, MongoDB, PostgreSQL, Supabase</li>
                    <li>Tailwind CSS, CSS, GitHub, Vercel</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
