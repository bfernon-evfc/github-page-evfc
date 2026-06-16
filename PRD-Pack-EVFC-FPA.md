# PRD - Pack EVFC FPA

## 1. Synthese produit

Le Pack EVFC FPA est un ecosysteme de 13 skills pour Claude Cowork destine aux formateurs professionnels d'adultes, ingenieurs pedagogiques, tuteurs et concepteurs de supports. Il aide a concevoir, animer, evaluer et ameliorer des formations professionnelles avec l'IA, en s'appuyant sur la methode EVFC : Ecouter, Voir, Faire, Consolider.

Le produit prend la forme d'un fichier plugin installable dans Claude Cowork, accompagne d'une page de presentation GitHub Pages et d'une documentation pedagogique de reference.

## 2. Probleme a resoudre

Les formateurs FPA doivent produire rapidement des supports pedagogiques coherents, actionnables et adaptes a des publics adultes. Dans la pratique, ils font face a plusieurs difficultes :

- transformer un referentiel brut en progression exploitable ;
- construire des sequences centrees sur l'action observable ;
- concevoir des activites realistes et contextualisees ;
- evaluer avec des criteres clairs et mesurables ;
- gerer les incomprehensions, blocages ou pertes d'adhesion ;
- industrialiser les livrables sans perdre la qualite pedagogique ;
- utiliser l'IA sans obtenir des contenus trop generiques ou non alignes avec le terrain.

Le Pack EVFC FPA vise a rendre ces taches plus rapides, plus structurees et plus fiables.

## 3. Objectifs produit

### Objectifs principaux

- Fournir un point d'entree unique pour produire des livrables pedagogiques FPA avec l'IA.
- Garantir l'alignement des productions avec la methode EVFC.
- Aider les formateurs a passer d'une intention pedagogique a un livrable directement utilisable.
- Outiller les quatre phases EVFC : Ecouter, Voir, Faire, Consolider.
- Integrer la remediation ERA pour traiter les incomprehensions comme des signaux pedagogiques.
- Reduire le temps de conception tout en renforcant la qualite et la coherence des supports.

### Objectifs secondaires

- Faciliter l'installation et l'adoption du pack en moins de 5 minutes.
- Donner aux utilisateurs des chaines de travail predefinies selon leurs besoins.
- Proposer des modules transverses pour convertir, exporter et optimiser les contenus.
- Maintenir une documentation claire pour l'usage, la diffusion et la mise a jour du pack.

## 4. Public cible

### Utilisateurs principaux

- Formateurs professionnels d'adultes.
- Formateurs FPA en cours de professionnalisation.
- Ingenieurs pedagogiques.
- Responsables ou coordinateurs de formation.
- Tuteurs et accompagnateurs.
- Concepteurs de supports pedagogiques.

### Niveau attendu

Le pack doit etre utilisable par un formateur non expert en prompt engineering, a condition qu'il dispose de Claude Pro et de Claude Cowork desktop.

## 5. Proposition de valeur

Le Pack EVFC FPA transforme Claude Cowork en assistant pedagogique specialise. Il ne se contente pas de generer du texte : il cadre le besoin, choisit le bon module, structure les productions selon EVFC, verifie les criteres pedagogiques et produit des livrables actionnables.

Valeur attendue :

- moins de temps perdu a formuler des prompts ;
- moins de supports generiques ;
- plus de coherence entre objectifs, activites et evaluation ;
- meilleure prise en compte du vecu adulte et de l'action professionnelle ;
- remediations plus fines face aux blocages apprenant ;
- livrables reutilisables, partageables et ajustables.

## 6. Perimetre fonctionnel

### Inclus dans la version actuelle

- Plugin installable `pack-evfc-fpa.plugin`.
- Page de presentation et de telechargement.
- Documentation EVFC, ERA et cadrage ecosysteme.
- Orchestrateur de qualification du besoin.
- 10 modules pedagogiques principaux.
- 3 modules transverses.
- Chaines pedagogiques recommandees.
- Installation sans configuration technique avancee.

### Hors perimetre a ce stade

- Authentification utilisateur propre au site.
- Tableau de bord web interactif.
- Suivi statistique d'usage.
- Marketplace publique.
- Mise a jour automatique du plugin.
- Evaluation automatique des resultats reels en situation de formation.
- Integration directe a LMS ou outils tiers hors workflows n8n.

## 7. Architecture fonctionnelle du pack

### Orchestrateur

