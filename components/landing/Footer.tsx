import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg"></div>
              <span className="text-xl font-bold text-white">SaaS Pro</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Le boilerplate moderne pour lancer votre SaaS B2B rapidement et
              efficacement. Fait avec ❤️ pour les développeurs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Liens Produit */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-white transition">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-white transition">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens Entreprise */}
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} SaaS Pro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
