# Spécification du portfolio de Yoan Poux--Bories

Document de référence pour Claude Code. Le contenu ci-dessous vient directement de Yoan. Ne rien inventer : tout ce qui est marqué **[À COMPLÉTER]** reste un emplacement visible et facile à modifier, jamais un texte fictif présenté comme vrai.

---

## 1. Objectif

Site portfolio personnel, en français avec un bouton pour passer en anglais.

Trois cibles à la fois :
- **Clients freelance** (développement web et mobile, et setting DM Instagram) : cible prioritaire, le freelance doit être plus visible que le reste.
- **Recruteurs** (alternance, emploi).
- **Écoles** (candidatures).

Particularité : **aucun projet de développement à montrer** (pas de démo, pas de dépôt public). Le site prouve donc le niveau par des **missions décrites** (contexte, ce que j'ai fait, technos) et par les **compétences**. Il n'y a donc **pas de section « Projets »**.

## 2. Fil rouge

Freelance développeur web et mobile, freelance setter DM Instagram, et étudiant en ingénierie informatique en alternance (intégration ERP Odoo).

Le freelance passe en premier, les études et l'alternance en complément.

## 3. Orthographes à respecter

| Terme | Écriture exacte |
|---|---|
| Entreprise d'alternance (BUT 3) | **Gembaware** |
| Entreprise du stage (BUT 2) | **Spherea** (sans accent), société « Spherea Tests et Services » |
| Entreprise de l'alternance actuelle | **Imagin'Expo** |
| Méthode de fiabilité | **FIDES** |
| Écoles | **CESI Labège**, **IUT Paul Sabatier** (BUT Informatique) |
| Nom | Yoan Poux--Bories (la graphie « Poux--Bories » vient de son CV) |

Formulation exacte à utiliser :
- À Imagin'Expo : « alternance **chef de projet intégration ERP** » (intégration d'Odoo). Ne jamais écrire « intégrateur chez Imagin'Expo ».
- À Gembaware : « alternance **développeur Odoo** ».

## 4. Structure de la page d'accueil (ordre des sections)

1. **Hero**
2. **Ce que je fais** (3 cartes)
3. **Freelance**
4. **Parcours et missions**
5. **Compétences**
6. **Autres activités**
7. **Contact**

Navigation en haut avec ancres vers ces sections, le **bouton FR / EN** et le **bouton de thème clair / sombre** (voir §7 bis).

### 4.1 Hero
- Photo de Yoan (celle de ses CV, à fournir dans `public/`, voir §8).
- Nom, accroche basée sur le fil rouge (§2).
- Deux boutons : **« Me contacter »** (vers la section Contact) et **« Voir mon parcours »** (vers Parcours).
- Bouton FR / EN en haut à droite.

### 4.2 Ce que je fais : 3 cartes, dans cet ordre
1. **Freelance développeur web et mobile**
2. **Freelance setter DM Instagram** : la carte l'annonce seulement, le détail est dans « Autres activités » (lien d'ancre vers cette section).
3. **Étudiant en ingénierie informatique, alternance intégration ERP / Odoo**

### 4.3 Freelance
Bloc bien visible juste après les cartes.
- Développement web et mobile : services proposés, type de clients, appel à contacter. **[À COMPLÉTER : liste exacte des services (sites vitrines, applications mobiles, Odoo sur mesure ?) et clients visés]**
- Le setting DM est annoncé en carte et détaillé dans « Autres activités » ; ne pas le détailler ici.

### 4.4 Parcours et missions
Timeline verticale, de la plus récente à la plus ancienne. Chaque expérience a une carte : contexte, ce que j'ai fait, technos.

**Cycle ingénieur informatique, CESI Labège** (3 ans, en alternance)
- **Chef de projet intégration ERP, Imagin'Expo** : intégration d'Odoo dans l'entreprise, sur les 3 ans du cycle ingénieur.
- **[À COMPLÉTER : missions concrètes, sans données confidentielles]**

