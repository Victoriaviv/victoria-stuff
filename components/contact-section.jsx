"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-teal-400">Get in Touch</h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-700 text-gray-100">
            <CardHeader>
              <CardTitle className="text-teal-400">Contact Information</CardTitle>
              <CardDescription className="text-gray-300">
                You can reach me through the following channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">victoriadufatanye2@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">+250 794469581</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">Kigali, Rwanda</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-700 text-gray-100">
            <CardHeader>
              <CardTitle className="text-teal-400">Send a Message</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.target.name.value;
                  const email = e.target.email.value;
                  const message = e.target.message.value;

                  const text = encodeURIComponent(
                    `Hello, my name is ${name} (${email}):\n${message}`
                  );
                  const whatsappUrl = `https://wa.me/250794469581?text=${text}`;

                  alert("Message sent successfully!");
                  window.open(whatsappUrl, "_blank");
                }}
              >
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-400"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-400"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-400 min-h-[120px]"
                  required
                />
                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
