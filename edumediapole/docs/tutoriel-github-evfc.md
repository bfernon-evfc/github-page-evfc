# Tutoriel — Créer et gérer le repo GitHub privé du Pack EVFC
**Niveau** : Débutant | **Prérequis** : Compte GitHub créé, VS Code installé  
**Durée estimée** : 30 à 45 minutes

---

## Vue d'ensemble du processus

```
GitHub (en ligne)          VS Code (sur ton ordi)
─────────────────          ──────────────────────
Créer le repo privé   →    Cloner le repo
                           Créer les dossiers
                           Ajouter les fichiers
                      ←    Pousser vers GitHub
Inviter les apprenants
```

---

## Étape 1 — Créer le repo privé sur GitHub

1. Va sur [https://github.com](https://github.com) et connecte-toi.

2. Clique sur le bouton vert **"New"** (en haut à gauche) ou sur le **"+"** en haut à droite → **"New repository"**.

3. Remplis le formulaire :

   | Champ | Valeur à saisir |
   |---|---|
   | **Repository name** | `pack-evfc-fpa` |
   | **Description** | `Pack Formation Écosystème EVFC — Accès restreint FPA` |
   | **Visibility** | ⚫ **Private** ← obligatoire |
   | **Add a README file** | ✅ Cocher |
   | **Add .gitignore** | Laisser "None" |
   | **Choose a license** | Laisser "None" |

4. Clique sur **"Create repository"**.

> ✅ Le repo est créé. Tu te retrouves sur la page principale du repo vide (avec juste le README).

---

## Étape 2 — Installer l'extension GitHub dans VS Code

1. Ouvre **VS Code**.

2. Clique sur l'icône **Extensions** dans la barre latérale gauche (icône 4 carrés) ou appuie sur `Ctrl+Shift+X`.

3. Dans le champ de recherche, tape : `GitHub Pull Requests`

4. Installe l'extension **"GitHub Pull Requests and Issues"** publiée par GitHub.

5. Installe aussi **"GitLens"** (optionnel mais très utile pour visualiser l'historique).

---

## Étape 3 — Connecter VS Code à ton compte GitHub

1. Dans VS Code, ouvre la palette de commandes : `Ctrl+Shift+P`

2. Tape : `GitHub: Sign in` et appuie sur Entrée.

3. Une fenêtre de navigateur s'ouvre → Clique sur **"Authorize Visual-Studio-Code"**.

4. Reviens dans VS Code — tu es maintenant connecté.

> Si la commande n'apparaît pas, va dans **Comptes** (icône personne en bas à gauche de VS Code) → "Sign in with GitHub".

---

## Étape 4 — Cloner le repo sur ton ordinateur

**Cloner** = télécharger une copie locale du repo sur ton disque.

1. Sur la page GitHub de ton repo, clique sur le bouton vert **"Code"**.

2. Copie l'URL HTTPS affichée (ex : `https://github.com/ton-pseudo/pack-evfc-fpa.git`).

3. Dans VS Code, ouvre la palette : `Ctrl+Shift+P`

4. Tape : `Git: Clone` → Entrée.

5. Colle l'URL copiée → Entrée.

6. Choisis un dossier sur ton ordinateur où stocker le projet (ex : `Documents/formations/`).

7. Clique sur **"Open"** quand VS Code propose d'ouvrir le repo cloné.

> ✅ VS Code affiche maintenant le dossier `pack-evfc-fpa` dans l'explorateur de fichiers (panneau gauche).

---

## Étape 5 — Créer la structure de dossiers

Dans VS Code, clique sur l'icône **"New Folder"** dans l'explorateur pour créer chaque dossier.

Structure à créer :

```
pack-evfc-fpa/
├── README.md                  ← déjà présent (créé par GitHub)
├── CHANGELOG.md               ← à créer
├── INSTALLATION.md            ← à créer (guide apprenant)
│
├── docs/                      ← documentation de cadrage
│   ├── cadrage-v3.1.pdf
│   ├── referentiel-EVFC.pdf
│   ├── guide-ERA.pdf
│   └── referentiel-operationnel.pdf
│
├── skills/                    ← fichiers .skill des modules
│   ├── M_INTRO-simulateur-edc-evfc.skill
│   ├── M0-progression-pedagogique-evfc.skill
│   ├── M1-evfc-sequence-designer.skill
│   ├── M2-ai-training-designer.skill
│   ├── M3-evfc-faire-scenario-generator.skill
│   ├── M4-qcm-evfc-validator.skill
│   ├── M5-grilles-criteriees.skill
│   ├── M6-era-loop-coach.skill
│   └── M7-n8n-automatisation.skill
│
└── scripts/
    └── QCM-AppsScript.gs
```

**Pour créer un dossier dans VS Code :**
- Clique droit dans l'explorateur → **"New Folder"**
- Tape le nom du dossier → Entrée

**Pour créer un fichier :**
- Clique droit sur le dossier cible → **"New File"**
- Tape le nom avec l'extension → Entrée

---

## Étape 6 — Ajouter les fichiers du pack

1. Dans VS Code, ouvre l'**Explorateur de fichiers** Windows/Mac à l'emplacement où sont tes fichiers `.skill`, `.pdf`, `.gs`.

2. **Glisse-dépose** chaque fichier dans le bon dossier dans VS Code (panneau gauche).

> ⚠️ Les fichiers `.pdf` sont binaires — VS Code ne les affiche pas, c'est normal. Ils seront bien transmis tel quel sur GitHub.

---

## Étape 7 — Enregistrer et envoyer les fichiers sur GitHub

C'est la partie **Git** : 3 actions toujours dans le même ordre.

### 7.1 — Ouvrir le panneau Source Control

Clique sur l'icône **branche** dans la barre latérale gauche (3ème icône) ou `Ctrl+Shift+G`.

Tu vois la liste de tous les fichiers modifiés/ajoutés avec un **U** (Untracked = nouveau fichier).

### 7.2 — Stage (préparer les fichiers)

Clique sur le **"+"** à côté de chaque fichier, ou clique sur **"Stage All Changes"** (icône "+" à côté de "Changes") pour tout sélectionner d'un coup.

Les fichiers passent dans la section **"Staged Changes"**.

### 7.3 — Commit (enregistrer localement)

Dans le champ texte en haut du panneau Source Control, tape un message descriptif :

```
Ajout structure initiale pack EVFC v3.1
```

Clique sur le bouton **"Commit"** (coche ✓).

### 7.4 — Push (envoyer sur GitHub)

Clique sur **"Sync Changes"** (bouton qui apparaît après le commit) ou va dans le menu **"..."** → **"Push"**.

> ✅ Rafraîchis la page GitHub dans ton navigateur — tous tes fichiers apparaissent.

---

## Étape 8 — Modifier un fichier et mettre à jour le repo

Pour chaque mise à jour future (nouvelle version d'un skill, nouveau document) :

1. Modifie ou remplace le fichier dans VS Code.
2. Panneau Source Control → **Stage** les modifications.
3. **Commit** avec un message clair (ex : `Mise à jour M3 evfc-faire-scenario v3.2`).
4. **Push**.

> 💡 C'est ainsi que l'historique des versions se construit automatiquement dans GitHub.

---

## Étape 9 — Inviter les apprenants

1. Sur GitHub, va dans ton repo → onglet **"Settings"**.

2. Dans le menu gauche → **"Collaborators"** (ou "Collaborators and teams").

3. Clique sur **"Add people"**.

4. Saisis l'adresse email ou le pseudo GitHub de l'apprenant → **"Add collaborator"**.

5. L'apprenant reçoit un email d'invitation — il doit **accepter** avant d'avoir accès.

**Permissions recommandées pour les apprenants :**
| Rôle | Ce qu'il peut faire |
|---|---|
| **Read** | Consulter et télécharger les fichiers uniquement ✅ |
| Write | Modifier les fichiers ❌ (à éviter) |
| Admin | Gérer le repo ❌ (à éviter) |

> Sélectionne toujours **"Read"** pour les apprenants.

---

## Étape 10 — Révoquer l'accès en fin de formation

1. GitHub → repo → **Settings** → **Collaborators**.
2. Clique sur les **3 points** à côté du nom de l'apprenant → **"Remove"**.

> L'accès est immédiatement révoqué.

---

## Récapitulatif — Commandes VS Code utiles

| Action | Raccourci |
|---|---|
| Ouvrir la palette de commandes | `Ctrl+Shift+P` |
| Ouvrir le terminal intégré | `Ctrl+`` ` |
| Panneau Source Control (Git) | `Ctrl+Shift+G` |
| Rechercher dans les fichiers | `Ctrl+Shift+F` |
| Explorer les fichiers | `Ctrl+Shift+E` |

---

## En cas de problème courant

| Problème | Solution |
|---|---|
| "Push" bloqué / erreur d'authentification | `Ctrl+Shift+P` → `GitHub: Sign in` → se reconnecter |
| Fichier modifié non visible dans Source Control | Vérifier que le fichier est bien dans le dossier du repo cloné |
| Erreur "remote origin already exists" | Ignorer, c'est normal lors d'un re-clonage |
| L'apprenant ne reçoit pas l'invitation | Vérifier l'adresse email, renvoyer depuis Settings → Collaborators |

---

*Pack EVFC — FPA | Edumédiapole | B.FERNON©2026*
