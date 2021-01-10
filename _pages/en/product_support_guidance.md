---
layout: homepage
title:  "Product support guidance"
lang: en
permalink: "/product_support_guidance/"
trans_url: "/conseils_de_support_produit/"
---

# Product support guidance

This document outlines guidance on how to setup a product team to operationally support a product for production. Teams should feel empowered to override this guidance to better meet their specific needs, but hopefully this enables new teams to bootstrap their operations faster or existing teams to improve areas rapidly that they haven't invested in. While this guidance may be useful to those outside of CDS, the target audience is CDS teams starting a new product and will be optimized as such. Changes always welcome via pull request [on this doc](https://github.com/cds-snc/guide-product-teams-equipes-produits/tree/master/_pages/en)!

There are several parts to product support (below), all of which cross disciplines and phases of working. More detailed descriptions can be found in the [A Model](#_v6k5uja8xz2u) section or by clicking on an element's link.

- [**Scope**](#scope)
What is being supported should be explicitly defined, including the users, stakeholders, technical architecture, and upstream/downstream dependencies.
- [**Setting and measuring objectives**](#setting-and-measuring-objectives)
How to define your desired outcomes and measure that you're meeting them (i.e. SLIs, SLOs, SLAs).
- [**Staffing**](#staffing)
 Who do you need on your team to support a typical web application and how to evaluate their performance doing product support (i.e. references to progression frameworks and/or recommended competencies).
- [**Planning for support**](#planning-for-support)
 What to do to become ready for support, including what might go into product backlogs and training.
- [**Helping users**](#helping-users)
What are different ways the product team supports users directly or indirectly (i.e. tier 1,2,3, etc.). Includes methods of reaching and connecting with users, such as proactive communication.
- **[Support/oncall rotations](#supportoncall-rotations)**
 Who performs support tasks, when (including on demand or after hours), and how can things be escalated?
- [**Operational documentation**](#operational-documentation)
 Instructions on how to carry out common tasks and how to manage that info including release, recovery, and incident management documentation.
- [**Tooling**](#tooling)
 What tools can you use to help with support, how might you use them, and how to programmatically interface with them.

It's recommended that the Delivery Manager is the primary owner of a team's product support model, with the Product Manager and Product Tech Lead as secondary owners (or one is primary if a team doesn't have a DM). With that said, all team members must contribute to creating the plan and materials for the support model, as well as participating in it.

## Checklist

Based on the elements of product support, these are things that a team should have to be ready to support a product:

- User journey map: Document how your users / external stakeholders experience your service [(more info)](#setting-and-measuring-objectives)
- Internal stakeholder journey map: Document how government employees interact with your service [(more info)](#setting-and-measuring-objectives)
- Up: Define what "up" means in the context of your journey maps and technical architecture [(more info)](#setting-and-measuring-objectives)
- SLIs: Indicators agreed upon and documented [(more info)](#setting-and-measuring-objectives)
- SLOs: Definition of met, warning, and critical for each SLI [(more info)](#setting-and-measuring-objectives)
- SLAs: Documented how team will meet SLOs and what happens if not met [(more info)](#setting-and-measuring-objectives)
- Prioritizer role: 2 people named [(more info)](#staffing)
- Incident commander role: 5 people named, trained, and scheduled for an oncall rotation [(more info)](#staffing)
- Operations role: 5 people named, trained, and scheduled for an oncall rotation [(more info)](#staffing)
- User support role: 2 people named [(more info)](#staffing)
- Communication Lead: 1 person named and trained to communicate to users [(more info)](#staffing)
- Workload management: Team has decided how feature and support work backlog is managed/prioritized, and by who [(more info)](#planning-for-support)
- Error budget: Threshold(s) is established to indicate when team should prioritize technical/process debt over new features. [(more info)](#error-budgets-and-debt)
- Support/oncall rotations: People are scheduled and there is a single source of truth schedule in OpsGenie [(more info)](#supportoncall-rotations)
- Support Training Onboarding: Training for new team members [(more info)](#supportoncall-rotations)
- Support Training Recurring: Repeated support training and documentation updates are planned to happen quarterly [(more info)](#training-for-oncall)
- Oncall overtime compensation: Has CDS senior management approved overtime for oncall? [(more info)](#compensation-for-oncall)
  - If not, do your SLAs reflect business hour only support? Do your users know?
- HR processes: Oncall team members know how to file for comp or time in lieu of pay [(more info)](#compensation-for-oncall)
- System Access: Does your support team have access to the tools they need? [(more info)](#role-transition)
  - OpsGenie
  - Freshdesk
  - (Anything in your system)
  - Monitoring system
- Self Serve Content: Do you have published information explaining: [(more info)](#self-serve-help)
  - What is the product, what does it do, what doesn't it do?
  - How to use it
  - How to get help
  - Privacy policy
  - Compliance documentation
  - Is it up?
  - Frequently asked questions (FAQ)
- Receive Support Requests: Users are able to file tickets or reach out for help (such as via Freshdesk) and someone is monitoring the places that happens [(more info)](#incoming-requests)
- Support Request: The team has established how to measure performance handling support requests [(more info)]()
- Feedback: The team has a way to escalate feedback received via [(more info)](#collecting-feedback)
  - Support requests
  - Social and traditional media
  - The product itself
  - Support documentation
- Business Hours: The team has a shared understanding of what constitutes business hours versus after hours, as well as any changes to responsibilities depending on the time frame (if any).
- Operational Doc Index: Do you have a document in Google Drive or GitHub that links to all your operational documentation? [(more info)](#operational-documentation)
- Critical docs: Have you documented the following things and added a link to your Operational Doc Index, and/or your team has a shared understanding around: [(more info)](#critical-docs)
  - Vision, mission, other team principles
  - Team roster
  - Planning board
  - Planning boards
  - Product support plan
  - Onboarding docs
  - Offboarding docs
  - Service journey map
  - Code repos
  - Infrastructure links
  - System architecture
  - Change process
  - Deployment instructions
  - Incident response process
  - Support or oncall rotation schedule
  - Tools
  - ATO (and/or other compliance) docs
  - Decision docs
  - Credential rotation strategy
  - Escalation instructions
- Offboarding: Do you know how to revoke access and retain knowledge if a team member leaves or needs to be removed

## A Model

These are slightly more expanded descriptions of the elements of product support that a team should have in place to make a product/team/service reliable in production. Each section also has links to material either referenced to write the section or that explains the concept in more depth.

## Scope

All other things in this guidance will be influenced by what is _actually_ in scope for needing support. Start by creating a document that includes answers to the following questions:

- What parts of your product or service is your team supporting?
- Who are your users?
- Who are your stakeholders?
- Are there products or services that depend on yours, or you depend on, that you are also supporting?

Make sure these are clearly articulated so that you know what your team owns. For example, answering the first question ("What parts…") might make use of the technical architecture to verbosely cover what is to be supported.

### Additional/cited resources

- Adorn's Operationational Excellence - [Section 2 on Architecture](https://github.com/adhorn/operational-excellence/blob/main/ORRtemplate.md#2-architecture)

## Setting and measuring objectives

Scope went over the "what" and this covers "why" you are supporting a product. This will determine how you define and optimize the support process to your specific context. Ask questions like:

- Why are you supporting a product or service?
- Whose needs are you trying to meet?
- What does it look like to meet (or not meet) those whys and needs?
- How are users experiencing your system?
- How are stakeholders experiencing your system?
- Which parts of your system are involved in meeting those whys and needs?
  - Which are within your control?
  - Which are outside your control?

After you clearly elucidate the answers to these, you can move to the exciting task of mashing together your reasons, your technical architecture, and your people architecture to support those reasons. There are few connected, yet distinct, concepts that are helpful to be familiar with:

- **SLIs (Service Level Indicators)**
 A significant, measurable aspect of your service.
- **SLOs (Service Level Objectives)**
 Thresholds for when SLIs mean good, worrying, and bad. Often measured over a time period.
- **SLAs (Service Level Agreements)**
 A contract with users based on SLOs saying what happens if an SLO isn't met. Often measured over a time period.

SLOs and SLAs often get mixed up. Both contain thresholds on indicators, but usually SLOs are used internally and are very stringent, whereas SLAs are used externally via a contract and are more forgiving. The idea is that if you hit your internal-facing SLOs, you'll also meet the SLAs.

Based on your answers to the earlier questions, you should:

1. Document a list of SLIs that are relevant to your users' journey and desired outcomes.
2. Define what "up" means to your users, stakeholders, and your team based on those SLIs and your system architecture.
3. Determine how you can measure those SLIs in a continuous way, if not in real time. Include how the SLIs map to uptime.
4. Make SLOs: Agree on thresholds for defining good, worrying, and bad performance of your SLIs
5. Put a mechanism in place to continuously monitor SLIs and SLOs (i.e. a monitoring system and/or dashboard)
6. Setup alerts for when SLOs are not being met (i.e. worrying and/or bad)
7. Make SLAs: Document how your team plans to meet SLOs and what happens if they aren't met.
8. Share SLAs with stakeholders and users, and repeat steps as needed

### Additional/cited resources

- [Google SRE: Chapter 4 - Service Level Objectives](https://landing.google.com/sre/sre-book/chapters/service-level-objectives/)
- The GDS Way: [Run an SLI Workshop](https://gds-way.cloudapps.digital/standards/slis.html) and [Make data-driven decisions with SLOs](https://gds-way.cloudapps.digital/standards/slo.html)

## Staffing

A team maintaining software in production minimally needs to have the following roles to keep it reliable (below, with minimum number of people that can fill the role). A single person may hold multiple roles.

- **Prioritizer** (2 people)
 Someone who decides on the priority of longer-term support-related stories/tasks. Likely the product manager and delivery manager (or someone allocated to the Support Squad)
- **Oncall**
  - **Incident Commander** (5 people)
 Leads an incident response team, kind of like the Prioritizer role urgent moments. Stays high-level by coordinating efforts, classifying severity, communicating with users and stakeholders, directs focus of recovery, and blocks stakeholders from distracting operations folks. Members from Product, Design, Policy, Research, and Outreach communities can fill this role, although developers can too if staffing levels allow for it.
  - **Operations** (5 people)
 Performs detailed and hands-on investigation into an incident. Developers or highly technical members of other communities can fill this role.
- **User Support** (2+ people, depending on needs)
 Triages incoming support-related stories/tasks from users and communicates status back to them. This may pull from all communities, but it's good to have at least one of these roles be a Developer.
- **Communication Lead** (1 person)
 Handles proactive communications to users, and sets up processes for outreach for significant product announcements and user engagement.

The number of people may seem high for some products, but they are designed with redundancy built-in. For example, if there are 5 people capable of the Operations role, a weekly rotation allows them to not have to repeat the role for over a month. If someone leaves the team or takes leave, it keeps the team at one month rotation levels so as to prevent burnout, boredom, and undistributed knowledge.

Depending on one's job title, performance in filling Incident Commander and Operations roles are as follows:

- Delivery managers:
  - [Delivery Planning](https://docs.google.com/document/d/1cOcfeE29PMlX-vxO1zNc2oFdjVzqpl06d-WoJBcASNM/edit#bookmark=id.zeoxobttbni8)
  - [Delivery Workflow](https://docs.google.com/document/d/1cOcfeE29PMlX-vxO1zNc2oFdjVzqpl06d-WoJBcASNM/edit#bookmark=id.ek5f5bho184a)
- Designers:
  - [Visibility into process, internally and externally / Facilitating decisions and risks](https://docs.google.com/document/d/16qPih4kPVOa8hiPgXiK--oxwapbJ5T9toQaW6OSN51I/edit#bookmark=id.qgdd9hkfroh5)
  - [Solving problems in the work and on teams / Leadership and guidance](https://docs.google.com/document/d/16qPih4kPVOa8hiPgXiK--oxwapbJ5T9toQaW6OSN51I/edit#bookmark=id.2l9s4fivehu1)
- Developers:
  - [DevOps / Incident Response](https://docs.google.com/document/d/1nlWprj7zmSzRWOdOO458QAJfLWFxb4tTRdp08f5f_iU/edit#heading=h.ycsrko3wlsfk)
  - [DevOps / Support](https://docs.google.com/document/d/1nlWprj7zmSzRWOdOO458QAJfLWFxb4tTRdp08f5f_iU/edit#heading=h.ycsrko3wlsfk)
- Outreach:
  - Issues management
  - Media relations
- Policy:
  - [Adaptability and learning](https://docs.google.com/document/d/1JaZoIjElQtk_dzEfkKdidKmizZWtxsjMA_A6ijBHeHI/edit#bookmark=id.e649ezq3sbzd)
  - [People and resource management](https://docs.google.com/document/d/1JaZoIjElQtk_dzEfkKdidKmizZWtxsjMA_A6ijBHeHI/edit#bookmark=id.e649ezq3sbzd)
- Product managers:
  - [Operational Management](https://docs.google.com/document/d/1glVLLPaQlj5UKvG3yTPKxl97ahbgj3T7q1FxOjlDINU/edit#bookmark=id.nsbpddvf8wql)
  - [Relationship Building and Stakeholder Management](https://docs.google.com/document/d/1glVLLPaQlj5UKvG3yTPKxl97ahbgj3T7q1FxOjlDINU/edit#bookmark=id.7ro4jg94cwo2)
- Researchers:
  - [Integration in Agile Software Development](https://docs.google.com/document/d/16DGlPORftHaLjJEP31wKMurPD1w8T029JxlTcdG1ufE/edit#bookmark=id.x3vw6bvhcz7w)
  - [Strategic Insight and Direction](https://docs.google.com/document/d/16DGlPORftHaLjJEP31wKMurPD1w8T029JxlTcdG1ufE/edit#bookmark=id.e1xpg7ha98cg) (especially Tactical Decision Making)

### Tiered Support

Once a team's user base gets larger than a couple hundred direct users or if support needs are unable to be met by the existing team, staffing should expand and support functions may be spread across different tiers. This enables the team to further protect the focus of the core delivery team with a group of non-rotational employees that can handle repeat and straightforward support requests.

The number of employees needed will depend on your volume of user requests for support, but you might layer it initially in two or three tiers. Regardless of the number of tiers, they operate by escalating user requests as necessary through increasing levels of product and technical expertise (i.e. the higher the tier number, the more "expert" the user support person is).

A couple examples might look like...

**Two Tier**

- **Tier 1**
 Non-rotational employees that focus on repetitive and/or straightforward requests. Probably less technical and/or familiar with the product (and design/architecture decisions) than folks in later tiers.
- **Tier 2**
 Staffed by the [Support Squad](#planning-for-support). Folks are more technical and deeply aware of the product, capable of fixing bugs and making changes to the product.

**Three Tier**

- **Tier 1**
Non-rotational employees that focus on repetitive and/or straightforward requests. Probably less technical and/or familiar with the product (and design/architecture decisions) than folks in later tiers.
- **Tier 2**
 Non-rotational employees that are technical enough that they can go into the product's admin interface or database to make adjustments in the event of more complicated issues.
- **Tier 3**
 Staffed by the [Support Squad](#planning-for-support). Folks are more technical and deeply aware of the product, capable of fixing bugs and making changes to the product.

### Additional/cited resources

- Google SRE Book - [Chapter 9: Incident Response](https://sre.google/workbook/incident-response/)
- [CDS Career Progression Frameworks](https://drive.google.com/drive/folders/1GPxUZiYSL5DPQSL8Db9QZIg_kPl6Q8hu?lfhs=2)
- Freshworks Blog - [Tiered vs. Swarming Support](https://freshservice.com/itsm/three-tier-support-vs-swarming-blog/)

## Planning for support

There are a few aspects to planning to cover product support, but all hover around the core theme of time management. Often, support is focused on unexpected events or incoming requests, so it's more around allocating people's time/focus on those things that arrive.

### Segmenting the Team

While products with few users and incidents can be run by a unified team that does Scrum, ones with a large user base or a high number of incidents often have enough support activity that they can't plan that kind of work two weeks ahead of time (and if they do, their two week commitments are regularly de-railed). Most of CDS's products aim to be population or government-wide user bases (i.e. the latter kind) split their team and backlogs into two parts:

- **Feature Squad**
  - Scrum-style work planning (i.e. 1-2 week commitments)
  - Has its own story board with improvements, new features, and non-urgent bug fixes
  - Backlog includes things to make life easier for the Support Squad
  - Helps with code reviews for Support Squad work
- **Support Squad**
  - Kanban-style work planning (i.e. constant triage)
  - Assignment to this team is synonymous with being oncall during and after hours
  - Has its own task board for incoming requests, incidents, and urgent bug fixes
    - Might be connected to a support form for user requests/inquiries (i.e. this is one way tickets are generated)
  - Is at least two people that compose [Prioritizer and User Support roles](#staffing)
    - Prioritizer role actively triages priority of items on the task board (once/twice a day)
  - When all is quiet, team members allocated to this can help the Feature Squad with the things lowest on their board (i.e. least critical work) or things focused on improving Support Squad work (which also live on the Feature Squad backlog)

Folks allocated to these parts of the team are allocated full-time (during and after business hours for the Support Squad).

If the typical volume of work for the Support Squad is low, then the Product Manager and/or Delivery Manager may be split across both squads (i.e. leading vision/triage on Feature Squad and filling the Prioritizer role on Support Squad). However, for higher volume support loads (like that experienced by COVID Alert), it's better to have a full-time, weekly rotation for the Prioritizer role on the Support Squad. Note that the person filling the Prioritizer role may also be filling a User Support role too.

For allocation non-Prioritizer/User Support roles on the Support Squad, team members would have a full-time, weekly rotation into those roles. At least one developer must be allocated to the Support Squad at any time, although it's ideal to have two if support volume is high. In the example below, if there are after hours code changes that need review and immediate merge, a person from the Feature squad is appointed.

Here's a sample of how this might look in practice, for a team that has a consistently high support volume.

The team is composed of the following people:

- Laurie (Product)
- Ian (Delivery)
- Brian (Outreach)
- Ethel (Design)
- Steve (Design)
- Jayne (Research)
- Edward (Policy)
- Frankie (Dev)
- Kristin (Dev)
- Tommie (Dev)
- Elaine (Dev)
- Eleanor (Dev)

You might have squad rotation that looks like this below, where the team does their rotations on their Support Squad also for oncall roles.

(changes in _italics_)

**Week 1**

Feature Squad

- Laurie (Product)
- Ian (Delivery)
- Ethel (Design)
- Steve (Design)
- Jayne (Research)
- Edward (Policy)
- Kristin (Dev) _- After hours code reviewer_
- Tommie (Dev)
- Elaine (Dev)
- Eleanor (Dev)

Support Squad

- Prioritizer, Incident Commander, User Support: Brian (Outreach)
- Operations, User Support: Frankie (Dev)

**Week 2**

Feature Squad

- Laurie (Product)
- Ian (Delivery)
- _Brian (Outreach)_
- Steve (Design)
- Jayne (Research)
- Edward (Policy)
- _Frankie (Dev)_
- Tommie (Dev)_- After hours code reviewer_
- Elaine (Dev)
- Eleanor (Dev)

Support Squad

- Prioritizer, Incident Commander, User Support: _Ethel (Design)_
- Operations, User Support: _Kristin (Dev)_

**Week 3**

Feature Squad

- Laurie (Product)
- Ian (Delivery)
- Brian (Outreach)
- _Ethel (Design)_
- Jayne (Research)
- Edward (Policy)
- Frankie (Dev)
- _Kristin (Dev)_
- Elaine (Dev)_- After hours code reviewer_
- Eleanor (Dev)

Support Squad

- Prioritizer, Incident Commander, User Support: _Steve (Design)_
- Operations, User Support: _Tommie (Dev)_

**Week 4**

Feature Squad

- Laurie (Product)
- Ian (Delivery)
- Brian (Outreach)
- Ethel (Design)
- _Steve (Design)_
- Edward (Policy)
- Frankie (Dev)
- Kristin (Dev)
- _Tommie (Dev)_
- Eleanor (Dev)_- After hours code reviewer_

Support Squad

- Prioritizer, Incident Commander, User Support: _Jayne (Research)_
- Operations, User Support: _Elaine (Dev)_

**Week 5**

_And so on… \&lt;/end week rotation example\&gt;_

Note that the team has maintained the minimum staffing levels and role assignments, but has made tradeoffs based on their needs. They might make changes like:

- If the support load is especially heavy, they may even consider adding one or more people to the Support Squad rotation (and possibly to the entire team).
- If Operations need increase on the Support Squad, they might add another developer to the weekly rotation (increasing the allocation to 3 people, 2 of which are devs in Operations and User Support roles)
- This rotation assumes that Laurie and Ian (Product and Delivery Managers) are providing oversight to both teams, but that the Prioritizer is following the details on the Support Squad side more closely. If Laurie and Ian's responsibilities are light, it's possible they could rotate onto Support Squad too. If not, it's still good to get them into the rotation on weeks they can afford it so that they are able to learn from and build empathy for the support part of their product, even if that rotation doesn't come up as often as others (i.e. when Feature Squad has a stable backlog planned out for a few weeks/sprints). If even that's not possible, then even if they can't afford to be on the Support Squad, they could be added to the oncall rotation after hours as Incident Commander to get at least some exposure to support.
- Some teams might bind the rotations to Feature Squad _sprints_ rather than weeks (in the event that sprints are longer than one week).

There are a few other items to keep in mind:

- Being oncall and/or on a support rotation is a HUGE learning opportunity to understand users and the system, and enables better decisions when returning to feature work.
- Rarely do people _want_ to do support only, which is why it's rotational so that people don't up and quit your team. It's also _hard_ and keeping it rotational limits burnout.
- Each rotation should have a clear handoff between the incoming and outgoing members of the Support Squad. Schedule mutually agreed upon time at the beginning of a rotation to talk about what happened and what is still active.
- Keep the Support Squad task board clean! Prioritization should be happening constantly and it should be quick for folks to identify what's the highest priority at any given moment. Things that are longer than a week or two should probably be moved to the Feature Squad's backlog for future prioritization, if its urgency isn't high.

### Estimating Time for Support Activities

One nice thing about having folks dedicated to a Support Squad is that the Feature Squad can often make their plans without explicitly estimating certain kinds of support activities. If you choose to _not_ to separate your team into separate functional units, you need to build dedicated time for some kinds of support events such as:

- Incidents (unpredictable # of hours for unknown # of people)
- Incident post-mortems (1h for write-up x 1 person, 1h for review x 3 or more people including PdM)
- Oncall (hours someone may not work on features either to work on user requests, catch-up on sleep. or reduce day-time hours for time in lieu)
- Communicating with users for requests, i.e. callbacks (varies depending on request)
- Setting up demo environments for stakeholders (1-2h depending on the application)
- Updating product support documentation, like runbooks (time varies based on update)
- Documenting how the team is responding to bugs, via a comms plan (time varies based on support load)
  - Maintaining logs or a single source of truth for what happened on support tasks
- Collecting information for stakeholder requests (such as performance or evaluation data)
- Explaining how the product works, for both users and stakeholders
- Monitoring social media, news, and other mediums for issues

If some blanket time isn't included for these things in your sprint commitment, teams may start to become disillusioned and non-participatory in the planning process when they feel like the team can never hit its goals.

### Error Budgets and Debt

If the product and team are not meeting SLOs and/or SLAs repeatedly, the team should consider this a breach of contract and a breach of its error budget. While the Support Squad is normally responsible for handling things that violate SLO/SLAs, this would involve diverting Feature Squad to work exclusively on the root causes and technical/process debt that are leading to recurring failures.

There are a few different ways teams can know when they hit this situation, and should be determined ahead of time when planning for support. Some possible ways to do this:

- Any violation of an SLO (i.e. not the slightly more lax SLA) triggers a prioritization discussion
- Having a meta SLO around SLO violations, and violation of the meta SLO triggers this pivot automatically

### Compensation for Oncall

CDS-ers that are scheduled for oncall rotations are entitled to the following compensation, but this may vary depending on job classification (this is from the [CS group contract](https://www.tbs-sct.gc.ca/agreements-conventions/view-visualiser-eng.aspx?id=1#toc12212212215)):

- 30min for every 4h of standby time (outside core 7.5h workday), or 0.125h for each hour of standby
- 3h for every 1h of active oncall time (outside core 7.5h workday)

Depending on your job role, you can either get paid for the time by entering into Phoenix or taking Time in Lieu of Pay (i.e. taking the time off) by filling out the [overtime form](https://docs.google.com/forms/d/e/1FAIpQLSciaA-wG7C_rf6s-0ieYT7Hyuud5vaWT3CHPQIZ05MeFd6T-Q/viewform). Some classifications don't allow payment, so have folks talk to their line manager about how they can or can't get compensated. Either way, check your job contract to know what the specific terms are when you file for overtime either in Phoenix or via the overtime form.

Lastly, teams should get approval from CDS management to be able to do oncall from a compensation standpoint. If management doesn't approve, then consider adjusting your SLOs and SLAs to match business hours only support (and updating your users on the update).

### Training for Oncall

Being paged for oncall is stressful! It's a sudden context switch and has the weight of high urgency and importance. What makes it even more stressful and ineffective is not being prepared. The other downside to folks not prepared is that it creates "shadow" oncall for team members that are, essentially being oncall at all times and likely burning out as a result.

Therefore, it is imperative that time is allocated routinely to train team members to handle unexpected events. This should be performed during initial onboarding to the team, but also repeated at a regular cadence (recommended quarterly) since the product and support needs will change over time.

Topics the team should be trained on:

- How to use the product
- Monitor incoming user requests in Freshdesk
- Incident response process, including
  - Incident command role
  - Operations role
- How SLOs and SLAs are monitored, and where monitors can be viewed
- Where the squad rotation or oncall schedule lives
- How folks get notified of likely incidents
- Escalation paths, including:
  - Internally within CDS
  - CCCS
  - TBS OCIO
  - Other internal TBS partners
- How to communicate with users and the public
- Monitor channels that users communicate through, such as customer support to keep users and the stakeholders informed
- How to login to any things that might be used to assess severity
- Contact information for team members (and preferred contact mechanisms)
- Role handoff process (i.e. when rotating in/out of a squad or oncall rotation)
- Where historical incidents and resolutions are recorded and saved
- Common errors and fixes for the service, for things that haven't been permanently repaired yet
- Disaster recovery and rollback processes

The Delivery Manager and Product Tech Lead can jointly own the training effort, or delegate to a well equipped team member.

### Scheduling Rotations

There should be a single source of truth of times when people are on the Support Squad or oncall rotation. Teams at CDS should use [OpsGenie](https://cds-snc.app.opsgenie.com/), since it also functionally controls pages/alerts while oncall. Internal Ops can get all team members access and assign them to a team within the product.

The Delivery Manager should be assigned as the owner of the schedule and review the schedule periodically. To make their life easier, it's good for the team to have a centralized leave schedule too (recommended [CDS Vacation Calendar](https://docs.google.com/spreadsheets/d/1UZBUyYbeLqUeCazwesWrcscfQ2IqPOMoBtRfuQfQG6M/edit)). With that said, when a person decides to take leave or become unavailable during their rotation, it is their responsibility to negotiate a swap or arrange coverage from another peer.

### Additional/cited resources

- [CDS's OpsGenie](https://docs.google.com/spreadsheets/d/1UZBUyYbeLqUeCazwesWrcscfQ2IqPOMoBtRfuQfQG6M/edit)

## Helping users

Users and stakeholders are going to need help, which is fine because the requests for help can be a good feedback mechanism. But, it can get overwhelming if not handled in a variety of ways.

### Self Serve Help

Before launching a product, teams should establish a web presence for product information. This should be maintained by the product team itself, and updated as a first class task and/or included in acceptance criteria for new features or roadmap deliverables. Examples of things that might be on the product's web home are:

- What is the product, what does it do, and what doesn't it do
- How to use it
- How to get access to it (or purchase it for cost recoverable products)
- How to ask for help when web content doesn't cover a need
- Frequently asked questions
- Privacy policy
- ATO documentation
- Announcements of new features or breaking changes
- Status: Is it up? If not, what's broken or being investigated?

A status page has some nuance, in that you'll likely want to find a home for it on different infrastructure than where your product lives in the event that that very infrastructure goes down and you need to notify your users. For example, if your product is hosted on AWS, you may consider putting your status page in Azure or in a different AWS region.

### Incoming Requests

Teams should establish a mechanism for receiving help requests from users. The more users a team has, the more sophisticated this operation becomes.

CDS teams can set up a web form or an email address that funnels requests into [Freshdesk](https://assistance.cds-snc.ca/en/support/login). Requests can either be responded to immediately (if easily resolved) or be moved onto the Support Squad's Trello or GitHub board if it requires more investigation (and hereby prioritization). This can be performed by anyone filling the User Support role.

When a request is put into Trello, it should have a link back to the originating Freshdesk. In this case, Trello should be used only for internal tasking and prioritization; and updates, investigation notes, and correspondence should remain in Freshdesk as the source of truth for status. It's a good idea to note in Freshdesk when something has been added to Trello, so that multiple User Support reviewers don't trip on each other. This might be done via a tag or a note. Things added to Trello get triaged by the Prioritizer, who determines what is most important to work on first.

A few metrics to keep might be the 90th percentile of how long it takes to close a request (i.e. what's the most length of time to satisfy a request), how many requests are received over time, and how many requests are typically received in a day. These will help to know if the product (or its documentation) is failing users and/or if the Support Squad needs more help. This guide focuses on bootstrapping a new product for support, so the scope is for products just starting to acquire users and/or there are somewhere between one to a couple hundred. Tier 1 support is essentially all the other tiers, and as a product grows in usage, you may need to separate tier 1, 2, 3, etc. to create efficiencies. For example, COVID Alert has millions of users and this would be too simplistic of a model for that. But, this might suffice for a product like Notify that likely only has users in the form of government departments that touch its interface on a seldom basis.

### Collecting Feedback

Support requests themselves are a valuable form of feedback, but being able to receive feedback in other contexts (like: it worked!) will give the product team a better idea of what users need and want so that you can better support them. It might also identify feature, policy, or knowledge gaps for the team.

There are a few mechanisms you might consider for this, along with a suggested owner:

- **Social Listening** (Outreach)
 Scan social media, news articles, topical forums, or other places your users are likely to be sharing information about your product. CDS has access to [Meltwater](https://www.meltwater.com/) that can be used to help with this.
- **Help Pages - Did this Help?** (Research)
 When users are scouring your help documentation, it'd be good to collect feedback on if they were able to find what they're looking for. [Google Support pages like the bottom of this page](https://support.google.com/mail/answer/6594?co=GENIE.Platform%3DDesktop&amp;hl=en) are examples of this.
- **Feedback Surveys** (Research)
 Proactively reach out to your users and ask how their experience has been with your product and its support methods. This might be general (i.e. cold emailing users periodically) or contextual (i.e. emailing someone that recently filed a support request.
- **Search Data** (Research)
 If your product and/or support pages have a search box, what are the trends that people are looking for? This might be useful in building out more support content and/or prioritizing what needs to be improved.

### Proactive Communication

Bringing users and stakeholders along proactively is a way to minimize support challenges and avert potential problems. Having a strategic comms plan, or a strat comms person from Outreach on the team, is an effective tactic.

[Social listening](#_k91kxdqcld6d) was mentioned as a reactive tactic, but the opposite can be effective. Posting on social media, publishing roadmaps, or releasing blog posts about product decisions helps users understand how and why to use your product. It also helps reveal tradeoffs that were made and why, potentially help to veer off frustration from your users. Another benefit is that this kind of activity can foster a community of people around your product (example: Unintentionally, doing the beta for COVID Alert's created a bunch of supporters on Twitter that have both championed the product, given strong feedback on how to improve it, and even submitting code pull requests themselves) It doesn't mean you have to constantly be pumping out blog posts at a fixed cadence, but just when it makes sense to do so. This kind of outreach activity can be planned into the release roadmap to get ahead of things (i.e. for each roadmap item, ask if there is something new that should be shared more vocally), but when things go wrong an acknowledgement or explanation can help retain goodwill.

Marketing is usually intended to acquire users, but it can also be a means of setting expectations. If marketing pushes over promise, users may walk away more frustrated and/or file more requests for support. Two action items teams should take into account are to make sure marketing is strategically planned to set feasible expectations and to make sure the Support Squad is familiar with the marketing push including the vocabulary that is used to describe functionality. Relatedly, a thing to plan is how much budget you can allocate to marketing, as this impacts the ways in which you do it (i.e. more formal ads, grassroots pushing, etc.).

## Support/oncall rotations

Defining ahead of time who performs support tasks and when is really important, as well as how to escalate things.. If you follow the recommendations in the [Planning for Support section](#planning-for-support), it'll be mostly clear: the Support Squad does this during and after business hours. With that said, there are a few useful things to keep in mind whether you do or don't follow that model:

### Role transition

For teams following the Feature/Support Squad split or for teams rotating oncall roles like Incident Commander and Operations, there is a need to have a smooth transition from one person to another should the rotation either end or something like an incident goes so long that the person filling the role needs a break.

For planned squad swaps or oncall rotations ends, teams should plan a 15-30 minute meeting where the current role occupants and incoming occupants get together. The goal is to establish the context to make it easier for support requests to be fulfilled and to keep the product reliable.

1. Outgoing Support Squad: What major support efforts or incidents occurred over the last week
2. Incoming Support Squad: What features/changes are likely to be released by the Feature Squad over the next week/sprint
3. Grant access/permissions for incoming squad
4. Revoke access/permissions for outgoing squad

For unplanned transitions (such as during an active incident or someone taking a sick day), you should have a similar kind of exchange. One part to add is that outgoing and incoming parties should clearly and explicitly state that they are taking over the role, say what they now are responsible for, and for how long. For example, an exchange in Slack or over group video conference might look like:

1. **Jim** : This outage has been going on 6 hours and I need to pick up my daughter from day care. I'm going to see if Beth can take over as incident commander.
2. (...a few moments elapse to get Beth into the channel, call, or conversation...)
3. **Beth** : Hey hey! What's going on? How can I help?
4. **Jim** : The scheduler has been down for 6 hours and we're having trouble identifying the cause. We've rolled back to the prior version from this morning's release, updated our users on the outage, have looked at the database, and we've been reviewing the logs to not much avail. Dana is on Ops and is looking into load balancer and firewall rules. I need to duck out to pick up my kiddo at day care -- can you take over?
5. **Beth** : Thanks for the update. I'll take over as incident commander, tracking what's going on and helping keep users and stakeholders updated, but out of Dana's hair while she investigates. If there are any wildly risky solutions, I'll check in with Nat first. Can you send me your investigation log thus far?
6. **Jim** : Will do, and thanks! I'll be back at 6p PT to relieve you.
7. **Beth** : Dana: Anything you need from me?

### Who is oncall?

If you don't follow the Feature/Support Squad setup, it's still recommended that those that fill oncall duties should come from the product team. If folks external to the product team are staffed to be oncall for your product, it means that you're placing someone without context and/or up-to-date knowledge about the product into a decision making role in fast, urgent, and risky situations.

In the event that it isn't possible to only have folks from your product time oncall, then it is critical to find ways to keep those helping up-to-date with team priorities and releases, and to keep oncall operational documentation as up-to-date as you can. Having a monthly or bi-monthly check-in with external helpers would be prudent. The challenge here is that if you're in this situation, it's also possible that time and people scarcity goes together and that you don't have enough of either to do these things. In that event, it's worth returning to your [scope](#scope)and [objectives](#setting-and-measuring-objectives)to understand if they're feasible, and how you might make them manageable with the time and people you have.

Either way, it's important to have a single source of truth for who is oncall and when per your [planning](#planning-for-support). We have [OpsGenie](#tooling) available for the team to use to generate schedules, and it's suggested that that is your definitive schedule. Additionally, you should determine what hours oncall duties are effective (i.e. who handles a request during and after business hours, and what _are_ business hours).

### Escalation

Sometimes things go poorly and those handling support or oncall duties need help from others. In the Feature/Support Squad model, this might be to pull in members of the product team. For other models that just do oncall rotations or use external team members, this might be similar if more likely. Regardless, it's important to have a shared understanding of _who_ to escalate _what_ to (this should be stored in your [operational docs](#operational-documentation)). Escalating to the wrong person or group not only wastes time, but also can be taxing on people and relationships.

Speaking of taxing, the main point of this sub-section is to suggest keeping a record of how often things need to be escalated and how often. It's not to make people more reluctant to do so, but an increasing trend of escalation means the team should focus on technical or process debt and/or escalating to the same person or group may identify a single point of failure. The worst case is when knowledge or ability exists in a single person, and they become an always-on "shadow oncall" person -- which likely leads to a critical team member burning out.

Try not to over engineer how you record this. It might just be worth anecdotally discussing at a bi-weekly retrospective or having a simple tally sheet in Google Drive for who had to be involved with incidents. It needs to be either a lightweight or mental record, or else no one will keep track of it.

### Additional/cited resources

## Operational documentation

It might be weird for a hyper pro-agile organization such as ourselves to prescribe comprehensive documentation and plans. Yet, in a distributed environment like our own they are valuable tools for establishing collaborative interactions, keeping software working, and handling the unexpected. So, we're going to suggest just that:your team should have a good method of information management and training for operating your product.

### Index Doc

One of the first things you should do is set up an index or landing page for your product documentation, either in a Google Doc or a GitHub repo. The link to this document should be well known, shared, accessible and findable to all members of your team. Consider posting it somewhere prominent, like on your Trello board or in the description of your Slack channel. The goal of this is to increase the discoverability of any documentation for your product. If you write a new how to or want to document the context of a decision, link that new document via this one.

### Critical Docs

From your index doc, you should link to the following critical items:

- **Vision, mission, or other team principles**
 Aligns your team on outcomes and explains how to prioritize support requests and features. Explains why your team exists and its identity.
- **Team roster**
Says who is on the team, how to contact them, and what responsibilities/ownerships they hold.
- **Planning boards (Trello, GitHub Issues, etc.)**
 The current backlogs of features and support request work.
- **Product support plan**
 How the team is _actually_ doing the things discussed in this document 😊
- **Onboarding docs**
 Instructions on how to join the team, both for the newcomer and the existing team members.
- **Offboarding docs**
 Instructions on how to leave the team, both for the departer and the remaining team members.
- **Service journey maps**
 Visualizations of how your users and stakeholders experience the product, so that folks can empathize and communicate effectively with those served by the product.
- **Code repositories**
 Where your code is stored.
- **Infrastructure links**
 Where the code is operating.
- **System architecture**
 How does the system work. Might contain things like system inventories, sequence diagrams, threat models, etc.
- **Change / release process**
 How are new features and fixes put into reality. Also, how are they rolled back or recovered from.
- **Deployment instructions**
 Step-by-step runbooks for mechanically deploying code into various environments, especially production.
- **Incident response process**
 When something goes unexpectedly wrong, how the team coordinates recovery and long-term fixing. Should include a link to where post-mortems are stored.
- **Support or oncall rotation schedule**
 Link to the single source of truth of when team members rotate in/out of the Support Squad or oncall rotation
- [**Tools**](#tooling)
 URLs to the tools the team uses for operations, but also quick descriptions of how they are used and/or configured if not imminently clear.
- **ATO documentation**
 Compliance documentation that government stakeholders use to approve a system and its operations.
- **Decision docs**
 What and why's for important decisions the team has made. Suggested format of a decision doc: why a decision needed to be made, what the decision was, why the decision is what it is, who made it, meeting notes of making the decision, and criteria for when the decision should re-evaluated with an expiration date.
- **Credential rotation strategy**
How to change passwords, certificates, access controls, API keys, etc. Also describes fixed cadences for when things expire or the team routinely changes them for safety.
- **Escalation instructions**
What should be escalated and to who. Helpful for major decisions, incidents, or assistance from folks outside the team. Should also include contact information and how to access authentication credentials (such as for filing a request with a service provider).

### More on onboarding and offboarding

Onboarding and offboarding docs, especially offboarding docs, are commonly neglected and they are sooooo important.

Onboarding docs are critical to not only establishing context for new team members, but are great for regular check-ins with the team to get everyone on the same page on how to operate the product. Your onboarding docs might just be links to other things described above, but it is hard to unwind someone learning the wrong context of your product, so it's just very valuable to have these in order. Your team can also do this in an alternate way rather than cold, dry docs. Perhaps you have an onboarding session and curriculum when new people join, and current folks join in every six months to a year to both realign and provide feedback on where it needs to change.

When it comes to supporting your product, the worst thing that could happen is that a malicious actor releases sensitive data or compromises critical infrastructure. A second worse thing is that someone leaves with knowledge of operating your product that no one remaining knows, creating paralysis for the team's ability to serve users. Your offboarding documentation should outline or link to how to rotate credentials

It's recommended that someone on the team reviews these once a month, possibly together via a meeting. The Delivery Manager and Dev Tech Lead might consider doing together or via a monthly rotation for this duty.

### Additional/cited resources

## Tooling

There are a few tools that we've already procured at CDS that could be useful to you as you ready your product for prime time. Here's a quick list with links to documentation for setting them up. If you need access, please check-in with Internal Ops or whoever is listed as the main point of contact in our [SaaS spreadsheet](https://docs.google.com/spreadsheets/d/1IfwCl6IkeD4v-OfB90XpeoS26IOdYW_sfQxRhvavc1E/edit#gid=0).

- Notifications / After hours alerts / Pages: [OpsGenie](https://docs.opsgenie.com/)
- User support requests: [Freshdesk](https://support.freshdesk.com/support/home)
- Knowledge base for user support: [Freshdesk](https://support.freshdesk.com/support/home)
- System and SLO/SLA monitoring: [AWS CloudWatch](https://docs.aws.amazon.com/cloudwatch/) or [New Relic](https://docs.newrelic.com/)