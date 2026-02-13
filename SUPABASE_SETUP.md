# 🔐 Guide de Configuration Supabase - Détaillé

Ce guide vous accompagne pas à pas dans la configuration de Supabase pour votre boilerplate SaaS.

## 📋 Table des matières

1. [Créer un compte Supabase](#1-créer-un-compte-supabase)
2. [Créer un projet](#2-créer-un-projet)
3. [Configurer la base de données](#3-configurer-la-base-de-données)
4. [Configurer l'authentification](#4-configurer-lauthentification)
5. [Obtenir les clés API](#5-obtenir-les-clés-api)
6. [Tester la configuration](#6-tester-la-configuration)

## 1. Créer un compte Supabase

1. Allez sur [https://supabase.com](https://supabase.com)
2. Cliquez sur "Start your project" (en haut à droite)
3. Vous pouvez vous connecter avec :
   - GitHub (recommandé)
   - Email et mot de passe
4. Suivez les étapes de création de compte

## 2. Créer un projet

1. Une fois connecté, cliquez sur "New Project"
2. Remplissez les informations :
   - **Name** : `saas-boilerplate` (ou le nom de votre choix)
   - **Database Password** : Choisissez un mot de passe fort (notez-le !)
   - **Region** : Choisissez la région la plus proche (Europe West pour la France)
   - **Pricing Plan** : Free (gratuit, suffisant pour débuter)
3. Cliquez sur "Create new project"
4. ⏰ Attendez 1-2 minutes que le projet soit créé

## 3. Configurer la base de données

### 3.1 Créer la table profiles

1. Dans le menu de gauche, cliquez sur **SQL Editor** (icône </> )
2. Cliquez sur **+ New query**
3. Copiez-collez le code SQL suivant :

```sql
-- Étape 1 : Créer la table profiles
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Étape 2 : Activer la sécurité au niveau des lignes (RLS)
alter table profiles enable row level security;

-- Étape 3 : Créer les politiques de sécurité
-- Les utilisateurs peuvent voir leur propre profil
create policy "Les utilisateurs peuvent voir leur propre profil"
  on profiles for select
  using ( auth.uid() = id );

-- Les utilisateurs peuvent mettre à jour leur propre profil
create policy "Les utilisateurs peuvent mettre à jour leur propre profil"
  on profiles for update
  using ( auth.uid() = id );

-- Étape 4 : Fonction pour créer automatiquement un profil
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Étape 5 : Trigger qui s'exécute à chaque inscription
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

4. Cliquez sur **Run** (ou Ctrl/Cmd + Enter)
5. ✅ Vous devriez voir "Success. No rows returned"

### 3.2 Vérifier que la table est créée

1. Dans le menu de gauche, cliquez sur **Table Editor**
2. Vous devriez voir la table "profiles" dans la liste
3. Cliquez dessus pour voir sa structure

## 4. Configurer l'authentification

### 4.1 Configuration de l'authentification email

1. Dans le menu de gauche, cliquez sur **Authentication**
2. Cliquez sur **Providers**
3. Vérifiez que **Email** est activé (il devrait l'être par défaut)

### 4.2 Configuration de l'URL de confirmation

1. Dans **Authentication**, cliquez sur **URL Configuration**
2. Ajoutez ces URLs :
   - **Site URL** : `http://localhost:3000` (pour le développement)
   - **Redirect URLs** : 
     - `http://localhost:3000/auth/callback`
     - `http://localhost:3000/dashboard`
3. Cliquez sur **Save**

### 4.3 Configuration de Google OAuth (OPTIONNEL)

Si vous voulez activer la connexion Google :

#### 4.3.1 Créer des identifiants Google

1. Allez sur [Google Cloud Console](https://console.cloud.google.com)
2. Créez un nouveau projet ou sélectionnez-en un
3. Dans le menu ☰, allez dans **APIs & Services** > **Credentials**
4. Cliquez sur **+ CREATE CREDENTIALS** > **OAuth client ID**

#### 4.3.2 Configurer l'écran de consentement (si demandé)

1. Cliquez sur **CONFIGURE CONSENT SCREEN**
2. Choisissez **External** et cliquez sur **CREATE**
3. Remplissez les informations obligatoires :
   - **App name** : SaaS Boilerplate
   - **User support email** : votre email
   - **Developer contact information** : votre email
4. Cliquez sur **SAVE AND CONTINUE**
5. Dans "Scopes", cliquez sur **ADD OR REMOVE SCOPES**
6. Sélectionnez :
   - `userinfo.email`
   - `userinfo.profile`
7. Cliquez sur **UPDATE** puis **SAVE AND CONTINUE**
8. Dans "Test users", ajoutez votre email pour tester
9. Cliquez sur **SAVE AND CONTINUE**

#### 4.3.3 Créer l'OAuth Client ID

1. Revenez à **Credentials** dans le menu
2. Cliquez sur **+ CREATE CREDENTIALS** > **OAuth client ID**
3. Remplissez :
   - **Application type** : Web application
   - **Name** : SaaS Boilerplate
   - **Authorized JavaScript origins** :
     - `http://localhost:3000`
   - **Authorized redirect URIs** :
     - `https://VOTRE-PROJET.supabase.co/auth/v1/callback`
     
     ⚠️ Remplacez `VOTRE-PROJET` par l'ID de votre projet Supabase (trouvé dans l'URL)
     
4. Cliquez sur **CREATE**
5. 📋 **Copiez** le Client ID et le Client Secret

#### 4.3.4 Configurer dans Supabase

1. Retournez dans Supabase
2. Allez dans **Authentication** > **Providers**
3. Trouvez **Google** dans la liste
4. Activez le toggle
5. Collez :
   - **Client ID** : celui copié depuis Google Cloud
   - **Client Secret** : celui copié depuis Google Cloud
6. Cliquez sur **Save**

## 5. Obtenir les clés API

1. Dans le menu de gauche, cliquez sur **Settings** (icône d'engrenage ⚙️)
2. Cliquez sur **API**
3. Vous verrez plusieurs informations :

### 5.1 Project URL
```
https://abcdefghijklmnop.supabase.co
```
📋 **Copiez cette URL** - c'est votre `NEXT_PUBLIC_SUPABASE_URL`

### 5.2 API Keys

Vous verrez deux clés :
- **anon public** : À utiliser dans votre application (côté client)
- **service_role** : ⚠️ Ne JAMAIS exposer cette clé !

📋 **Copiez la clé "anon public"** - c'est votre `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 5.3 Créer le fichier .env.local

1. À la racine de votre projet, créez un fichier `.env.local`
2. Ajoutez vos clés :

```env
NEXT_PUBLIC_SUPABASE_URL=https://VOTRE-PROJET.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

⚠️ **Remplacez** `VOTRE-PROJET` et la clé par VOS vraies valeurs !

## 6. Tester la configuration

### 6.1 Démarrer l'application

```bash
npm run dev
```

### 6.2 Tester l'inscription

1. Allez sur [http://localhost:3000/signup](http://localhost:3000/signup)
2. Remplissez le formulaire :
   - Nom complet : Test User
   - Email : test@example.com
   - Mot de passe : test123456
3. Cliquez sur "Créer un compte"
4. ✅ Vous devriez être redirigé vers `/dashboard`

### 6.3 Vérifier dans Supabase

1. Dans Supabase, allez dans **Authentication** > **Users**
2. Vous devriez voir votre utilisateur de test
3. Dans **Table Editor** > **profiles**
4. Vous devriez voir le profil créé automatiquement

### 6.4 Tester Google OAuth (si configuré)

1. Sur la page de connexion, cliquez sur le bouton Google
2. Connectez-vous avec votre compte Google
3. ✅ Vous devriez être redirigé vers `/dashboard`

## 🎉 Configuration terminée !

Votre Supabase est maintenant configuré et prêt à l'emploi !

## 🔍 Résolution de problèmes

### "Invalid API key"
- Vérifiez que vous avez copié la bonne clé (anon public)
- Vérifiez qu'il n'y a pas d'espaces avant/après dans `.env.local`
- Redémarrez le serveur de développement

### "Database error: relation 'profiles' does not exist"
- Retournez dans SQL Editor
- Réexécutez le script de création de table
- Vérifiez dans Table Editor que la table existe

### "Failed to fetch"
- Vérifiez votre connexion internet
- Vérifiez que l'URL Supabase est correcte
- Vérifiez que le projet Supabase est actif (vert dans le dashboard)

### "User already registered"
- C'est normal si vous testez avec le même email
- Utilisez un autre email ou supprimez l'utilisateur dans Authentication > Users

## 📚 Ressources supplémentaires

- [Documentation Supabase Auth](https://supabase.com/docs/guides/auth)
- [Documentation Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Documentation Google OAuth](https://supabase.com/docs/guides/auth/social-login/auth-google)

## 💡 Conseils de sécurité

1. ✅ Ne commitez JAMAIS votre fichier `.env.local` dans Git
2. ✅ N'exposez JAMAIS votre `service_role` key
3. ✅ Utilisez Row Level Security (RLS) sur toutes vos tables
4. ✅ En production, changez les URLs dans Supabase Authentication > URL Configuration
5. ✅ Activez la vérification d'email en production

---

**Besoin d'aide ?** Consultez la [documentation Supabase](https://supabase.com/docs) ou posez vos questions !
