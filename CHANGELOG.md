# Changelog

Toutes les évolutions notables de la page EVFC sont documentées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/) — les entrées sont groupées par date.

## 2026-07-09 — Formulaire pour le téléchargement du plugin

### Modifié
- Le bouton « Télécharger le plugin » ouvre désormais le formulaire
  d'inscription EVFC (Google Forms) au lieu du lien placeholder temporaire.
- Libellé du bouton changé en « Recevoir le plugin », avec une indication
  sous le bouton précisant qu'il faut remplir le formulaire pour recevoir
  gratuitement le pack-evfc-fpa complet (plugin + guides de référence).
- Section Ressources (Référentiel EVFC v1.0, Guide ERA Édumédiapole, Cadrage
  Pack EVFC v3.2) : les champs e-mail + webhook n8n (encore en placeholder,
  non fonctionnel) sont remplacés par le même bouton « Recevoir le lien »
  ouvrant directement le formulaire Google Forms du plugin — tous les
  éléments téléchargeables sont désormais distribués via ce formulaire
  unique.
- Bouton « Télécharger » de la carte tarif/pack renommé en « Recevoir le
  plugin » pour la même cohérence.
- Suppression du code mort associé (`requestDoc`, `requestReferentiel`,
  `requestGuide`, `requestCadrage`).

## 2026-07-08 — Diffusion contrôlée des ressources

### Modifié
- La section « La campagne » devient « **Les modules** », avec un nouveau titre
  (« Des modules de formations complémentaires ») et un nouveau texte d'accroche.
- Les cartes de la section Ressources (Référentiel EVFC v1.0, Guide ERA
  Édumédiapole, Cadrage Pack EVFC v3.2) ne proposent plus de téléchargement
  direct : un **formulaire e-mail** envoie la demande à un webhook n8n qui
  transmet le lien de téléchargement par courriel.
- Le lien de téléchargement du plugin est en attente d'une nouvelle version
  (placeholder temporaire).

### Supprimé
- Les PDF des ressources ne sont plus hébergés dans le dépôt public
  (diffusion contrôlée uniquement).
- Bouton « Lire les guides » de la section Application web.

## 2026-07-06 → 2026-07-07 — Restylage et médias

### Ajouté
- Carte vidéo « La boucle E.R.A. » et badges vidéo sur le bloc Méthode
  Écosystème EVFC.
- Badges YouTube / Podcast recolorés.

### Modifié
- Nouvelle page d'accueil « Restylage », carrousel allégé.
- Badge bleu de la WebApp remplacé par le logo (168×168).
- Titre et texte de la section Ressources reformulés.
- Lien de téléchargement du plugin pointé vers l'asset de release GitHub.

## 2026-07-05

### Corrigé
- Logo de la WebApp mis à jour, liens internes nettoyés.

## 2026-06-16 — Refonte de l'accueil

### Ajouté
- Application web **Formateur Augmenté** (section dédiée, lien vers le dépôt
  public officiel de l'application).

### Corrigé
- Badge EVFC, logo Formateur Augmenté, e-mail du pied de page,
  taille du badge « Aligné EVFC ».

## 2026-06-12 — Plugin v3.3

### Ajouté
- Mise à jour du pack plugin en v3.3 : **3 nouveaux skills transversaux**.

## 2026-06-05 — Documentation v3.2

### Modifié
- Documentation mise à jour en v3.2 (remplace la v3.1).

## 2026-06-04 — Création de la page

### Ajouté
- Mise en ligne initiale de la page EVFC sur GitHub Pages.
- Rubrique Documentation avec les PDF.
- Fichier plugin `pack-evfc-fpa.plugin`.

### Corrigé
- Chemins du logo (en-tête / pied de page) et du bouton de téléchargement.
