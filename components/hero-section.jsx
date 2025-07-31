import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/data"
import { TypingEffect } from "./typing-effect"

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-gray-100 overflow-hidden">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Hi I am <span className="text-teal-400">Victoria DUFATANYE</span>
          </h1>
          <h2 className="text-5xl font-semibold text-gray-200">
            <TypingEffect text="Web Developer" speed={50} />
          </h2>
          <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Aspiring Full-Stack Developer with hands-on experience building real-world applications.
          Skilled in creating responsive portfolios from design files, blog management systems, and event platforms with authentication and file uploads.
          Passionate about transforming ideas into functional, user-friendly apps using JavaScript, HTML, CSS, React, Node.js, and TypeScript.
          Quick to learn, proactive, and always eager to explore new technologies.
        Ready to collaborate and contribute effectively in dynamic development teams.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white">
              <Link href="#contact">More About Me</Link>
            </Button>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-teal-400 bg-transparent"
                >
                  <Link href={link.url} aria-label={link.name}>
                    <link.icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto aspect-square overflow-hidden rounded-xl border-4 border-teal-400 shadow-lg lg:order-last">
          <Image
            src="/WhatsApp Image 2025-07-31 at 19.01.24.jpeg?height=500&width=200"
            alt="Victoria DUFATANYE"
            width={400}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
