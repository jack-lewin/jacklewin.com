---
templateKey: blog
title: 'til-04-terminal-management-with-tmux'
blog_title: 'TIL #04: Terminal management with tmux'
date: 2020-03-28T17:00:00.000Z
description: 
tags:
  - continuous-improvement
  - TIL
  - terminal
  - workflow
  - tmux
---

I recently discovered tmux, a "terminal multiplexer". Essentially it's an interface for your terminal which provides pane, window and session management.

If you want a practical introduction and tips for getting started, I'd recommend [the tmux course on Upcase](https://thoughtbot.com/upcase/tmux). This post will explain how I'm currently using tmux to improve my terminal set-up.

<br />

---

<br />

As part of my daily workflow, I generally want to be running some or all of the following:

- server
- tests
- build/compiler
- git
- database or rails console

I'm interested in some of these more than others &ndash; I dedicate a majority of my screen space to running tests and using git, whereas I just want to know that my server & build tools are running as expected.

Previously, I would manually open & start each of these processes, and arrange each pane by hand. Setting up my terminal in this way doesn't take a _huge_ amount of time, but with a small amount of work I can automate this configuration and save the effort. My favourite aspect of tmux is the fact that it's easily scriptable &ndash; if you can automate something you'd otherwise repeat every day, then why not?

tmux is great for managing a single terminal session, but really comes into its own for context switching between different projects. For each of the codebases that I spend most of my time in, I have a command which will:

1. create a tmux session
2. start the server and build/compiler in small panes
3. open large panes for using git and running tests

Now, I can easily jump into a terminal session and be immediately productive. I can also switch between open sessions and reduce the amount of time lost to context switching.

The biggest challenge I found whilst getting familiar with tmux was the key bindings. I'd built a strong muscle memory for the keyboard shortcuts to navigate my previous terminal setup, so moving into unfamiliar territory felt laboured and unproductive to begin with. Thankfully, as well as being scriptable, tmux is heavily customizable. By default, all key-bindings have a prefix of `Ctrl+b`. I've tweaked this and a few of my frequently-used commands to feel more ergonomic:

<script src="https://gist.github.com/jack-lewin/68a361ffb207723175382b220d069630.js"></script>

This is an early iteration and I'm sure I could spend much longer tweaking and optimising my set-up. There are _plenty_ of resources for power-user configurations, but I'll try to incrementally build my config around my own needs. For now I'm happy with the improvements I've made by adding tmux to my workflow!