**Architecte Formateur Augmente**

Role : point d'entree intelligent du pack. Il qualifie le besoin en cinq questions ciblees, route vers le bon module et produit un plan d'action avec tableau de mission et statuts.

Exigences :

- guider l'utilisateur sans jargon inutile ;
- identifier le livrable attendu ;
- recommander un module ou une chaine ;
- expliciter les informations manquantes ;
- produire un plan d'action clair.

### Modules principaux

| Module | Nom | Role produit | Livrable attendu |
|---|---|---|---|
| INTRO | Simulateur EDC EVFC | Initier les formateurs debutants a l'ecosysteme EVFC par etude de cas | Etude de cas annotee |
| M0 | Progression Pedagogique EVFC | Transformer un referentiel en progression de seances | Plan pedagogique global |
| M1 | Sequence Designer EVFC | Concevoir une sequence complete en quatre phases | Sequence EVFC prete a l'emploi |
| M2 | AI Training Designer | Concevoir des formations IA et prompts pedagogiques adaptes | Familles de prompts et grille de validation |
| M3 | QCM EVFC Validator | Valider un QCM et generer un script Google Forms | CSV valide, script Apps Script |
| M4 | Scenario FAIRE Generator | Produire des mises en situation realistes | Scenarios contextualises |
| M5 | Grilles Criteriees | Construire des grilles d'evaluation observables | Grille a 4 niveaux |
| M6 | ERA Loop Coach | Accompagner les blocages apprenant avec la boucle ERA | Fiche intervention ERA |
| M7 | Automatisation pedagogique n8n | Automatiser les taches repetitives | Workflow n8n JSON |

### Modules transverses

| Module | Role produit | Livrable attendu |
|---|---|---|
| Convertisseur Markdown Pandoc | Convertir des documents en Markdown propre | Fichier `.md` exploitable |
| Export PDF Pedagogique | Generer des PDF professionnels depuis un contenu pedagogique | Infographie, fiche formateur, fiche apprenant |
| Prompt Pedagogique Optimizer | Transformer une demande en prompt pedagogique structure | Prompt optimise selon objectif et public |

## 8. Cadres pedagogiques integres

### EVFC

Le pack doit garantir une progression pedagogique en quatre temps :

- Ecouter : contextualiser, donner du sens, relier au vecu professionnel.
- Voir : demontrer, rendre visible le resultat attendu.
- Faire : faire pratiquer en situation reelle ou simulee.
- Consolider : formaliser, memoriser, transferer.

Repartition indicative :

- Ecouter : 10 a 15 % ;
- Voir : 20 a 25 % ;
- Faire : 45 a 55 % ;
- Consolider : 10 a 15 %.

### ERA

Le pack doit permettre au formateur de traiter une incomprehension par :

- Empathie : accueillir sans juger ;
- Resolution : identifier et traiter le blocage ;
- Adhesion : verifier par une preuve observable.

### Principes complementaires

Les productions doivent aussi rester compatibles avec :

- Kolb : experience, observation, conceptualisation, experimentation ;
- SAVI : securiser, rendre acteur, valoriser, impliquer ;
- Boussole de l'aide : ajuster le niveau d'aide a l'autonomie reelle ;
- SMART : formuler des objectifs concrets, observables et transferables.

## 9. Parcours utilisateur

### Parcours 1 - Installer le pack

1. L'utilisateur ouvre la page GitHub Pages.
2. Il clique sur "Telecharger le plugin".
3. Il recupere `pack-evfc-fpa.plugin`.
4. Il ouvre Claude Cowork.
5. Il choisit "Plugins -> Install from file".
6. Il selectionne le plugin et accepte l'installation.
7. Les 13 skills deviennent disponibles.

Critere de reussite : un utilisateur equipe de Claude Pro et Claude Cowork desktop peut installer le pack en moins de 5 minutes.

### Parcours 2 - Creer une sequence complete

1. L'utilisateur lance l'orchestrateur.
2. Il precise son objectif, son public, son contexte et ses contraintes.
3. L'orchestrateur recommande M1 ou une chaine complete.
4. Le module produit une sequence EVFC.
5. L'utilisateur complete avec M4 pour les mises en situation.
6. Il utilise M5 pour construire l'evaluation.

Critere de reussite : l'utilisateur obtient une sequence coherente avec objectifs, activites, minutage et evaluation.

### Parcours 3 - Gagner du temps sur une evaluation

