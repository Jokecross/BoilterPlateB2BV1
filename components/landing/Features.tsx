import { Shield, Zap, Users, Code, Lock, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Déploiement rapide',
    description: 'Démarrez votre projet en quelques minutes avec notre configuration optimisée.',
  },
  {
    icon: Shield,
    title: 'Sécurité renforcée',
    description: 'Authentification sécurisée avec Supabase et Google OAuth intégrés.',
  },
  {
    icon: Users,
    title: 'Gestion utilisateurs',
    description: 'Système complet de gestion des utilisateurs et des profils.',
  },
  {
    icon: Code,
    title: 'Code propre',
    description: 'TypeScript, Next.js 14 avec App Router, et bonnes pratiques.',
  },
  {
    icon: Lock,
    title: 'Routes protégées',
    description: 'Middleware de protection et gestion avancée des permissions.',
  },
  {
    icon: Smartphone,
    title: 'Responsive design',
    description: 'Interface moderne et adaptée à tous les écrans avec Tailwind CSS.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-600">
            Un boilerplate complet avec toutes les fonctionnalités essentielles
            pour votre SaaS B2B
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <Icon className="text-primary-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
