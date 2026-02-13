import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  ArrowUp,
  ArrowDown,
} from 'lucide-react'

const metrics = [
  {
    name: 'Revenus totaux',
    value: '124,500€',
    change: '+23.1%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    name: 'Nouveaux utilisateurs',
    value: '1,234',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Taux de conversion',
    value: '3.24%',
    change: '+0.5%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    name: "Taux d'engagement",
    value: '68.4%',
    change: '-2.1%',
    trend: 'down',
    icon: Activity,
  },
]

const topPages = [
  { page: '/dashboard', views: 12453, change: '+15%' },
  { page: '/projects', views: 8234, change: '+8%' },
  { page: '/users', views: 6712, change: '+12%' },
  { page: '/analytics', views: 4521, change: '+5%' },
  { page: '/settings', views: 3890, change: '-3%' },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Statistiques</h1>
          <p className="text-gray-600 mt-2">
            Analysez vos performances et vos métriques clés
          </p>
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
          <option>Derniers 7 jours</option>
          <option>Derniers 30 jours</option>
          <option>Derniers 90 jours</option>
          <option>Cette année</option>
        </select>
      </div>

      {/* Métriques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <div
              key={metric.name}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Icon className="text-primary-600" size={24} />
                </div>
                <div
                  className={`flex items-center px-2 py-1 rounded text-xs font-semibold ${
                    metric.trend === 'up'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {metric.trend === 'up' ? (
                    <ArrowUp size={14} className="mr-1" />
                  ) : (
                    <ArrowDown size={14} className="mr-1" />
                  )}
                  {metric.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {metric.value}
              </h3>
              <p className="text-sm text-gray-600">{metric.name}</p>
            </div>
          )
        })}
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique 1 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Évolution des revenus
          </h2>
          <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <TrendingUp size={48} className="mx-auto mb-4 text-primary-600" />
              <p className="font-medium">Graphique de revenus</p>
              <p className="text-sm text-gray-500 mt-1">
                Intégrez Chart.js, Recharts, ou votre bibliothèque préférée
              </p>
            </div>
          </div>
        </div>

        {/* Graphique 2 */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Croissance des utilisateurs
          </h2>
          <div className="h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <Users size={48} className="mx-auto mb-4 text-green-600" />
              <p className="font-medium">Graphique utilisateurs</p>
              <p className="text-sm text-gray-500 mt-1">
                Visualisez la croissance de votre base utilisateurs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pages les plus visitées */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Pages les plus visitées
        </h2>
        <div className="space-y-4">
          {topPages.map((page, index) => (
            <div
              key={page.page}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="flex items-center flex-1">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold text-sm">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{page.page}</p>
                  <p className="text-sm text-gray-600">
                    {page.views.toLocaleString()} vues
                  </p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  page.change.startsWith('+')
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {page.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sources de trafic */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Sources de trafic
          </h2>
          <div className="space-y-4">
            {[
              { source: 'Recherche organique', percent: 45, color: 'blue' },
              { source: 'Direct', percent: 30, color: 'green' },
              { source: 'Réseaux sociaux', percent: 15, color: 'purple' },
              { source: 'Référents', percent: 10, color: 'orange' },
            ].map((item) => (
              <div key={item.source}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{item.source}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.percent}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-${item.color}-600 h-2 rounded-full`}
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Appareils utilisés
          </h2>
          <div className="space-y-4">
            {[
              { device: 'Desktop', percent: 60, color: 'primary' },
              { device: 'Mobile', percent: 30, color: 'green' },
              { device: 'Tablette', percent: 10, color: 'purple' },
            ].map((item) => (
              <div key={item.device}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{item.device}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {item.percent}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-${item.color}-600 h-2 rounded-full`}
                    style={{ width: `${item.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
