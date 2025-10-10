"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.footer
      id="contact"
      className="py-section relative bg-gradient-to-t from-black to-gray-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Main Column - 8 cols */}
          <div className="md:col-span-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-white/75 mb-4">Have a project in mind or want to collaborate?</p>
            <p className="text-white/75 mb-6">info@arturogrande.com</p>

            <Button
              className="glass glass-hover border border-border hover:border-white/40 text-white font-semibold px-6 py-3 mb-6"
              onClick={() => window.open("https://wa.me/5491154000421?text=Hello!", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>

            <div className="flex space-x-4">
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-border"
                onClick={() => window.open("https://twitter.com/ArtuGrande", "_blank")}
              >
                <Image src="/icons/x.svg" alt="X" width={20} height={20} />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-border"
                onClick={() => window.open("https://www.instagram.com/artugrande/", "_blank")}
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-border"
                onClick={() => window.open("https://www.linkedin.com/in/arturo-grande/", "_blank")}
              >
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-border"
                onClick={() => window.open("https://medium.com/@infoarturogrande", "_blank")}
              >
                <Image src="/icons/medium.svg" alt="Medium" width={20} height={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links - 2 cols */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-white/75 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-white/75 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("talks")}
                className="block text-white/75 hover:text-white transition-colors"
              >
                Talks
              </button>
              <Link href="/blog" className="block text-white/75 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Resources - 2 cols */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-white/75 hover:text-white transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block text-white/75 hover:text-white transition-colors"
              >
                FAQ
              </button>
              <Link href="/music" className="block text-white/75 hover:text-white transition-colors">
                Music
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-border">
          <div className="text-white/75 text-sm">
            Made with <span className="text-red-500">♥</span> by{" "}
            <span className="font-bold text-white">ARTUROGRANDE.COM</span> © 2025
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