**BUT Informatique, IUT Paul Sabatier** (2023-2026)

*3e année : alternance développeur Odoo, Gembaware (intégrateur ERP, 1 an)*
- Module de connexion à des **armoires intelligentes**.
- Module de connexion à un **site e-commerce par API** : synchronisation des stocks et des ventes, avec une interface pour consulter les imports.
- Module de **gestion des stocks**.
- **Récepteur FTP** pour parser des fichiers.
- Cycle de développement complet, du besoin à la solution :
  1. Rendez-vous clients : recueil et analyse du besoin.
  2. Transformation du besoin fonctionnel en besoin technique.
  3. Création de l'architecture, puis conception de la solution.
  4. Réunions de présentation de la solution et améliorations avec le client.
- Compétence mise en avant : communication client.

*Fin de 2e année : stage de 3 mois, Spherea Tests et Services (aéronautique)*
- Développement d'un logiciel qui parse des fichiers CSV pour aider aux calculs **FIDES**.
- Stack : Python, PyQt6, SQL, pywin32 (accès aux API Windows).
- Une phrase d'explication de FIDES pour les visiteurs. **[À VALIDER par Yoan avant publication]** Proposition : FIDES est une méthodologie de calcul de la fiabilité des équipements électroniques.

*Projets pendant le BUT*
- Application e-commerce en Java, fonctionnant sur PC et sur web.
- Application de gestion de ventes immobilières.
- Autres projets (CV) : site web d'équipe de sport avec API, application mobile de gestion de tâches.
- Méthode agile Scrum, pipeline CI/CD.

### 4.5 Compétences
Regroupées par catégorie, **sans barres de progression** :
- **ERP / Odoo** : modules sur mesure, connecteurs API, import de fichiers (FTP), gestion de stocks, intégration en entreprise
- **Langages** : Python, Java, JavaScript, C, C#, C++, Ada, HTML/CSS
- **Données** : SQL, Neo4J
- **Méthodes et outils** : Scrum, CI/CD
- **Relation client** : recueil et analyse du besoin, conception, présentation de solutions

### 4.6 Autres activités
Section sobre, séparée du reste. Elle détaille le **setting DM Instagram**. **[À COMPLÉTER : ce que Yoan veut mettre en avant, offre proposée, type de clients]**

Option à trancher plus tard : une ligne discrète sur les jobs étudiants (SNCF, Au Vide Grenier) pour appuyer l'aisance client. Par défaut : ne pas les afficher.

### 4.7 Contact
- Email : yoan.pouxbories@gmail.com
- LinkedIn et GitHub : **[À COMPLÉTER : URLs]**
- Formulaire de contact simple (champs : nom, email, type de demande, message). Le type de demande permet de distinguer développement, setting DM et autre.
- **Ne PAS afficher le numéro de téléphone ni l'adresse postale**, présents sur les CV, pour ne pas exposer des données personnelles sur un site public.

## 5. Bilinguisme (FR / EN)

- Français par défaut ; bouton FR / EN visible sur toutes les pages.
- Tous les textes dans des fichiers de traduction (un par langue), jamais en dur dans les composants.
- La version anglaise est à rédiger en même temps que la française, avec les mêmes sections et le même sens.
- Mémoriser le choix de langue côté navigateur.

## 6. Contraintes de contenu

- Aucune donnée confidentielle d'entreprise (Imagin'Expo, Gembaware, Spherea) : décrire le rôle, la démarche et les technos, pas les clients ni les chiffres internes.
- Pas de faux témoignages, pas de faux chiffres, pas de projets inventés.
- Ton : professionnel, direct, accessible. Phrases courtes.

## 7. Aspects techniques (proposition par défaut)

Le repository `portfolio` existe déjà sur le GitHub de Yoan. Avant toute chose, regarder ce qu'il contient et adapter le choix de stack en conséquence.

Stack par défaut si le repo est vide ou à remplacer : **Next.js (App Router) + TypeScript + Tailwind CSS**, déploiement prévu sur **Vercel**.

