---
layout: homepage
title:  "Release management responsibilities"
lang: en
permalink: "/release-management-responsibilities/"
trans_url: "/responsabilités-de-la-gestion-des-versions/"
---

## Release management responsibilities

**Purpose of this document:** An understanding of what responsibilities belong to what role across the product team and business units when dealing with production releases

**If there are multiple team members from a community on a team, they share the responsibilities for their discipline.** For example, if there are multiple developers on a product, they divide up the responsibilities amongst themselves.

**Others can (and should) support other team’s responsibilities.** This document describes who’s ultimately accountable. It doesn’t limit who can be involved. Many responsibilities touch many members of a product team. 

- <a href="#section-1">What is release management?</a>
- <a href="#section-2">Product/Delivery manager responsibilities</a>
- <a href="#section-3">Developer responsibilities</a>
- <a href="#section-4">Scenarios/Walkthroughs</a>

### What is release management? {#section-1}

Release management describes all the processes and artifacts related to getting code from an idea to running it in production, while causing as little disruption as possible.

### Product/Delivery manager responsibilities {#section-2}

*   Supports the development team in implementing the release engineering playbook (_document in progress_)
*   Works with the development team in defining a release checklist
*   Accounts for ATO (Authorized to Operate), SA&A (Security assessment and authorization) changes
*   Agrees upon a <a href="https://semver.org/">Semantic Versioning</a> scheme for software or components that communicates impact of change
*   Decides how to publish release notes or notify upcoming changes
*   Ensures impact of changes has been thoroughly analyzed (business readiness and product dependencies) 
*   Works with business units and outreach teams in communicating changes to all layers (users, support, stakeholders)
*   Establishes an agile release train process if releasing a single component cannot be done independently

### Developer responsibilities {#section-3}

*   Ensures the following release engineering best practices are implemented:
    * Testing, staging and production environments and their deployment pipelines
    * Standardized pull request review
    * Application versioning scheme
    * Manifest of compatible system components (i.e. create system versions)
    * Release notes automation
    * Release checklist
    * Release change audit
    * Ease rollback
    * Blue/green deployment
    * Canary release

*   Ensures each release candidate is properly tested (manually or automatically).  Testing should cover: unit tests, integration tests and performance tests.
* Ensures each release candidate has gone through a vulnerability scanning
* Defines a play-by-play for hotfix/urgent fixes
* Finalizes release verification through canary or blue/green approach
* Enables release in production for all customers
* Validates production logs and metrics
* Notifies PM/DM that release is completed


### Scenarios/Walkthroughs {#section-4}

_All the changes involved in those scenarios could be application code, infrastructure code, configuration or some environment changes._

#### An MVP is being built and we are planning for the first launch

1. Developers work with the product manager, delivery manager and the service reliability advisors in implementing the must have release engineering practices:
    * Testing, staging and production environments and their deployment pipelines
    * Standardized pull request review
    * Application versioning scheme
    * Manifest of compatible system components (i.e. create system versions)
    * Release notes automation
    * Release checklist
    * Release change audit
1. PM gives the green light to prepare for a production release
1. Developer kicks off the release

#### A new feature is completed and ready to be released for an existing live product

1. The Product Manager with the help of the Tech Lead is responsible for assessing the impact of the new app version to be delivered.
1. Developer defines/reviews the play-by-play for hotfix/urgent fixes
1. Developer go through the release checklist with the DM
1. Developer validates the new release via a canary release or blue/green deployment and PM provides sign off
1. Developer enables the new release for all customers
1. Developer do final verification in production
1. PM/DM write and sends release note to all stakeholders and customers

#### Product features spanning multiple services ready to be released (interdependence) 
1. The Product Manager with the help of the Product Tech Lead is responsible for assessing the impact of the new app version to be delivered
    * Ideally every component release should be independent and not impact other components. Tech lead should work on ensuring that proper techniques are used to make it so: backward compatibility, new API versions, and feature flagging
    * If independent release is not possible, an Agile Release Train process needs to be established
1. Agile Release Train process
    * A fix schedule is defined (every sprint)
    * System demo: The System Demo provides a mechanism for evaluating the working system, which is an integrated increment from all the teams
    * Synchronization is applied – All teams on the train are synchronized to the same sprint length
    * A dedicated DM is assigned and dedicated to the train
    * DM ensure silos are broken and communication heightened 
