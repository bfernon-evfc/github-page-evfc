# Spécification — Diffusion contrôlée des ressources EVFC via n8n

Base de travail pour générer le workflow n8n (connecteur mcp-n8n).
État du site : commit `6b028ef` — formulaires en ligne, webhook en placeholder.

## 1. Contexte

Les 3 documents PDF de la section Ressources ne sont plus téléchargeables
directement : ils ont été retirés du dépôt GitHub (et purgés de l'historique).
Chaque carte affiche un formulaire Google Forms (https://forms.gle/AV7dJvMAVdK735LU8) ; la soumission génère un formulaire avec une variablé "Etat" initialisée sur "A valider". Le Workflow n8n (ID=Xb9gLas9hR9w2Ofr) vérifie si Etat=Validée (action manuelle du propriétaire B.FERNON); Si Etat=Validée → Partage de la ressource demandée avec le répondant puis → Etat=Partagée dans Data Table (ID=VT0YFjgZrhO514ci).
n8n qui doit envoyer le lien de téléchargement par e-mail. Les PDF n'existent
plus qu'en local : `edumediapole/docs/` (gitignorés) — il faudra les héberger
dans un stockage privé accessible à n8n (Google Drive, S3, etc.).

## 2. Contrat d'interface (déjà implémenté côté site)

- **Appel** : `POST` — `Content-Type: application/json` — via `fetch()` navigateur
- **URL** : placeholder `PLACEHOLDER_WEBHOOK_N8N` dans `index.html`
  (1 seule occurrence à remplacer par l'URL de production du webhook)

### Payload envoyé

```json
{
  "email": "adresse saisie (trim + validation basique côté client)",
  "document": "<identifiant du document>",
  "source": "github-page-evfc"
}
```

### Valeurs possibles de `document` (routage)

| `document`                          | Carte                    | Fichier local                                        |
|-------------------------------------|--------------------------|------------------------------------------------------|
| `Referentiel-EVFC-Edumediapole-v1.0`| Référentiel EVFC v1.0    | `edumediapole/docs/Referentiel-EVFC-Edumediapole-v1.0.pdf` |
| `Guide-ERA-Edumedapole`             | Guide ERA Édumédiapole   | `edumediapole/docs/Guide-ERA-Edumedapole.pdf`        |
| `Pack-Ecosysteme-EVFC-Cadrage-v3.2` | Cadrage Pack EVFC v3.2   | `edumediapole/docs/Pack-Ecosysteme-EVFC-Cadrage-v3.2.pdf` |

### Réponse attendue par le front

- **Succès** : tout code 2xx (le corps de la réponse est ignoré)
  → affiche « C'est fait ! Le lien de téléchargement arrive dans votre boîte mail. »
- **Échec** : tout code non-2xx ou erreur réseau/CORS
  → affiche « Envoi impossible pour le moment. Réessayez dans quelques minutes. »

### CORS (indispensable)

Le webhook doit autoriser l'origine du site dans le nœud Webhook
(option *Allowed Origins*) :
- `https://bfernon-evfc.github.io`
- + le domaine personnalisé si le site en a un (ex. `*.edumediapole.net`)

## 3. Workflow n8n à générer

```
[Webhook POST /evfc-ressources]
        │
[Validation]  email présent + format valide, document ∈ liste blanche (3 valeurs)
        │           └─ invalide → Respond 400
[Switch sur document]  → associe le lien de téléchargement (stockage privé)
        │
[Envoi e-mail]  destinataire = {{email}}, objet + corps avec le lien du document
        │
[Respond 200]
```

Recommandations :
- **Respond immédiatement** (mode "Respond when: Using Respond to Webhook node"
  placé tôt, ou "Immediately") pour que le front n'attende pas l'envoi SMTP.
- **Liste blanche stricte** sur `document` : ne jamais construire un chemin de
  fichier à partir de la valeur reçue.
- **Traçabilité** (optionnel) : append dans un Google Sheet / base
  (email, document, date) pour suivre la diffusion.
- **Anti-abus** (optionnel) : dédoublonnage email+document sur 24 h,
  honeypot, ou rate-limit par IP si exposé.
- **Liens** : de préférence des liens durables vers le stockage privé
  (partage Google Drive « toute personne disposant du lien », ou URL signée) ;
  alternative : envoyer le PDF en pièce jointe (poids : ~1–2 Mo chacun).

## 4. Reste à faire

1. Héberger les 3 PDF dans le stockage choisi et récupérer les liens.
2. Générer le workflow n8n ci-dessus (connecteur mcp-n8n) et l'activer.
3. Remplacer `PLACEHOLDER_WEBHOOK_N8N` dans `index.html` + commit/push.
4. (Séparé) Remplacer `PLACEHOLDER_LIEN_PLUGIN` — lien de téléchargement du
   plugin Claude Cowork, toujours en attente.