Exigences :
- Responsive, mobile d'abord.
- Bon niveau d'accessibilité (contrastes, navigation clavier, balises sémantiques, textes alternatifs).
- SEO de base : titres et descriptions par langue, balises Open Graph, sitemap.
- Performance : images optimisées, pas de dépendance lourde inutile.
- Formulaire de contact : prévoir l'envoi par email via un service simple (à choisir avec Yoan), avec protection anti-spam.

## 7 bis. Thèmes clair et sombre, direction visuelle

### Comportement du thème

- Deux thèmes : **clair (par défaut, toujours)** et **sombre**. Ne pas utiliser `prefers-color-scheme` pour choisir le thème initial.
- Bouton de bascule dans la navigation, à côté de FR / EN. Accessible : `aria-label` ou `aria-pressed`, utilisable au clavier, zone de clic d'au moins 44 px.
- Choix mémorisé dans `localStorage`, appliqué par un petit script en tête de page avant le premier rendu (pas de flash).
- Implémentation : variables CSS sous `:root` (clair) et `[data-theme="dark"]` (sombre) ; les composants n'utilisent que ces variables.
- Contraste du texte d'au moins 4,5:1 dans les deux thèmes ; les champs de formulaire ont une bordure visible (3:1).
- Mobile d'abord : les blocs s'empilent, les grands titres rétrécissent avec la largeur (`clamp`), la navigation passe à la ligne. Les maquettes sont testées à 390 px.
- Les emplacements `[À COMPLÉTER]` s'affichent en cadre pointillé dans les maquettes ; en production, remplacer par le vrai contenu.

### Direction visuelle retenue : mix éditorial et coloré

Validée par Yoan. Structure et typographie éditoriales (grands titres serif, numéros de section, filets, sommaire), couleurs et formes colorées (pastilles, cartes arrondies, boutons en pilule). Les captures de référence sont dans `design/` (voir §10). En cas de différence entre une capture et ce texte, demander à Yoan.

