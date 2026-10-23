# kieranrobertson.com

Personal site and blog. Static [Astro](https://astro.build) site, served by nginx in a container.

The homepage is written as a coding-agent session: a question, tool calls that read the CV, and an answer.
At the bottom is a working prompt (`help`, `/blog`, `/contact`, `theme dark`, `replay`, plus a few others).

## Run locally

Requires Node 22.12+ (24 recommended).

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Edit content

| What | Where |
| --- | --- |
| Name, summary, jobs, skills, contact | `src/data/profile.ts` |
| Blog posts | `src/content/posts/*.md` (filename = URL slug) |
| Colours, type, layout | `src/styles/global.css` (tokens at the top) |
| Prompt commands | `src/components/Prompt.astro` |

A new post needs this frontmatter:

```md
---
title: My post
description: One sentence for the listing and RSS.
date: 2026-11-01
tags: [kotlin]
draft: false
---
```

Drafts are listed with a `draft` marker. Build with `HIDE_DRAFTS=true` to leave them out.

To show GitHub in the contact block, set `github` in `src/data/profile.ts`.

## Deploy with Dokploy

1. Push this folder to a Git repo.
2. In Dokploy, create an **Application**, point it at the repo, and set **Build Type** to **Dockerfile**.
3. Container port is **80**. Add the domain `kieranrobertson.com` (and `www`) under Domains and enable HTTPS.
4. Optional: add the build arg `HIDE_DRAFTS=true` to hide unfinished posts.
5. Point the domain's A record at the VPS.

To test the container locally:

```sh
docker build -t kieranrobertson.com .
docker run --rm -p 8080:80 kieranrobertson.com
```

Hashed assets under `/_astro/` are cached for a year; HTML is revalidated on every request, so deploys show up immediately.
