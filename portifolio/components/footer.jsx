import Link from "next/link"
import { socialLinks } from "@/lib/data"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-900 text-gray-400 border-t border-gray-700">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Victoria DUFATANYE. All rights reserved.</p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="hover:text-teal-400 transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
