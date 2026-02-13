'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { User, Mail, Key, Bell } from 'lucide-react'

export default function SettingsPage() {
  const supabase = createClient()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  })

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        setFormData({
          fullName: user.user_metadata?.full_name || '',
          email: user.email || '',
        })
      }
    }
    getUser()
  }, [supabase.auth])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const { error } = await supabase.auth.updateUser({
        data: { full_name: formData.fullName },
      })

      if (error) throw error
      setMessage({ type: 'success', text: 'Profil mis à jour avec succès !' })
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Paramètres</h1>
        <p className="text-gray-600 mt-2">
          Gérez vos informations personnelles et vos préférences
        </p>
      </div>

      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Profil */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center mb-6">
          <User className="text-gray-600 mr-2" size={24} />
          <h2 className="text-xl font-semibold text-gray-900">
            Informations du profil
          </h2>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              placeholder="Jean Dupont"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              L'email ne peut pas être modifié pour des raisons de sécurité
            </p>
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </Button>
        </form>
      </div>

      {/* Sécurité */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center mb-6">
          <Key className="text-gray-600 mr-2" size={24} />
          <h2 className="text-xl font-semibold text-gray-900">Sécurité</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">Mot de passe</h3>
              <p className="text-sm text-gray-600">
                Dernière modification il y a 30 jours
              </p>
            </div>
            <Button variant="outline">Modifier</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">
                Authentification à deux facteurs
              </h3>
              <p className="text-sm text-gray-600">
                Ajoutez une couche de sécurité supplémentaire
              </p>
            </div>
            <Button variant="outline">Activer</Button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center mb-6">
          <Bell className="text-gray-600 mr-2" size={24} />
          <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">Emails de notification</h3>
              <p className="text-sm text-gray-600">
                Recevez des mises à jour sur vos projets
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">
                Notifications push
              </h3>
              <p className="text-sm text-gray-600">
                Recevez des alertes en temps réel
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">
                Newsletter hebdomadaire
              </h3>
              <p className="text-sm text-gray-600">
                Restez informé de nos nouveautés
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Zone de danger */}
      <div className="bg-white rounded-xl p-6 border border-red-200">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Zone de danger
        </h2>
        <p className="text-gray-600 mb-4">
          Une fois votre compte supprimé, toutes vos données seront définitivement
          effacées. Cette action est irréversible.
        </p>
        <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
          Supprimer mon compte
        </Button>
      </div>
    </div>
  )
}
