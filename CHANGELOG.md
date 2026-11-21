# Changelog

Toutes les évolutions notables de la page EVFC sont documentées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/) — les entrées sont groupées par date.
Convention projet : lorsqu'une session de modifications est réalisée depuis ce projet Codex, ajouter la mention **« Mis à jour avec Codex »** dans le titre de la session.  
Convention projet : lorsqu'une session de modifications est réalisée depuis ce projet Claude Code, ajouter la mention **« Mis à jour avec Claude »** dans le titre de la session. 

## 2026-11-21 — Correction du chargement local (Mis à jour avec Codex)

### Corrigé

- Encodage du modèle HTML à l'intérieur de la balise JSON `__bundler/template` : les caractères `<` sont désormais sérialisés en `\u003c`. La précédente mise à jour avait rendu visibles les balises de fermeture HTML à l'intérieur de cette chaîne JSON.
- Une injection de script de rechargement automatique avant le premier `</body>` pouvait ainsi modifier le JSON au lieu du document extérieur, interrompre le chargement et exposer des fragments tels que `\n`. Ce mécanisme a été reproduit ; le mode d'ouverture utilisé par l'utilisateur reste à confirmer.
- Le contenu décodé, les informations mises à jour, les styles, les images et le chargeur sont inchangés par ce correctif.

### Vérification

- Test de régression `node --test tests/bundle-loading.test.cjs` : échec avant correction (`Unterminated string in JSON`), réussite après correction. Il vérifie qu'une injection de rechargement avant `</body>` laisse le contenu embarqué intact.
- Identité du modèle HTML décodé et du reste du bundle vérifiée pendant la modification ; `git diff --check`.
- Contrôle visuel non effectué : l'outil de navigation a interrompu l'accès car le contrôle d'URL n'est pas pris en charge pour le navigateur Windows sélectionné. Aucune publication.

## 2026-11-21 — Présentation du Formateur Augmenté v2.15.0 (Mis à jour avec Codex)

### Modifié

- Mise à jour limitée aux informations de l'application Formateur Augmenté : section Application, capture de l'accueil et mention de ses fournisseurs d'IA dans le haut de page. Les sections Méthode, Modules de formation, Pack, Documentation et Média, les compteurs et les liens de distribution sont conservés.
- Neuf modules alignés sur le code actuel : INTRO ; M0 Formation clé en main ; M1 Architecte de progression ; M2 Atelier de séquence ; M3 Quiz avant la pratique ; M4 Mise en situation « Faire » ; M5 Grilles d'observation ; M6 Coach anti-blocage ; M7 Tableau de bord de formation. M7 ne désigne plus l'automatisation dans l'application ; la nomenclature du pack n'est pas modifiée.
- Présentation des modes occasionnel et Parcours, des fiches de séance, de la bibliothèque, des sources Google Drive, du convertisseur, de l'outil de suivi HTML M7 et d'EVFC Live.
- Enchaînements v2.15.0 : cadrage M1 ou M0 puis M7 ; boucle M2 → M3 → M4 → M5, puis M7 ou M2 ; M6 uniquement en cas de blocage, avec retour au Faire et à l'évaluation. Mention des quatre parcours prédéfinis.
- Remplacement des anciennes affirmations « sans serveur » et « Anthropic uniquement » par le fonctionnement actuel : utilisation dans le navigateur, choix Anthropic direct / OpenRouter, clé API personnelle, dossiers et livrables enregistrés sur le serveur.
- Exports courants distingués des intégrations ORKEA. Formulation de référence : « Compatible avec les exports ORKEA depuis la v2.2.2 ». Destination des fonctions ORKEA : abonnement Pro pour les utilisateurs enregistrés ; fonctions actives pendant le développement, sans tarif ni date de lancement annoncés.
- Capture embarquée remplacée par l'accueil v2.15.0 du guide utilisateur (`c17-theme-sombre.jpg`), sans dépendance vers le dépôt privé de l'application. Styles de la nouvelle section adaptés aux petits écrans et aux deux thèmes existants.

### Sources de l'analyse

- `../Webapp-EVFC-dsm/src/index.html` : version applicative, catalogue des neuf modules, chaînes et parcours prédéfinis.
- `../Webapp-EVFC-dsm/src/assets/evfc-modules.js` : correspondance des codes affichés depuis la v2.14.0.
- `../Webapp-EVFC-dsm/docs/product/PERIMETRES_PRODUIT.md` : modes, exports et abonnement Pro.
- `../Webapp-EVFC-dsm/docs/adr/ADR-0001-mode-parcours.md` à `ADR-0009-evfc-live-dossier-parcours.md` : dossiers, fiches, sources, convertisseur, fournisseurs d'IA et Live.
- `../Webapp-EVFC-dsm/CHANGELOG.md` : déploiement et fusion de la v2.15.0 le 21 novembre 2026. Le paragraphe « Version actuellement déployée » du README cite encore v2.7.0 ; le code et les notes de déploiement les plus récentes ont été retenus.

### Vérification

- Comparaison du contenu décodé : sections hors application, logique du carrousel, changement de thème, liens et formulaire de distribution conservés à l'identique.
- Contrôle du bundle JSON, des ressources embarquées, des neuf intitulés et de la syntaxe JavaScript ; `git diff --check`.
- Recette visuelle non effectuée : l'outil de navigation a interrompu l'accès à Chrome faute de pouvoir déterminer son URL avec certitude.
- Modification locale du dépôt ; aucune publication GitHub Pages effectuée.

## 2026-07-10 — Mise à jour des skills et modules (Mis à jour avec Claude)

### Modifié

- KPI « Skills du pack » : 13 skills (valeur définitive, conforme à la liste
  officielle des 13 skills du plugin).
- Carte « Sans installation, 100% dans le navigateur » déplacée de la section
  Pack EVFC-FPA vers la section Application web (Formateur Augmenté EVFC),
  en carte pleine largeur avec icône.
- Grille de modules sous le logo Formateur Augmenté (section Application web)
  mise à jour avec les vrais noms des modules récupérés depuis le site en
  ligne : INTRO, M0 à M7, ainsi que PDF/DOCX/API, chaque tuile recolorée avec
  la couleur réelle de son module pour un rendu plus lisible en clair/sombre.
- Grille des skills de la section Pack EVFC-FPA reconstruite avec la liste
  définitive des 13 skills du plugin (nom + fonction) ; la tuile
  « N8N — Automatisation n8n » a été retirée de l'affichage (12 tuiles
  visibles, le compteur reste à 13 skills).

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
