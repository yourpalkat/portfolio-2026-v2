---
layout: ../../layouts/ProjectLayout.astro
title: "Juno College"
slug: "juno"
pubDate: 2026-01-26
featureOrder: 3
author: "Kat"
description: "Short description for meta tags and sharing purposes goes here."
introText: "Working as part of a small team on a tight schedule, we built a modern JAMstack site to launch the new brand of Juno College of Technology. Developed with Gatsby, Contentful and Netlify, the new junocollege.com is beautiful, fast, and an essential part of the school’s identity."
thumbnail:
  url: "juno-thumb.jpg"
  alt: "Screenshot of the junocollege.com website"
tags: ["projects", "gatsby", "react"]
---

HackerYou was a huge part of the Toronto tech scene: the school was an entry point to a new career, the center of a thriving and supportive community, and it meant a lot to the hundreds of students who attended – myself included! When they announced that they were rebranding to Juno College of Technology and growing, that was exciting news. And when they asked if I would join their team to help build out an all-new site to support this new identity, I jumped at the opportunity.

The deadline for a soft-launch of the site was very tight. We had chosen Gatsby as our front-end framework, which allowed us to get a site skeleton up very quickly – one with near-perfect Lighthouse scores out of the box, and one that provided a solid foundation to build the rest of the site components upon. It also played nicely with the headless CMS HackerYou had already been using, which meant we didn't have to transfer several years' worth of blog posts to a new system.

The Juno site designs were handled by an external agency, so it was the task of our team of four (soon to be three, and then only two) to translate high-fidelity mockups into production-ready React/SCSS/GraphQL code. Each sprint we'd knock another feature or page off the list, starting with aiming for a site MVP for the soft-launch of the new brand, followed by a more extensive version of the site for the official brand launch a month later, and finally the full site two months after that.

This was only possible by our embracing component-driven development; breaking the site into modular components meant several of us could work on a section at once with no conflict, ensuring we could finish even a more elaborate page in one sprint. Making those components modular meant that work progressed faster and faster as we went along and amassed a library of building blocks. And by using SCSS modules, we could perfectly reproduce the specified very complex layouts (fully responsive, with different textures, dozens of colours, and many overlapping items on a 36-column grid) while keeping our style code manageable and not worrying about class name collisions.

The result was a site that is beautiful, fast, maintainable and future-proof. It contained everything a prospective student needed to make an informed choice about their education, and it gave Juno the tools they needed to tell their story effectively.
