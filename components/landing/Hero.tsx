import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <span className="mr-2">🚀</span>
            Nouveau : Déployez en 5 minutes
          </div>

          {/* Titre Principal */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Lancez votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              SaaS B2B
            </span>
            <br />
            en quelques minutes
          </h1>

          {/* Sous-titre */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Un boilerplate moderne et complet avec authentification, dashboard,
            et intégrations prêtes à l'emploi. Concentrez-vous sur votre
            produit, pas sur l'infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/signup">
              <Button size="lg" className="group">
                Commencer gratuitement
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline">
                Voir la démo
              </Button>
            </Link>
          </div>

          {/* Points clés */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" size={20} />
              Sans carte bancaire
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" size={20} />
              Setup en 5 minutes
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" size={20} />
              Support prioritaire
            </div>
          </div>
        </div>

        {/* Image/Mockup */}
        <div className="mt-16 max-w-5xl mx-auto animate-slide-up">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 aspect-video flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-2xl font-semibold">Votre Dashboard SaaS</p>
                <p className="text-primary-100 mt-2">Moderne • Rapide • Sécurisé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
