---
layout: ../../layouts/ProjectLayout.astro
title: "Personal Record"
slug: "personal-record"
pubDate: 2026-01-26
featureOrder: 4
author: "Kat"
description: "Short description for meta tags and sharing purposes goes here."
introText: "Personal Record is a simple web app to log your running workouts. This side-project of mine was my first full-stack application: I’m responsible for the whole thing, end-to-end: API design, back-end code (Node, Express, Mongoose) and front-end (React, SCSS modules)."
thumbnail:
  url: "pr-thumb.jpg"
  alt: "Screenshot of the Personal Record web app"
tags: ["projects", "full stack", "react"]
---

Personal Record began as a class project: as part of the Full-Stack Masterclass at Juno College, students are asked to design and implement a RESTful API using Node, Express, and MongoDB. I decided to build a simple log to track running workouts - why not combine two things I love, code and running?

Don't I already have a running log? Yes! In fact, I have used several. None of them felt quite right for me – TrainingPeaks is more triathlon-focused, Strava is basically just a social network, Apple's workout app doesn't let you export your data, and RunningAhead, though very good, is showing its age and isn't mobile-friendly. I just wanted something quick and simple to use that still could keep track of a fair amount of data, that would work well on a phone, and would have no social media component at all.

The first challenge was in designing the data structure of the API itself – how should tables relate to each other, but also what information exactly do we need to collect? This was a new realm for me, and a fun exercise. Since I only had a few weeks, I focused on the minimum viable product: tracking the date & time of each workout, the distance, the type of workout (easy, long run, intervals, etc), and a general field for comments.

The deadline also led directly to the next challenge: the focus of the course was on the back-end, but for demo purposes, I threw together a front-end at the last minute. Then, once a few months had gone by and I had enough free time to expand the app, I had to disassemble that quick-and-dirty front end and build something new from scratch that was actually clean, organized, and logical, using proper routing and a single global state. Much better! Now I was all set to focus on expanding the API to track more information, and polish the user experience.

What I enjoyed most about this project is how it turned out to be a rich source of new things to learn and practice. Full-stack development, of course, but also things like user flow through forms, using Redux for global state, authentication and more. Next steps are to play with data visualization more, so that users can see more clearly at a glance things like total mileage, quality and effort. I'd like to add the ability to upload files from GPS watches, which means I'll have the opportunity to learn how to upload and parse those files, how to work with maps and how to plot location data.
