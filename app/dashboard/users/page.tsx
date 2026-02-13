import { Users as UsersIcon, UserPlus, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const users = [
  {
    id: 1,
    name: 'Marie Dubois',
    email: 'marie.dubois@example.com',
    role: 'Admin',
    status: 'Actif',
    avatar: 'M',
  },
  {
    id: 2,
    name: 'Thomas Martin',
    email: 'thomas.martin@example.com',
    role: 'Utilisateur',
    status: 'Actif',
    avatar: 'T',
  },
  {
    id: 3,
    name: 'Sophie Bernard',
    email: 'sophie.bernard@example.com',
    role: 'Utilisateur',
    status: 'Inactif',
    avatar: 'S',
  },
  {
    id: 4,
    name: 'Lucas Petit',
    email: 'lucas.petit@example.com',
    role: 'Modérateur',
    status: 'Actif',
    avatar: 'L',
  },
]

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Utilisateurs</h1>
          <p className="text-gray-600 mt-2">
            Gérez les utilisateurs et leurs permissions
          </p>
        </div>
        <Button>
          <UserPlus size={20} className="mr-2" />
          Ajouter un utilisateur
        </Button>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Rechercher un utilisateur..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
            <option>Tous les rôles</option>
            <option>Admin</option>
            <option>Modérateur</option>
            <option>Utilisateur</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none">
            <option>Tous les statuts</option>
            <option>Actif</option>
            <option>Inactif</option>
          </select>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <UsersIcon className="text-primary-600 mb-2" size={24} />
          <h3 className="text-2xl font-bold text-gray-900">2,543</h3>
          <p className="text-sm text-gray-600">Total utilisateurs</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-green-600 text-xs">✓</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">2,401</h3>
          <p className="text-sm text-gray-600">Utilisateurs actifs</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-yellow-600 text-xs">!</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">142</h3>
          <p className="text-sm text-gray-600">Utilisateurs inactifs</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-primary-600 text-xs">+</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">+156</h3>
          <p className="text-sm text-gray-600">Ce mois-ci</p>
        </div>
      </div>

      {/* Tableau des utilisateurs */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Utilisateur
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Rôle
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Statut
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">
                        {user.avatar}
                      </span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {user.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Actif'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="sm">
                    Modifier
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
