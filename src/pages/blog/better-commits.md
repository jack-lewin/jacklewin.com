---
templateKey: blog
title: 'better-commits'
blog_title: 'Writing better commits'
date: 2019-02-03T09:00:00.000Z
description: Three techniques I've used to improve my commit workflow.
tags:
  - engineering
  - git
  - workflow
---

Recently I've been a lot more intentional about my git commit messages. They're a key aspect of effective communication for engineers, particularly when you're working in a fast-paced startup where context can soon be lost.

There are multiple benefits of writing better commits. The most immediate gain is that, assuming you work in a team, it will be easier for others to review your code. You could think of each piece of work as a product itself, delivered to the rest of your team through the form of a pull request. If your commit message fails to explain the _why_, your colleagues won't know what to do with the product (i.e. how to review it).

It can be overwhelming to review a pull request when there's a large diff in a single commit &ndash; even a well-written PR description might leave your reviewer working out how everything fits together. Spending a bit of time on your commits will improve the code review process for everyone. Your reviewers will find it easier to provide useful feedback, and you'll think more clearly about your own work. Hopefully this means you'll write better code.

It also makes life easier for Future You. Within a couple of months of writing better commits, I found myself debugging some code I'd written a few weeks previously. The logic was slightly complicated, and I found myself questioning what Past Me was thinking (we've all been there&hellip; right?). Fortunately the commit message explained exactly _why_ it worked that way, and as a result, I was able to apply a fix quickly and easily.

In light of this, I decided to share three techniques I've been using to improve my commits. Over the past few months these have helped to clarify my thinking, and improve my daily workflow.

<br />

### Don't use the `-m` flag when creating a commit

A common workflow for creating a commit might look like this:

```
git add .
git commit -m "blah blah"
```

One rule I've made for myself is never to use the `-m` flag. It creates the artificial constraint of writing your commit message as an argument, which makes it difficult to provide much information.

Instead, running `git commit` without the `-m` flag will open your editor, giving you more space to write your commit. This small change to your workflow is a great affordance to writing better commits.

<br />

### Context is key

A good commit message should communicate *what changes were made*, and *why* that was done. When looking back through `git blame`, you should have a better understanding of the context. As I mentioned earlier, your commit message should aim to describe the _why_.

Let's look at an example:

> **`Use Comic Sans on the sales page`**
> 
> `This commit updates the sales page font to Comic Sans.`

To be honest, I probably could have seen this by looking at the code. If the engineer who wrote this has forgotten the reasons, moved teams, or even left the company, this commit doesn't provide much insight.

How about this?

> **`Use Comic Sans on the sales page`**
> 
> `This commit updates the sales page font to Comic Sans, because we found that it converts better than Arial, which we used previously:`
> 
> `http://link.here/sales-page-font-experiment`
>
> `We chose not to use Helvetica after discussing with design. Both options improved conversion on the page, but we agreed that Comic Sans would be the better long-term option. http://link.here/comic-sans-vs-helvetica`

This is a _much_ more useful commit. I've learnt why Comic Sans was the solution they chose, and why they decided that Helvetica was not the right option to take at the time.

<br />

### Write your code, then break it down into small commits

Sometimes you just want to get your head down and write some code. Even if your workflow is a bit messy, that doesn't mean your commit history needs to be. Once you've made progress with the task, you can go back and break it down into useful, atomic commits.

This technique is particularly useful when you don't have a solution in mind when you start coding, or if you're not entirely sure how the work is going to fit together. I've generally found myself using the [`git add -p`](https://css-tricks.com/git-add-patch-mode/) and [`git rebase -i`](https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history#interactive-rebase) commands when taking this approach.

<br />

I encourage you to give these techniques a try &ndash; and establish some best practices with the rest of your team. Taking the time to write better commits will benefit yourself, your colleagues, and future engineers who work on your codebase.
