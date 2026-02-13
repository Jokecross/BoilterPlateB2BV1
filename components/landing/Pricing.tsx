import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Gratuit',
    description: 'Parfait pour tester et développer',
    features: [
      'Authentification complète',
      'Dashboard de base',
      'Support communautaire',
      '1 projet',
      'Déploiement illimité',
    ],
    cta: 'Commencer gratuitement',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '29€',
    period: '/mois',
    description: 'Pour les équipes qui veulent aller plus loin',
    features: [
      'Tout du plan Starter',
      'Projets illimités',
      'Support prioritaire',
      'Composants avancés',
      'Mises à jour incluses',
      'Licence commerciale',
    ],
    cta: 'Essayer 14 jours gratuit',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    description: 'Pour les grandes organisations',
    features: [
      'Tout du plan Pro',
      'Support dédié',
      'Formation personnalisée',
      'Développement sur mesure',
      'SLA garanti',
      'Audit de sécurité',
    ],
    cta: 'Nous contacter',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tarifs simples et transparents
          </h2>
          <p className="text-xl text-gray-600">
            Commencez gratuitement, passez en pro quand vous êtes prêt
          </p>
        </div>

        {/* Grille de tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-primary-600 text-white shadow-2xl scale-105 border-2 border-primary-700'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded-full">
                    Le plus populaire
                  </span>
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>

              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={plan.highlighted ? 'text-primary-100' : 'text-gray-600'}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <p
                className={`mb-6 ${
                  plan.highlighted ? 'text-primary-100' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              <Link href="/signup">
                <Button
                  variant={plan.highlighted ? 'secondary' : 'primary'}
                  className="w-full mb-6"
                >
                  {plan.cta}
                </Button>
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check
                      className={`mr-3 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-primary-200' : 'text-green-500'
                      }`}
                      size={20}
                    />
                    <span
                      className={
                        plan.highlighted ? 'text-primary-50' : 'text-gray-600'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
