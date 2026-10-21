---
layout: ../../layouts/ProjectLayout.astro
title: "Inkbox"
slug: "inkbox"
pubDate: 2026-01-26
featureOrder: 2
author: "Kat"
description: "Short description for meta tags and sharing purposes goes here."
introText: "Front-end development, project lead, and design system implementation for this Toronto-based ecommerce company."
externalUrl: "https://inkbox.com"
thumbnail:
  url: "inkbox-thumb.jpg"
  alt: "Screenshot of the inkbox.com website"
tags: ["projects", "ecommerce", "vue"]
---

Inkbox is a Toronto-based ecommerce company that makes custom temporary tattoos. About a year after joining the team, layoffs left me the only front-end dev on our small team. This was rather intimidating, if I'm being honest, but I jumped in and took ownership of that part of our codebase. Much of my time here was spent building new features of the site to enhance the user experience (adding new user flows in our custom design tool, or adding an image zoom widget to product display pages, for example) or quashing bugs.

The project I'm most proud of from my time here, with the anodyne internal name of "front-end refresh", was basically a re-build of our ecommerce site's entire front-end. The site had grown organically and rapidly over a few years from Inkbox's early start-up days and was now an odd mish-mash of different technologies – several dozen Laravel PHP templates, some Vue components, some vanilla JS on unstructured HTML pages, some AlpineJS, some jQuery.

We stripped out as much of that old work as we could and replaced it with a streamlined, simplified front-end of reusable, lazy-loaded Vue components. I worked closely with our designer to ensure the new components matched his work as closely as possible, at every viewport size. Hard-coded pages were replaced by a flexible, generic landing page that could adapt to all content pulled from our headless CMS, which put control of that content in the hands of the marketers and removed the need for expensive dev work on simple content updates.

This work was all informed by an accessibility audit I performed the previous year; all the new components met or exceeded WCAG AA standards.

The result of all this was a simplified codebase that was easier to maintain and more efficient to build upon, and a site that had improved greatly in performance, accessibility, and SEO results, resulting in improved customer conversions and faster turnaround on dev work.
