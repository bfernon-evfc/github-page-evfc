# Guide — Distribution des ressources EVFC (page GitHub Pages)

Document produit le 2026-08-09, décrivant le parcours de distribution des ressources depuis la page publique `https://bfernon-evfc.github.io/github-page-evfc/`, à partir d'une lecture du workflow n8n en ligne et du `CHANGELOG.md` du dépôt.

## 1. Vue d'ensemble du parcours

```text
Visiteur (page GitHub Pages)
   │  clique « Recevoir le plugin » / « Recevoir le lien »
   ▼
Formulaire Google Forms
   https://docs.google.com/forms/d/e/1FAIpQLSfiXe5vK2RwDeeembgu4Ijvw04DurQX3c5nlv-wWiGhQ33qtw/viewform
   │  alimente
   ▼
Google Sheet « Formulaire EVFC » (feuille « Réponses au formulaire 1 »)
   │  lu toutes les 5 minutes par le workflow n8n
   ▼
Workflow n8n « EVFC_Partage_Ressources » (id Xb9gLas9hR9w2Ofr)
   │  si la ligne est validée manuellement (Etat = Validée)
   ▼
Partage Google Drive (accès lecteur) sur l'e-mail du répondant
   → le répondant reçoit une notification Google Drive avec le lien de partage
```

Le lien vers l'application Formateur Augmenté (`http://evfc.edumediapole.net`) est affiché sur la même page, mais suit un circuit **séparé** : il n'est pas distribué par ce workflow — l'accès est protégé par un couple login/mot de passe (authentification HTTP Basic `.htaccess`, cf. `WebApp_EVFC/procedure-authentification-htaccess.md`), transmis manuellement par Bruno.

---

## 2. Le formulaire

Formulaire Google Forms unique pour les deux types de ressources, champ clé `Je veux recevoir` à deux valeurs possibles :

| Valeur du champ | Ressource partagée |
|---|---|
| `Le Pack EVFC (Plugin + Guides EVFC)` | fichier Drive `1kO1m3qPQ8HGdxp23eK_ESN0JPtmt5HmZ` (nœud `Partage_Pack_EVFC`) |
| `La documentation EVFC seulement (Référentiel EVFC + Guide ERA)` | fichier Drive `10iMnJoOKaZkmo0r7dm95ECBv94mn926a` (nœud `Partage_Documentation`) |

Autres champs collectés : `Horodateur`, `Adresse e-mail`, `Nom`, `Prénom`, `Cohorte`.

D'après le `CHANGELOG.md` : jusqu'au 2026-07-08, chaque ressource (Référentiel, Guide ERA, Cadrage, Plugin) avait son propre point d'entrée (bouton dédié / webhook e-mail non fonctionnel). Depuis le 2026-07-09, toute la distribution passe par ce formulaire unique à deux choix.

---

## 3. Le workflow n8n — `EVFC_Partage_Ressources` (id `Xb9gLas9hR9w2Ofr`)

> ⚠️ **Le workflow est actuellement désactivé** (`active: false` côté n8n) — sans quoi le déclencheur planifié ne s'exécute pas et les réponses au formulaire ne sont pas traitées. À vérifier/réactiver si la distribution ne fonctionne pas.

### 3.1 Déclenchement

`Schedule Trigger` — intervalle de 5 minutes.

### 3.2 Étapes

1. **`Lire_Inscriptions`** (Google Sheets) — lit la feuille « Réponses au formulaire 1 » du classeur « Formulaire EVFC » (`14MQl8Tn8xNjZHcD-zHvmJ4W4ycdXXgWc8HTqqwUPx8M`).
2. Chaque ligne suit en parallèle deux branches :
   - **`Check_Etat=Validée`** → si `Etat = Validée`, va vers `Choix_Ressource`.
   - **`Check_Etat`** → si `Etat = A valider` OU `Etat = Validée`, va vers `Ajout_Contact` (upsert dans la Data Table `Inscriptions_EVFC`, colonnes Horodateur/email/Nom/Prenom/Cohorte/Ressource/Etat).
3. **`Choix_Ressource`** (switch sur le champ `Je veux recevoir`) → route vers `Partage_Pack_EVFC` ou `Partage_Documentation` selon le tableau du §2.
4. **`Partage_Pack_EVFC`** / **`Partage_Documentation`** (Google Drive, opération `share`) — ajoute une permission lecteur sur le fichier Drive correspondant, pour l'adresse e-mail du répondant. C'est ce partage qui déclenche l'e-mail de notification Google Drive contenant le lien.
5. **`Merge`** (3 entrées) — regroupe les branches de partage et celle d'`Ajout_Contact`.
6. **`maj_Etat`** (Data Table `Inscriptions_EVFC`) — pour les lignes où `Etat = Validée`, met à jour la colonne `Etat` à **`Partagée`**.

Note de cohérence : la description du workflow dans n8n indique `Etat = "Envoyée"` comme état final, mais le nœud `maj_Etat` écrit en réalité `Etat = "Partagée"` — la description du workflow est en retard d'un renommage. Se fier au code du nœud, pas à la description, pour l'état réel après traitement.

### 3.3 États de la colonne `Etat` (Data Table `Inscriptions_EVFC`)

| État | Signification |
|---|---|
| `A valider` | réponse reçue, en attente de validation manuelle par Bruno |
| `Validée` | validée manuellement → sera traitée au prochain passage du workflow (partage + passage à `Partagée`) |
| `Partagée` | fichier partagé, traitement terminé |
| `TESTS` | ligne de test — explicitement exclue de toute mise à jour de la Data Table (cf. description du workflow) |

**Le point de friction actuel du parcours** : rien dans ce workflow ne fait passer une ligne de `A valider` à `Validée` automatiquement. Cette validation est un geste manuel (dans la Data Table ou le Sheet) — c'est le goulot d'étranglement humain du circuit.

---

## 4. Accès à l'application Formateur Augmenté

Le bouton/lien vers `http://evfc.edumediapole.net` sur la page GitHub Pages mène à la version OVH (v2.1.1 Silver, SPA monofichier — voir `02_Projets/WebApp_EVFC/`). L'accès est actuellement protégé par une authentification HTTP Basic (login + mot de passe), transmise hors de ce circuit automatisé.

---

## 5. Fichiers Google Drive partagés

| Ressource | ID Drive |
|---|---|
| Pack EVFC (Plugin + Guides) | `1kO1m3qPQ8HGdxp23eK_ESN0JPtmt5HmZ` |
| Documentation seule (Référentiel + Guide ERA) | `10iMnJoOKaZkmo0r7dm95ECBv94mn926a` |

Ces IDs sont codés en dur dans les nœuds `Partage_Pack_EVFC` / `Partage_Documentation` du workflow n8n — toute mise à jour du contenu du pack ou de la documentation doit remplacer le fichier cible à cet ID (ou mettre à jour l'ID dans le workflow si un nouveau fichier est créé).

---

## 6. Export local du workflow

Le dépôt contient une copie `EVFC_Partage_Ressources.json`, resynchronisée le 2026-08-09 : elle correspond désormais exactement à la structure en ligne (10 nœuds, mêmes connexions décrites au §3). Elle porte elle aussi `"active": false`, cohérent avec l'état actuellement observé côté n8n (§3).

---

Document produit le 2026-08-09 à partir d'une lecture directe du workflow n8n `Xb9gLas9hR9w2Ofr` et du `CHANGELOG.md` de `github-page-evfc`.
