'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">SaaS Pro</span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition">
              Fonctionnalités
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
              Tarifs
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition">
              À propos
            </Link>
          </div>

          {/* Boutons CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Connexion</Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary">Commencer</Button>
            </Link>
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="#features"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link
              href="#pricing"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Link
              href="#about"
              className="block py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <div className="pt-4 space-y-2">
              <Link href="/login" className="block">
                <Button variant="ghost" className="w-full">
                  Connexion
                </Button>
              </Link>
              <Link href="/signup" className="block">
                <Button variant="primary" className="w-full">
                  Commencer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