1. L'utilisateur fournit un QCM ou un besoin d'evaluation.
2. M3 verifie l'alignement EVFC et le niveau cognitif.
3. M3 genere ou ajuste le CSV.
4. M3 produit le Google Apps Script pour creer le formulaire.

Critere de reussite : le QCM est exploitable et coherent avec les objectifs pedagogiques.

### Parcours 4 - Remedier a un blocage apprenant

1. L'utilisateur decrit une incomprehension ou un blocage.
2. M6 diagnostique la nature probable du blocage.
3. M6 propose une posture ERA.
4. M6 produit une activite de reprise.
5. M6 formule une preuve d'adhesion observable.

Critere de reussite : le formateur obtient une intervention courte, respectueuse, concrete et verifiable.

### Parcours 5 - Industrialiser une production

1. L'utilisateur produit un contenu avec M1, M4 ou M5.
2. Il utilise les modules transverses pour convertir, optimiser ou exporter.
3. Il peut integrer M7 pour automatiser les sorties.

Critere de reussite : l'utilisateur passe d'un contenu brut a un livrable structure, imprimable ou integrable a un workflow.

## 10. Chaines pedagogiques recommandees

| Chaine | Modules | Usage |
|---|---|---|
| Sequence complete | M1 -> M3 -> M4 -> M5 | Concevoir une sequence avec evaluation et scenarios |
| Debutant EVFC | INTRO -> M1 | Comprendre l'ecosysteme avant de produire |
| Mise en situation | M4 + M5 | Creer une activite pratique et son evaluation |
| Avec remediation ERA | M1 -> M4 -> M6 -> M5 | Anticiper les blocages apprenant |
| Pack FPA complet | M1 -> M3 -> M4 -> M5 -> M6 | Produire une sequence robuste et ajustable |
| Production industrialisee | M1 -> M3 -> M4 -> M5 -> M7 | Creer un module avec automatisation |
| Export imprime | M1 -> M4 -> M5 -> Export PDF | Produire des supports imprimables |
| Optimisation prompt | Prompt Optimizer -> module cible | Ameliorer la qualite d'une demande avant generation |

## 11. Exigences fonctionnelles

### Installation

- Le plugin doit etre telechargeable depuis la page publique ou privee.
- Le fichier doit conserver son nom stable : `pack-evfc-fpa.plugin`.
- L'installation doit fonctionner sans configuration additionnelle.
- La page doit expliquer clairement les prerequis et les etapes.

### Orchestration

- Le pack doit offrir un point d'entree unique.
- L'orchestrateur doit pouvoir orienter vers un module ou une chaine.
- Les recommandations doivent etre comprehensibles par un utilisateur non technique.

### Production pedagogique

- Chaque module doit produire un livrable directement exploitable.
- Les contenus doivent etre contextualises au public, au metier et aux contraintes.
- Les objectifs doivent etre observables et formulables en situation.
- Les evaluations doivent s'appuyer sur des criteres explicites.

### Coherence EVFC

- Les productions doivent expliciter ou respecter les phases EVFC.
- La phase Faire doit rester centrale dans les sequences.
- La consolidation doit comporter une trace, une reformulation, une checklist ou un objectif de transfert.

### Remediation

- M6 doit distinguer incomprehension, blocage, perte de sens, surcharge cognitive et tension relationnelle.
- Les reponses doivent eviter les formulations culpabilisantes.
- L'adhesion doit etre verifiee par une action observable.

### Documentation

- La page doit donner acces aux PDF de reference.
- Les documents doivent presenter les cadres EVFC, ERA et l'ecosysteme.
- Le tutoriel GitHub doit faciliter la diffusion et la gestion d'un repo prive.

## 12. Exigences non fonctionnelles

### Utilisabilite

- Langage clair, accessible a un formateur non technique.
- Demarrage rapide en moins de 5 minutes.
- Navigation simple sur la page de presentation.
- Telechargement visible des livrables principaux.

### Maintenabilite

- Versionner les fichiers du pack dans Git.
- Conserver un historique clair des mises a jour.
- Separer les assets, docs et page de presentation.
- Eviter les chemins fragiles pour les ressources telechargeables.

### Accessibilite

- Contraste suffisant en mode clair et sombre.
- Texte lisible sur mobile et desktop.
- Navigation interne par ancres.
- Boutons et liens identifiables.

### Securite et diffusion

- Le repo peut etre public pour une page vitrine ou prive pour diffusion restreinte.
- Les droits apprenants recommandes sont en lecture seule.
- Aucun secret ou token ne doit etre inclus dans le depot.

