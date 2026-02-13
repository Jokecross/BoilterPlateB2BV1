# 🤝 Guide de Contribution

Merci de votre intérêt pour améliorer ce boilerplate ! Ce guide vous aidera à contribuer efficacement.

## 📋 Table des matières

1. [Code de conduite](#code-de-conduite)
2. [Comment contribuer](#comment-contribuer)
3. [Structure du code](#structure-du-code)
4. [Standards de code](#standards-de-code)
5. [Processus de Pull Request](#processus-de-pull-request)

## Code de conduite

- Soyez respectueux et professionnel
- Acceptez les critiques constructives
- Concentrez-vous sur ce qui est le mieux pour la communauté
- Montrez de l'empathie envers les autres membres

## Comment contribuer

### 🐛 Signaler un bug

1. Vérifiez que le bug n'a pas déjà été signalé dans les Issues
2. Créez une nouvelle Issue avec :
   - Un titre clair et descriptif
   - Les étapes pour reproduire le bug
   - Le comportement attendu vs le comportement observé
   - Des captures d'écran si pertinent
   - Votre environnement (OS, version de Node, etc.)

### 💡 Proposer une nouvelle fonctionnalité

1. Créez une Issue pour discuter de la fonctionnalité
2. Expliquez :
   - Pourquoi cette fonctionnalité serait utile
   - Comment elle devrait fonctionner
   - Des exemples d'utilisation

### 🔧 Soumettre des modifications

1. **Fork** le repository
2. **Clone** votre fork :
```bash
git clone https://github.com/VOTRE-USERNAME/saas-boilerplate.git
cd saas-boilerplate
```
3. **Créez une branche** pour vos modifications :
```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```
4. **Installez** les dépendances :
```bash
npm install
```
5. **Faites** vos modifications
6. **Testez** que tout fonctionne :
```bash
npm run dev
```
7. **Committez** vos changements :
```bash
git add .
git commit -m "feat: ajoute ma nouvelle fonctionnalité"
```
8. **Poussez** vers votre fork :
```bash
git push origin feature/ma-nouvelle-fonctionnalite
```
9. **Créez une Pull Request** sur GitHub

## Structure du code

### Organisation des dossiers

```
app/              # Pages et routes Next.js
  ├── (auth)/     # Groupe de routes d'authentification
  └── dashboard/  # Routes du dashboard
components/       # Composants React réutilisables
  ├── auth/       # Composants liés à l'authentification
  ├── dashboard/  # Composants du dashboard
  ├── landing/    # Composants de la landing page
  └── ui/         # Composants UI de base (Button, Input, etc.)
lib/              # Utilitaires et configurations
  └── supabase/   # Configuration et types Supabase
```

### Conventions de nommage

- **Composants** : PascalCase (`MyComponent.tsx`)
- **Fichiers utilitaires** : camelCase (`myUtil.ts`)
- **Dossiers** : kebab-case (`my-folder/`)
- **Variables** : camelCase (`myVariable`)
- **Constantes** : UPPER_SNAKE_CASE (`MY_CONSTANT`)

## Standards de code

### TypeScript

✅ **À FAIRE**
```typescript
// Types explicites
interface User {
  id: string
  email: string
  name: string
}

// Fonctions typées
function getUserName(user: User): string {
  return user.name
}
```

❌ **À ÉVITER**
```typescript
// Types implicites "any"
function getUserName(user: any) {
  return user.name
}
```

### React

✅ **À FAIRE**
```tsx
// Composants fonctionnels avec typage
interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}
```

❌ **À ÉVITER**
```tsx
// Composants sans typage
export function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>
}
```

### Tailwind CSS

✅ **À FAIRE**
```tsx
// Classes organisées et lisibles
<div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md">
  {/* Contenu */}
</div>
```

❌ **À ÉVITER**
```tsx
// Classes trop longues sur une ligne
<div className="flex items-center justify-between p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300">
```

### Commentaires

✅ **Commentez** :
- La logique complexe
- Les hacks ou solutions temporaires
- Les fonctions publiques (JSDoc)

❌ **Ne commentez pas** :
- Le code évident
- Ce que fait chaque ligne

```tsx
// ✅ BON
/**
 * Calcule le montant total avec les taxes
 * @param amount - Montant HT
 * @param taxRate - Taux de taxe (0.20 pour 20%)
 * @returns Montant TTC
 */
function calculateTotal(amount: number, taxRate: number): number {
  return amount * (1 + taxRate)
}

// ❌ MAUVAIS
// Cette fonction additionne deux nombres
function add(a, b) {
  return a + b // Retourne la somme
}
```

## Processus de Pull Request

### Checklist avant de soumettre

- [ ] Mon code respecte les conventions du projet
- [ ] J'ai testé mes modifications en local
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Mon code ne génère pas d'erreurs de lint
- [ ] J'ai ajouté des commentaires pour le code complexe
- [ ] Mes commits sont clairs et descriptifs

### Format des commits

Utilisez le format suivant :

```
<type>: <description courte>

<description détaillée optionnelle>
```

**Types de commits** :
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage (pas de changement de code)
- `refactor:` Refactoring
- `test:` Ajout de tests
- `chore:` Tâches de maintenance

**Exemples** :
```bash
feat: ajoute la fonctionnalité de recherche

Implémente une barre de recherche dans le header
avec filtrage en temps réel.

fix: corrige le bug de connexion Google

Le callback OAuth ne redirige pas correctement
vers le dashboard.
```

### Revue de code

Votre Pull Request sera revue par un mainteneur qui :
- Vérifiera que le code respecte les standards
- Testera les modifications
- Peut demander des changements
- Fusionnera une fois approuvé

**Soyez patient et réceptif aux commentaires !**

## 💡 Bonnes pratiques

### 1. Gardez les composants petits

```tsx
// ✅ BON : Composant petit et réutilisable
function UserAvatar({ user }: { user: User }) {
  return (
    <img 
      src={user.avatar} 
      alt={user.name}
      className="w-10 h-10 rounded-full"
    />
  )
}

// ❌ MAUVAIS : Composant trop gros
function UserProfile() {
  // 200 lignes de code...
}
```

### 2. Utilisez des hooks personnalisés

```tsx
// ✅ BON : Logique extraite dans un hook
function useUser() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetchUser().then(setUser)
  }, [])
  
  return user
}
```

### 3. Évitez la duplication

```tsx
// ✅ BON : Fonction réutilisable
function formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR')
}

// ❌ MAUVAIS : Duplication de code
<div>{new Date().toLocaleDateString('fr-FR')}</div>
<div>{new Date().toLocaleDateString('fr-FR')}</div>
```

### 4. Gérez les erreurs

```tsx
// ✅ BON : Gestion des erreurs
async function fetchUser() {
  try {
    const response = await fetch('/api/user')
    if (!response.ok) throw new Error('Fetch failed')
    return await response.json()
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}

// ❌ MAUVAIS : Pas de gestion d'erreur
async function fetchUser() {
  const response = await fetch('/api/user')
  return await response.json()
}
```

## 🎓 Pour les débutants

Si vous êtes nouveau dans la contribution open-source :

1. **Commencez petit** : Corrigez une typo, améliorez la documentation
2. **Posez des questions** : N'hésitez pas à demander de l'aide dans les Issues
3. **Apprenez** : Lisez le code existant pour comprendre comment il fonctionne
4. **Soyez patient** : Les mainteneurs sont souvent bénévoles

## 📚 Ressources utiles

- [Guide GitHub pour les Pull Requests](https://docs.github.com/en/pull-requests)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Guide TypeScript](https://www.typescriptlang.org/docs/)
- [Guide React](https://react.dev/learn)
- [Guide Tailwind CSS](https://tailwindcss.com/docs)

## ❓ Questions

Si vous avez des questions, vous pouvez :
- Ouvrir une Issue sur GitHub
- Consulter la documentation
- Regarder les Pull Requests existantes

**Merci de contribuer à ce projet ! 🎉**
