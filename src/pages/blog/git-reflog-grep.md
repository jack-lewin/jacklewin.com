---
templateKey: blog
title: 'TIL: digging up old commits'
blog_title: 'TIL: digging up old commits'
date: 2019-12-18T19:00:00.000Z
description: Search for old commits using git reflog with the grep-reflog flag.
tags:
  - engineering
  - git
  - TIL
---

One of the git commands that has saved me a few times is [`git reflog`](https://git-scm.com/docs/git-reflog). This will give you a reference log of actions you've recently completed. If you've lost a local commit (maybe you accidentally reset your local branch to the remote), this can be a useful command to retrieve it.

This week I needed to re-apply an old commit from a couple of weeks ago. I didn't fancy trawling through hundreds of lines of the reflog, so I figured it would be easier to achieve with `grep`. However, I actually discovered that the functionality I needed is built into git itself. TIL:

> `git reflog --grep-reflog <pattern>`

This will search your git reflog for commit messages matching `<pattern>`. The pattern is a regular expression, so you can search for a word/phrase or some other pattern if you need.

This saved me a bunch of time, and thanks to a quick search I added a new trick to my toolkit. I also found the old commit with a single command!
