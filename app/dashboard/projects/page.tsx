import { FileText, Plus, Clock, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const projects = [
  {
    id: 1,
    name: 'Site E-commerce',
    description: 'Refonte complète de la boutique en ligne',
    status: 'En cours',
    progress: 65,
    team: 4,
    deadline: '15 Mars 2026',
    color: 'blue',
  },
  {
    id: 2,
    name: 'Application Mobile',
    description: 'Développement app iOS et Android',
    status: 'En cours',
    progress: 40,
    team: 6,
    deadline: '30 Avril 2026',
    color: 'green',
  },
  {
    id: 3,
    name: 'Refonte UI/UX',
    description: 'Nouveau design system et composants',
    status: 'Terminé',
    progress: 100,
    team: 3,
    deadline: '1 Février 2026',
    color: 'purple',
  },
  {
    id: 4,
    name: 'API REST v2',
    description: 'Migration vers nouvelle architecture',
    status: 'En retard',
    progress: 30,
    team: 5,
    deadline: '10 Février 2026',
    color: 'red',
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Projets</h1>
          <p className="text-gray-600 mt-2">
            Gérez vos projets et suivez leur progression
          </p>
        </div>
        <Button>
          <Plus size={20} className="mr-2" />
          Nouveau projet
        </Button>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <FileText className="text-primary-600 mb-2" size={24} />
          <h3 className="text-2xl font-bold text-gray-900">48</h3>
          <p className="text-sm text-gray-600">Total projets</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <Clock className="text-blue-600 mb-2" size={24} />
          <h3 className="text-2xl font-bold text-gray-900">32</h3>
          <p className="text-sm text-gray-600">En cours</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <CheckCircle2 className="text-green-600 mb-2" size={24} />
          <h3 className="text-2xl font-bold text-gray-900">14</h3>
          <p className="text-sm text-gray-600">Terminés</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <AlertCircle className="text-red-600 mb-2" size={24} />
          <h3 className="text-2xl font-bold text-gray-900">2</h3>
          <p className="text-sm text-gray-600">En retard</p>
        </div>
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            {/* En-tête du projet */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start">
                <div
                  className={`w-12 h-12 bg-${project.color}-100 rounded-lg flex items-center justify-center mr-4`}
                >
                  <FileText className={`text-${project.color}-600`} size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            </div>

            {/* Progression */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Progression</span>
                <span className="font-semibold text-gray-900">
                  {project.progress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`bg-${project.color}-600 h-2 rounded-full transition-all`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Informations */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-1" />
                  {project.deadline}
                </div>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[...Array(Math.min(project.team, 3))].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full border-2 border-white flex items-center justify-center"
                      >
                        <span className="text-white text-xs font-semibold">
                          {i + 1}
                        </span>
                      </div>
                    ))}
                    {project.team > 3 && (
                      <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-gray-600 text-xs font-semibold">
                          +{project.team - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Terminé'
                    ? 'bg-green-100 text-green-700'
                    : project.status === 'En retard'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton voir plus */}
      <div className="text-center">
        <Button variant="outline">Voir tous les projets</Button>
      </div>
    </div>
  )
}
