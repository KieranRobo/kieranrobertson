---
title: Running coding agents across two teams
description: What changed when ten engineers started handing design, implementation and review to agents, and the guardrails that made it safe to merge.
date: 2026-10-23
tags: [agents, developer-tooling, ci]
draft: true
---

> This is an outline. The headings and the facts in it are real; the sections marked <mark>TODO</mark> still need writing.

Over the last few months I led the rollout of agentic workflows across two teams at monday.com, ten engineers in all. Agents now design, break down, implement and review a large share of our production changes. Delivery got faster, PR cycle times fell and we had fewer production incidents, which surprised some people more than the speed did.

This post covers how the workflow is put together, the guardrails that let us merge model-generated code with confidence, and what I would do differently.

## Where we started

<mark>TODO:</mark> What the teams' workflow looked like before. How much were people already using Claude Code or Codex individually? What was the trigger for doing this properly rather than ad hoc?

## The workflow

The shape is a pipeline with a handoff at each stage:

1. **Design.** An agent drafts the approach from the ticket and the relevant code.
2. **Break down.** The design is split into small tasks, each one PR-sized.
3. **Implement.** Agents take tasks and open PRs.
4. **Review.** Every PR goes to an AI review agent before a human sees it.

<mark>TODO:</mark> Where humans sit in this loop. Who approves the design? How big is a task, and who decides?

## Guardrails before merge

The part that made this safe was not the agents, it was the gates around them.

- **CI checks all model-generated code** before it can merge. <mark>TODO:</mark> list the actual checks (types, tests, lint, contract tests, anything custom).
- **Risk-based approval.** The review agent auto-approves low-risk PRs and routes everything else to a human. <mark>TODO:</mark> how "low risk" is defined, and how we tuned it.

<mark>TODO:</mark> A concrete example of a PR the gates caught.

## Shared context is the real product

Agent output drifted between engineers until we treated context as shared infrastructure:

- **Shared skills** for recurring tasks
- **Codebase conventions** written down where agents read them
- **Project memory** that carries decisions across sessions

<mark>TODO:</mark> How these are stored and versioned, and how people contribute to them.

## What changed

<mark>TODO:</mark> Numbers if I can share them: PR cycle time before and after, incident counts, throughput. If not, describe the direction and the timescale.

## What I would do differently

<mark>TODO:</mark> Two or three honest lessons.

## Further reading

<mark>TODO:</mark> Links to docs or posts that shaped the approach.
