# CLAUDE.md

## Projet

Portfolio personnel de Yoan Poux--Bories (freelance développeur web et mobile, freelance setter DM Instagram, étudiant ingénieur en alternance intégration ERP Odoo).

**Source de vérité : `PORTFOLIO_SPEC.md`**, dans le même dossier que ce fichier. Lis-le en entier avant toute modification. Les captures de référence du design sont dans `design/` (liste en §10 de la spécification) : regarde-les avant de coder l'interface. En cas de doute sur le contenu, la structure, le design ou les orthographes, la spécification fait foi.

## Démarrage

Cette session est ouverte dans le dossier du brief (ce fichier, `PORTFOLIO_SPEC.md`, `design/`).

1. Retrouve le repository GitHub existant de Yoan nommé `portfolio` (par exemple avec `gh repo list`) et **clone-le** dans un sous-dossier `portfolio/` de ce dossier. Ne crée pas de nouveau repo.
2. Regarde ce que le repo contient et résume-le en deux lignes. **Yoan veut que le contenu actuel soit remplacé par le nouveau site : écris par-dessus le repo cloné** (supprime ou remplace les anciens fichiers du site dans un commit clair, en gardant l'historique git et le même remote). Ne repars pas de zéro hors du repo, ne force-push pas.
3. Copie à la racine du repo cloné `CLAUDE.md`, `PORTFOLIO_SPEC.md` et le dossier `design/`, puis travaille dans ce repo. Ils y restent pour les sessions suivantes.
4. Propose un plan court avant de construire.

## Questions à poser à Yoan

Les contenus encore marqués `[À COMPLÉTER]` ne sont pas à deviner : **pose les questions à Yoan dans cette session**, il répond directement ici. La liste complète est dans `PORTFOLIO_SPEC.md` §8 bis : services freelance et clients visés, missions Imagin'Expo, offre de setting DM, URLs LinkedIn et GitHub et email affiché, explication de FIDES, fichier photo, service d'envoi d'emails, jobs étudiants, validation de l'anglais.

- Pose-les juste après ton plan, quelques questions à la fois (AskUserQuestion si disponible), et avant de construire la section concernée.
- Écris les réponses dans les fichiers de traduction FR et EN. Reformule proprement sans changer le sens ni ajouter de faits.
- Sans réponse, laisse l'emplacement `[À COMPLÉTER]` visible et continue avec le reste.

## Où travailler

- Le code va directement dans le repo `portfolio` de Yoan.
- Fais des commits petits et clairs, un par étape logique. Ne force-push jamais sans demander.
- Ne touche pas aux fichiers de configuration GitHub ou de déploiement existants sans l'avoir signalé.

## Règles de contenu

- Ne rien inventer. Les emplacements `[À COMPLÉTER]` de la spécification restent visibles et faciles à repérer, jamais remplis avec du faux contenu.
- Orthographes exactes : Gembaware, Spherea (sans accent), société « Spherea Tests et Services » (S à « Tests » et à « Services »), Imagin'Expo, FIDES, CESI Labège.
- À Imagin'Expo : « alternance chef de projet intégration ERP ». Ne jamais écrire « intégrateur chez Imagin'Expo ».
- Pas de section « Projets » : le site s'appuie sur des missions décrites et des compétences.
- Ne jamais afficher le téléphone ni l'adresse postale de Yoan.
- Aucune donnée confidentielle d'entreprise.

## Langue

- Français par défaut, bouton FR / EN.
- Tous les textes dans des fichiers de traduction, un par langue. Les deux langues restent synchronisées.
- Réponds à Yoan en français.

## Thème clair / sombre

- Le site a deux thèmes. **Le thème clair est le thème par défaut**, toujours, même si le système du visiteur est en mode sombre. Ne pas se baser sur `prefers-color-scheme` pour choisir le thème initial.
- Un bouton dans la navigation, à côté du bouton FR / EN, permet de passer du clair au sombre et inversement. Il doit être accessible (`aria-label` ou `aria-pressed`, utilisable au clavier).
- Le choix du visiteur est mémorisé dans le navigateur (`localStorage`), et appliqué avant le premier rendu pour éviter un flash de mauvais thème.
- Implémentation : variables CSS définies sous `:root` (clair) et sous `[data-theme="dark"]` (sombre), jetons de couleur listés dans `PORTFOLIO_SPEC.md` §7 bis. Les composants utilisent uniquement ces variables, jamais de couleurs en dur (sauf les quatre accents fixes décrits dans la spécification).
- Vérifie le contraste (4,5:1 pour le texte) dans les deux thèmes.
- La direction visuelle est **retenue** : mix éditorial et coloré, décrit en §7 bis de la spécification et visible dans `design/`. Ne propose pas d'autre direction sans que Yoan le demande.

## Façon de travailler

- Construis section par section dans l'ordre de la spécification.
- Compare ton rendu aux captures de `design/` (bureau et mobile, clair et sombre) avant de dire qu'une étape est terminée.
- Lance le build et le lint avant de dire qu'une étape est terminée.
- Donne à Yoan des fichiers ou extraits précis avec leur chemin, pas des archives complètes.
- Si une décision change le contenu ou le design (choix de stack, service d'envoi d'emails), demande à Yoan au lieu de trancher seul.
