import { TrendingUp, Users, FileText, DollarSign } from 'lucide-react'

const stats = [
  {
    name: 'Utilisateurs actifs',
    value: '2,543',
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
  },
  {
    name: 'Projets en cours',
    value: '48',
    change: '+4.3%',
    changeType: 'increase',
    icon: FileText,
  },
  {
    name: 'Revenus mensuels',
    value: '12,450€',
    change: '+23.1%',
    changeType: 'increase',
    icon: DollarSign,
  },
  {
    name: 'Taux de conversion',
    value: '3.24%',
    change: '+0.5%',
    changeType: 'increase',
    icon: TrendingUp,
  },
]

const recentActivities = [
  {
    id: 1,
    user: 'Marie Dubois',
    action: 'a créé un nouveau projet',
    project: 'Site E-commerce',
    time: 'Il y a 2 minutes',
  },
  {
    id: 2,
    user: 'Thomas Martin',
    action: 'a modifié',
    project: 'Application Mobile',
    time: 'Il y a 15 minutes',
  },
  {
    id: 3,
    user: 'Sophie Bernard',
    action: 'a commenté',
    project: 'Refonte UI/UX',
    time: 'Il y a 1 heure',
  },
  {
    id: 4,
    user: 'Lucas Petit',
    action: 'a terminé',
    project: 'API REST v2',
    time: 'Il y a 3 heures',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Vue d'ensemble de votre activité et de vos performances
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.name}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon className="text-primary-600" size={24} />
                </div>
                <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600">{stat.name}</p>
            </div>
          )
        })}
      </div>

      {/* Graphique et activités récentes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Graphique placeholder */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Performances mensuelles
          </h2>
          <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <TrendingUp size={48} className="mx-auto mb-4 text-primary-600" />
              <p className="font-medium">Graphique des performances</p>
              <p className="text-sm text-gray-500 mt-1">
                Intégrez votre bibliothèque de graphiques préférée
              </p>
            </div>
          </div>
        </div>

        {/* Activités récentes */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Activité récente
          </h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-xs">
                    {activity.user.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span>{' '}
                    {activity.action}{' '}
                    <span className="font-medium">{activity.project}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section supplémentaire */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Prêt à passer au niveau supérieur ?
            </h2>
            <p className="text-primary-100">
              Découvrez nos fonctionnalités premium et boostez votre productivité
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  )
}
