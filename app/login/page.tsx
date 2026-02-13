import Link from 'next/link'
import AuthForm from '@/components/auth/AuthForm'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Connexion - SaaS Pro',
  description: 'Connectez-vous à votre compte SaaS Pro',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Panneau gauche - Formulaire */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          {/* Bouton retour */}
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour à l'accueil
          </Link>

          {/* En-tête */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg"></div>
              <span className="text-2xl font-bold text-gray-900">SaaS Pro</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Bon retour !
            </h1>
            <p className="text-gray-600">
              Connectez-vous pour accéder à votre dashboard
            </p>
          </div>

          {/* Formulaire */}
          <AuthForm mode="login" />

          {/* Lien vers inscription */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Pas encore de compte ? </span>
            <Link
              href="/signup"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </div>

      {/* Panneau droit - Image/Info */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-600 to-primary-800 items-center justify-center p-12">
        <div className="max-w-md text-white">
          <h2 className="text-4xl font-bold mb-6">
            Bienvenue sur votre espace SaaS
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Accédez à tous vos outils, gérez vos projets et collaborez avec
            votre équipe en toute simplicité.
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Sécurité renforcée</h3>
                <p className="text-primary-100 text-sm">
                  Vos données sont protégées avec un chiffrement de niveau entreprise
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-sm">✓</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Synchronisation temps réel</h3>
                <p className="text-primary-100 text-sm">
                  Collaborez efficacement avec votre équipe en temps réel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