## 13. Contenus et livrables

### Livrables produit

- Fichier plugin Claude Cowork : `pack-evfc-fpa.plugin`.
- Page de presentation : `index.html`.
- Documentation PDF :
  - Referentiel EVFC Edumediapole v1.0 ;
  - Pack Ecosysteme EVFC - Cadrage v3.2 ;
  - Guide ERA Edumediapole.
- Documentation Markdown :
  - tutoriel de gestion du repo GitHub ;
  - referentiel operationnel ERA pour agent IA.

### Livrables generes par les modules

- progressions pedagogiques ;
- sequences EVFC ;
- prompts pedagogiques ;
- QCM et scripts Google Forms ;
- scenarios professionnels ;
- grilles criteriees ;
- fiches d'intervention ERA ;
- workflows n8n ;
- fichiers Markdown propres ;
- supports PDF imprimables ;
- prompts optimises.

## 14. Indicateurs de succes

### Adoption

- Installation realisee en moins de 5 minutes par un nouvel utilisateur.
- L'utilisateur comprend quel module lancer grace a l'orchestrateur ou aux chaines.
- Les utilisateurs reviennent au pack pour plusieurs types de livrables.

### Qualite pedagogique

- Les sequences produites couvrent les phases EVFC.
- Les activites Faire representent le coeur de l'apprentissage.
- Les criteres d'evaluation sont observables et mesurables.
- Les interventions ERA aboutissent a une preuve d'adhesion.

### Efficacite

- Reduction du temps de conception d'une sequence.
- Reduction des prompts manuels necessaires.
- Meilleure reutilisation des livrables.
- Moins d'allers-retours pour corriger des productions trop generiques.

## 15. Risques et points de vigilance

| Risque | Impact | Mitigation |
|---|---|---|
| Productions IA trop generiques | Perte de valeur pedagogique | Forcer contexte, public, metier, livrable attendu |
| Surdependance a l'IA | Baisse de jugement pedagogique | Positionner le pack comme assistant, pas decideur |
| Mauvaise installation du plugin | Abandon utilisateur | Maintenir un guide court et visible |
| Confusion entre modules | Friction d'usage | Renforcer l'orchestrateur et les chaines |
| Documents ou plugin obsoletes | Incoherence de version | Versionner clairement les releases |
| Droits GitHub mal configures | Diffusion non maitrisee | Recommander l'acces lecture seule pour les apprenants |

## 16. Roadmap indicative

### Version actuelle

- Page de presentation.
- Telechargement du plugin.
- Documentation de reference.
- 13 skills disponibles.
- Chaines pedagogiques recommandees.

### Prochaine iteration

- Ajouter un `README.md` public oriente installation.
- Ajouter un `CHANGELOG.md`.
- Ajouter une page `INSTALLATION.md` dediee aux apprenants.
- Ajouter des exemples de sorties pour chaque module.
- Ajouter une matrice module -> besoin -> livrable.
- Ajouter une verification de version visible sur la page.

### Evolutions futures

- Table de decision interactive pour choisir un module.
- Galerie de cas d'usage.
- Pack d'exemples telechargeables.
- Workflow n8n de generation en lot.
- Kit de validation qualite des outputs.
- Integration avec un espace de suivi ou LMS.

## 17. Questions ouvertes

- Le pack est-il destine a rester prive ou a devenir partiellement public ?
- Faut-il fournir une version demo allegee du plugin ?
- Quel format de versionnage doit devenir officiel : v3.2, v3.3 ou semver ?
- Les modules doivent-ils inclure des exemples embarques standardises ?
- Quels indicateurs d'usage peuvent etre suivis sans ajouter de collecte sensible ?
- Faut-il separer une documentation formateur et une documentation administrateur ?

## 18. Definition of Done produit

Le Pack EVFC FPA est considere comme pret pour diffusion lorsque :

- le plugin s'installe correctement dans Claude Cowork ;
- la page permet de comprendre la promesse en moins d'une minute ;
- les 13 modules sont decrits avec leur role et leur livrable ;
- le parcours d'installation est clair ;
- les documents de reference sont accessibles ;
- l'orchestrateur route correctement vers les modules ;
- chaque module produit un livrable actionnable ;
- les productions respectent EVFC et les principes adultes ;
- les fichiers sont versionnes et documentes ;
- les droits de diffusion sont maitrises.

