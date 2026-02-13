import Link from 'next/link'
import AuthForm from '@/components/auth/AuthForm'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Inscription - SaaS Pro',
  description: 'Créez votre compte SaaS Pro gratuitement',
}

export default function SignupPage() {
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
              Commencez gratuitement
            </h1>
            <p className="text-gray-600">
              Créez votre compte en quelques secondes
            </p>
          </div>

          {/* Avantages */}
          <div className="bg-primary-50 rounded-lg p-4 space-y-2">
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle2 className="text-green-500 mr-2" size={16} />
              <span>Essai gratuit de 14 jours</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle2 className="text-green-500 mr-2" size={16} />
              <span>Aucune carte bancaire requise</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <CheckCircle2 className="text-green-500 mr-2" size={16} />
              <span>Annulez à tout moment</span>
            </div>
          </div>

          {/* Formulaire */}
          <AuthForm mode="signup" />

          {/* Lien vers connexion */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Vous avez déjà un compte ? </span>
            <Link
              href="/login"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Se connecter
            </Link>
          </div>

          {/* CGU */}
          <p className="text-xs text-gray-500 text-center">
            En créant un compte, vous acceptez nos{' '}
            <Link href="/terms" className="text-primary-600 hover:underline">
              Conditions d'utilisation
            </Link>{' '}
            et notre{' '}
            <Link href="/privacy" className="text-primary-600 hover:underline">
              Politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Panneau droit - Image/Info */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-600 to-primary-800 items-center justify-center p-12">
        <div className="max-w-md text-white">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary-500 rounded-full text-sm font-semibold mb-6">
              🚀 Nouveau
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Rejoignez plus de 10,000 entreprises
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Qui utilisent SaaS Pro pour gérer leurs projets et développer leur
            activité plus rapidement.
          </p>
          
          {/* Témoignages */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">👤</span>
              </div>
              <div>
                <h4 className="font-semibold">Marie Dubois</h4>
                <p className="text-primary-100 text-sm">CEO, TechStart</p>
              </div>
            </div>
            <p className="text-primary-50 italic">
              "SaaS Pro nous a permis de lancer notre produit 3 fois plus vite.
              L'infrastructure était déjà là, nous nous sommes concentrés sur
              notre valeur ajoutée."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