- Polices : **Instrument Serif** (titres, italique pour insister) et **Plus Jakarta Sans** (texte, étiquettes, boutons, 400 à 800).
- Structure de B : grand numéro en serif italique (64 px, couleur d'accent) dans une colonne gauche de 220 px, contenu à droite, filet de 1 px au-dessus de chaque section, sommaire numéroté sous le hero.
- Hero : eyebrow en pastille jaune, nom en très grand serif (jusqu'à 128 px) dont la deuxième ligne est en italique sur surligneur jaune, photo en arche (`border-radius: 999px 999px 28px 28px`, fond corail), accroche en serif, boutons en pilule.
- Le surligneur jaune (`#FFD23F`, texte `#1A1033`) n'est utilisé que pour un mot par titre de section (« Parlons-en. », « ensemble. »).
- Formes de C : cartes arrondies (24 à 28 px), champs de formulaire arrondis (16 px), boutons en pilule de 56 px de haut, étiquettes en pastille.
- Les trois cartes « Ce que je fais » sont pleines : jaune, menthe, corail. Les compétences sont des pastilles colorées par catégorie : violet (ERP / Odoo), jaune (langages), menthe (données), corail (méthodes et outils), encart neutre (relation client).
- Les quatre accents (violet `#5B3DF5`, jaune `#FFD23F`, menthe `#7FE3C4`, corail `#FF7A66`) sont **identiques dans les deux thèmes**. Texte `#FFFFFF` sur violet, `#1A1033` sur les trois autres.
- Bascule de thème : bouton rond de 44 px avec icône lune / soleil, à côté de FR / EN.

| Jeton | Clair | Sombre |
|---|---|---|
| fond | `#FBF9FF` | `#120D24` |
| carte | `#FFFFFF` | `#1D1536` |
| encart (dans une carte) | `#F2EEFF` | `#2A1F4D` |
| encre | `#1A1033` | `#F3EEFF` |
| texte secondaire | `#4F4670` | `#C9BFEA` |
| filet léger | `#D8D0F5` | `#3A2F63` |
| accent (numéros, liens) | `#5B3DF5` | `#B9A8FF` |
| accent au survol | `#3F24C9` | `#D6CCFF` |
| fond des champs | `#FFFFFF` | `#120D24` |
| bordure des champs | `#1A1033` | `#A89BDB` |
| puce « à compléter » (fond / texte / bordure) | `#FFFFFF` / `#1A1033` / `#1A1033` | `#120D24` / `#FFD23F` / `#FFD23F` |

## 8. Éléments à fournir par Yoan

- Photo : fichier à placer dans `public/` (celle de ses CV, en meilleure qualité si possible).
- Les points **[À COMPLÉTER]** de ce document : Claude Code les pose à Yoan sous forme de questions dans la session (voir §8 bis), Yoan répond directement là.
- Direction visuelle : retenue, voir §7 bis et les captures de `design/`.

## 8 bis. Questions à poser à Yoan dans la session

Avant de construire la section concernée, Claude Code pose ces questions (avec AskUserQuestion si disponible, sinon en texte, quelques questions à la fois), puis écrit les réponses dans les fichiers de traduction FR et EN. Rien n'est inventé : sans réponse, l'emplacement `[À COMPLÉTER]` reste visible.

1. **Freelance (§4.3)** : quels services exacts proposes-tu (sites vitrines, applications mobiles, refontes, autre) ? Quels types de clients vises-tu (artisans, TPE, indépendants, associations, startups) ? Quel appel à l'action (devis, échange de 15 min) ?
2. **Imagin'Expo (§4.4)** : quelles missions concrètes as-tu menées en tant que chef de projet intégration ERP Odoo (cadrage, paramétrage, formation, reprise de données, suivi client) ? Rappel : aucune donnée confidentielle (pas de nom de client, pas de chiffres internes).
3. **Setting DM Instagram (§4.6)** : que veux-tu mettre en avant (offre proposée, type de clients ou de créateurs, méthode, résultats que tu peux citer) ?
4. **Contact (§4.7)** : URL LinkedIn ? URL GitHub ? Adresse email à afficher ?
5. **FIDES (§4.4)** : valides-tu cette phrase d'explication : « méthodologie de calcul de la fiabilité des équipements électroniques » ?
6. **Photo** : quel fichier (chemin sur ton ordinateur) placer dans `public/` ?
7. **Formulaire de contact** : quel service d'envoi d'emails (Resend, Formspree, EmailJS, autre) ? C'est un choix qui change la stack, il te revient.
8. **Jobs étudiants** (SNCF, Au Vide Grenier) : les afficher ou non ? Par défaut, non.
9. **Anglais** : après avoir rédigé les textes, Claude Code te montre la version anglaise des passages clés pour validation.

## 9. Ordre de travail conseillé

1. Cloner le repo, lire son contenu actuel, proposer un plan court.
2. Mettre en place la base : structure, thème (selon la maquette retenue), i18n FR / EN.
3. Construire la page d'accueil section par section, dans l'ordre du §4.
4. Brancher le formulaire de contact.
5. Vérifications : responsive, accessibilité, contenu FR / EN identique, aucune donnée personnelle sensible visible.
6. Déploiement.

## 10. Captures de référence (dossier `design/`)

Rendu fidèle de la page d'accueil, textes provisoires compris :

- `design/accueil-clair.png` : bureau (1360 px), thème clair, **thème par défaut**.
- `design/accueil-sombre.png` : bureau (1360 px), thème sombre.
- `design/accueil-mobile-clair.png` : mobile (390 px), thème clair.
- `design/accueil-mobile-sombre.png` : mobile (390 px), thème sombre.

Ce que les captures montrent : l'ordre des sections de §4, les trois cartes de couleur, la bande de numéros de section, les cadres pointillés « À COMPLÉTER », le bouton de thème (lune / soleil) et les boutons FR / EN dans la navigation. Les captures sont statiques : le bouton de thème et la langue doivent fonctionner dans le vrai site.
