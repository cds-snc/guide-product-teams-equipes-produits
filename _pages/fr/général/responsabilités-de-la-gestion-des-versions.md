---
layout: homepage
title:  "Responsabilités de la gestion des versions"
lang: fr
permalink: "/responsabilités-de-la-gestion-des-versions/"
trans_url: "/release-management-responsibilities/"
---

## Responsabilités de la gestion des versions

**Objectif du présent document:** Comprendre quelles sont les responsabilités et le rôle de l'équipe produit et des unités commerciales avec la gestion des mises en production.

**Si une équipe compte plusieurs membres d'une même communauté, ils partagent les responsabilités de leur discipline.** Par exemple, s'il y a plusieurs développeurs sur un produit, ils se répartissent les responsabilités entre eux.

**D'autres peuvent (et devraient) soutenir les responsabilités d'autres équipes.** Ce document décrit qui est responsable en dernier ressort. Il ne limite pas les personnes qui peuvent être impliquées. De nombreuses responsabilités touchent de nombreux membres d'une équipe produit.

- <a href="#section-1">Qu'est-ce que la gestion des versions?</a>
- <a href="#section-2">Responsabilités du chef de produits/prestation des services</a>
- <a href="#section-3">Responsabilités des développeurs</a>
- <a href="#section-4">Scénarios/Projets</a>

### Qu'est-ce que la gestion des versions? {#section-1}

La gestion des versions décrit tous les processus et artefacts liés au passage du code d'une idée à son exécution en production, tout en causant le moins de perturbations possible.

### Responsabilités du chef de produits/prestation des services {#section-2}

* Aide l'équipe de développement dans la mise en œuvre du guide d'ingénierie des versions (_document en cours_)
* Travaille avec l'équipe de développement pour définir une liste de contrôles des versions
* Fais le suivi des changements du ATO (autorisé à opérer) et le SA&A (Évaluation et autorisation de sécurité)
* Convient d'une <a href="https://semver.org/lang/fr/">gestion sémantique de version</a>
* Décide de la manière de publier les notes de publication ou de notifier les changements à venir
* S'assure que l'impact des changements a été analysé en profondeur (interdépendances des produits) 
* Travaille avec les unités commerciales et les équipes de sensibilisation pour communiquer les changements à tous les niveaux (utilisateurs, soutien, parties prenantes)
* Établit un processus agile de publication simulatnée si la publication d'un seul composant ne peut être effectuée de manière indépendante

### Responsabilités des développeurs {#section-3}

*   Veille à ce que les meilleures pratiques d'ingénierie de publications suivantes soient mises en œuvre :
    * Un environnement d'essai, d'intégration et de production et leurs systèmes de déploiement automatique
    * Examen standardisé des révisions de code
    * Stratégie de numérotation des versions
    * Manifeste des composants de système compatibles (c'est-à-dire créer des versions de système)
    * Automatisation des notes de mise à jour
    * Liste de contrôles de version
    * Audit de changements de version
    * Faciliter le retour en arrière
    * Déploiement bleu/vert
    * Activer la nouvelle version en étape

* S'assure que chaque candidat applicatif est correctement testé (manuellement ou automatiquement).  Les tests doivent couvrir: les tests unitaires, les tests d'intégration et les tests de performance.
* S'assurer que chaque version candidate a été soumise à une analyse de vulnérabilité
* Définit une procédure de correction des problèmes urgents
* Finalise la vérification de la version par l'approche canari ou bleu/vert
* Active la mise en production pour tous les clients
* Valide les registres et les métriques de production
* Notifie le PM/DM que la publication de la version est terminée

### Scénarios/Projets {#section-4}

Tous les changements impliqués dans ces scénarios pourraient être le code de l'application, le code de l'infrastructure, la configuration ou certains changements d'environnement.

#### Un MVP est en cours de construction et nous prévoyons le premier lancement

1. Les développeurs travaillent avec le responsable produit, le responsable de la livraison et les conseillers en fiabilité du service pour mettre en œuvre les requis de bases pour l'ingénierie de versionnement :
    * Environnements de test, d'intégration et de production et leurs systèmes de déploiement
    * Examen standardisé des révisions de code
    * Stratégie de numérotation des versions de l'application
    * Manifeste des composants de système compatibles (c'est-à-dire créer des versions de système)
    * Automatisation des notes de mise à jour
    * Liste de contrôles de la publication
    * Audit de changement de version
1. Le chef de produit donnent le feu vert pour préparer le déploiement de la version
1. Le développeur déploie la nouvelle version

#### Une nouvelle fonctionnalité est achevée et prête à être diffusée pour un produit existant

1. Le chef de produit, avec l'aide du responsable technique, est chargé d'évaluer l'impact de la nouvelle version de l'application à livrer.
1. Le développeur définit/révise le mode d'emploi pour les correctifs urgents
1. Le développeur passe en revue la liste de contrôles des versions avec le DM
1. Le développeur valide la nouvelle version via une version canari ou un déploiement bleu/vert et le chef de produit donne son accord
1. Le développeur active la nouvelle version pour tous les clients
1. Le développeur effectue la vérification finale en production
1. Le PM/DM rédige et envoie une note de mise à jour à toutes les parties prenantes et aux clients

#### Caractéristiques du produit couvrant plusieurs services prêts à être publiés (interdépendance) 
1. Le chef de produit, avec l'aide du responsable technique du produit, est chargé d'évaluer l'impact de la nouvelle version de l'application à livrer
    * Idéalement, chaque sortie de composant devrait être indépendante et ne pas avoir d'impact sur les autres composants. Le responsable technique doit s'assurer que les techniques appropriées sont utilisées pour qu'il en soit ainsi : rétrocompatibilité, nouvelles versions d'API et marquage des caractéristiques
    * Si une publication indépendante n'est pas possible, un processus de publication simultanée doit être mis en place
1. Processus de publication simultanée ou "Agile Release Train"
    * Un calendrier fixe est défini (chaque sprint)
    * Démonstration du système : La démo du système fournit un mécanisme d'évaluation du système de travail, qui est un incrément intégré de toutes les équipes
    * La synchronisation est appliquée - Toutes les équipes dans le train sont synchronisées sur la même durée de sprint
    * Un DM est affecté et dédié au train
    * Le DM veille à ce que les silos soient brisés et à ce que la communication soit renforcée 
