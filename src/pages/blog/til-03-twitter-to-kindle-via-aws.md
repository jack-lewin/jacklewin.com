---
templateKey: blog
title: 'til-03-twitter-to-kindle-via-aws'
blog_title: 'TIL #03: Twitter to Kindle via AWS'
date: 2020-02-01T21:00:00.000Z
description: 
tags:
  - continuous-improvement
  - TIL
  - AWS
  - attention-economy
---

My relationship with Twitter is very much love-hate. It can be an incredibly useful resource for keeping up-to-date with friends, colleagues, and the tech industry as a whole. However it's also a classic example of the attention economy: the more time you spend scrolling through your timeline, the more profitable you become as a user. It's in Twitter's best interests to ensure I spend as much time scrolling as possible, which conflicts with my aim of being more mindful about how I use technology. Ultimately, if I put my own willpower to the test against a multi-billion dollar company, it's always going to be difficult to maintain a healthy balance.

As an experiment I decided to find a way to read the most interesting tweets without having to browse the site myself, in order to avoid falling into Twitter's attention sink-hole over and over again. I already use [crofflr](https://www.crofflr.com) to send articles from my Pocket queue straight to my Kindle, so I took some inspiration and applied this approach to my Twitter timeline. Along the way, I learnt about a few of the different services provided by AWS, and realised how easy it is to spin up workflows with a relatively small amount of code.

My solution consisted of three main components:

<br />

1. **Lambda to fetch, filter & format tweets**

This uses the Twitter API to fetch recent tweets from specific users, applies some filters (which are currently pretty rudimentary) to try and select the most useful tweets, then formats the results for later reading.

<br />

2. **CloudWatch Events rule to trigger the Lambda**

This is effectively a cron job which invokes the Lambda with specific parameters (i.e. a list of users to follow). This means I can receive a batch of tweets in a single message at specific times of the day, rather than being continuously plugged-in.

<br />

3. **Lambda to send notifications to Kindle**

This was the trickiest part of the project, due to the requirements for sending content to a Kindle. The Personal Documents feature is (unsurprisingly) intended for reading documents, rather than arbitrary messages. Unfortunately, this means you must send the content by email _as an attachment_, meaning I was unable to utilise the AWS Simple Notification Service (SNS) since it doesn't support sending email attachments.

The solution was to write a separate Lambda in order to send the emails. I used the nodemailer package to write a `.txt` attachment and send email via an SMTP connection with a free Outlook email account, to my Send-to-Kindle email address.

<br />

---

<br />

I'll see how well this experiment works before deciding whether to put more time into it. One obvious limitation of my current setup is that I still need to visit Twitter to send or interact with tweets &ndash; I'm aware that Twitter claim to offer an SMS-based client, but my attempts to get this working were unsuccessful and contacting support didn't help either. My current system is also focused on following a fairly small number of users and doesn't offer me anything outside that limited filter bubble, so I'd like to find the right balance between reducing noise and broadening my horizons.
