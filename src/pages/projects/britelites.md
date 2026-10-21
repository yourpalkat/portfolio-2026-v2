---
layout: ../../layouts/ProjectLayout.astro
title: "Brite Lites"
slug: "britelites"
pubDate: 2026-01-26
featureOrder: 6
author: "Kat"
description: "Short description for meta tags and sharing purposes goes here."
introText: "A digital toy, based on a popular children’s favourite: light up the bulbs in different colours to make a picture, save your creations and load them back later! It’s fully responsive, with a smaller drawing area on mobile, and uses Firebase for the save/load functionality."
thumbnail:
  url: "britelites-thumb.jpg"
  alt: "Screenshot of the Brite Lites web app"
tags: ["projects", "react", "firebase"]
---

I've said before that the best way to learn something well is to teach it to someone else, but maybe the most fun way to learn something is to use it to build toys.

Brite Lites was the first app I developed using React, and was a fun way to learn concepts like state management, one-directional data flow, and component-based development. Plus, it was a great excuse to do some CSS illustration (the only image file used in this app is the wood-grain background; everything else is done with CSS).

It's fully responsive, which was an interesting challenge: how could I ensure the hit targets on the lights were large enough for a finger, but still fit the drawing area inside the viewport without scrolling? I decided eventually to have two file sizes: a smaller grid for mobile, and a more expansive one for larger screens that allows more elaborate illustrations. This is reflected in the "Load" functionality: when a user taps the load button, they will only see the illustrations suitable for their device.

Saving and Loading files is currently handled via Google's Firebase. At some point, when I have free time ("free time", ha!) I'd love to revisit the code and tidy it up (it was a first project! I'm sure there's some howlers in there), and add authentication to the "save" user-flow – currently, anyone can save a file anonymously, which has lead to some unfortunate things being drawn. (Internet's gonna internet, I guess.) But for now, it still works great, and is surprisingly fun! I still sometimes doodle with it on long streetcar rides.
