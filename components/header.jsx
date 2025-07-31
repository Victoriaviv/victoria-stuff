"use client"

import Link from "next/link"
import { Menu, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="fixed top-0 z-50 flex justify-between h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-gray-100 border-b border-gray-700">
      <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-teal-400">
        <span>{"<VICKY/>"}</span>
      </Link>
      
      <div className="flex items-center gap-6">
        <nav className="hidden lg:flex gap-9 text-2xl font-bold">
          <Link href="#home" className="hover:text-teal-400 transition-colors">
            Home
          </Link>
          <Link href="#resume" className="hover:text-teal-400 transition-colors">
            Resume
          </Link>
          <Link href="#portfolio" className="hover:text-teal-400 transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="hover:text-teal-400 transition-colors">
            Contact
          </Link>
        </nav>
    
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-gray-100">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 text-gray-100 border-l border-gray-700">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-teal-400 mb-6">
              <Code className="h-6 w-6" />
              <span>{"<VICKY/>"}</span>
            </Link>
            <div className="grid gap-4 py-6">
              <Link href="#home" className="flex w-full items-center py-2 text-lg font-semibold hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link href="#resume" className="flex w-full items-center py-2 text-lg font-semibold hover:text-teal-400 transition-colors">
                Resume
              </Link>
              <Link href="#portfolio" className="flex w-full items-center py-2 text-lg font-semibold hover:text-teal-400 transition-colors">
                Portfolio
              </Link>
              <Link href="#contact" className="flex w-full items-center py-2 text-lg font-semibold hover:text-teal-400 transition-colors">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
