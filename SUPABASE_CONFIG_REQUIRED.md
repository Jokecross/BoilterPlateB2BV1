# ⚠️ CONFIGURATION SUPABASE OBLIGATOIRE

## 🚨 TRÈS IMPORTANT - À FAIRE AVANT DE TESTER

Si vous ne faites pas ces configurations, **la connexion ne fonctionnera pas** !

---

## 1️⃣ Désactiver la confirmation d'email (OBLIGATOIRE)

Par défaut, Supabase demande une confirmation d'email. Pour le développement, il faut la désactiver.

### Étapes :

1. Allez dans votre projet Supabase
2. Cliquez sur **Authentication** (dans le menu gauche)
3. Cliquez sur **Providers**
4. Cliquez sur **Email** dans la liste
5. **DÉCOCHEZ** la case **"Confirm email"**
6. Cliquez sur **Save**

![Important](https://via.placeholder.com/15/ff0000/000000?text=+) **Sans cette étape, la connexion ne fonctionnera jamais !**

---

## 2️⃣ Configurer les URLs autorisées

### Étapes :

1. Dans Supabase, allez dans **Authentication** > **URL Configuration**
2. Configurez :

**Site URL** :
```
http://localhost:3000
```

**Redirect URLs** (ajoutez toutes ces lignes) :
```
http://localhost:3000/**
http://localhost:3000/auth/callback
http://localhost:3000/dashboard
http://localhost:3000/login
http://localhost:3000/signup
```

3. Cliquez sur **Save**

---

## 3️⃣ Vérifier que le SQL a bien été exécuté

1. Allez dans **Table Editor**
2. Vous devez voir la table **profiles**
3. Cliquez dessus
4. Vous devez voir les colonnes : `id`, `email`, `full_name`, `avatar_url`, `created_at`, `updated_at`

Si la table n'existe pas, réexécutez le fichier **SETUP_SUPABASE.sql**

---

## 4️⃣ Test final

### Créer un compte de test

1. Allez sur `/signup`
2. Remplissez :
   - Nom : Test User
   - Email : test@test.com
   - Mot de passe : test123456
3. Cliquez sur "Créer un compte"
4. ✅ Vous devez être redirigé vers `/dashboard`

### Se déconnecter

1. Cliquez sur "Déconnexion" dans la sidebar
2. ✅ Vous devez revenir sur `/login`

### Se reconnecter

1. Sur `/login`, entrez :
   - Email : test@test.com
   - Mot de passe : test123456
2. Cliquez sur "Se connecter"
3. ✅ Vous devez retourner sur `/dashboard`

---

## 🐛 Si ça ne marche toujours pas

### Erreur "Failed to fetch"

**Causes possibles** :
1. L'email confirmation est toujours activée → Retournez au point 1️⃣
2. Les URLs ne sont pas configurées → Retournez au point 2️⃣
3. Les clés dans `.env` sont incorrectes → Revérifiez-les

### Erreur "Invalid login credentials"

**Solutions** :
1. Le user n'existe pas → Recréez le compte
2. Le mot de passe est incorrect → Utilisez le bon mot de passe
3. L'email confirmation est activée → Retournez au point 1️⃣

### Vérifier dans Supabase

1. Allez dans **Authentication** > **Users**
2. Vous devez voir votre utilisateur
3. Vérifiez la colonne **"Confirmed At"** :
   - Si elle est **vide** → L'email n'est pas confirmé
   - Si elle est **remplie** → L'email est confirmé ✅

---

## ✅ Checklist finale

Avant de tester, vérifiez que :

- [ ] ✅ Email confirmation DÉSACTIVÉE dans Supabase
- [ ] ✅ URLs configurées dans Supabase
- [ ] ✅ Table profiles créée (SQL exécuté)
- [ ] ✅ Fichier .env rempli avec les bonnes clés
- [ ] ✅ npm install exécuté
- [ ] ✅ npm run dev lancé

Si toutes les cases sont cochées, **ça DOIT fonctionner** ! 🚀

---

**En cas de doute, suivez cette checklist dans l'ordre. C'est la configuration minimum pour que l'authentification fonctionne.**
