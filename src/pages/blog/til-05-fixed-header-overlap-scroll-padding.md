---
templateKey: blog
title: 'til-05-fixed-position-headers-scroll-padding'
blog_title: 'TIL #05: Fixed-position headers and scroll-padding'
date: 2020-05-29T09:00:00.000Z
description: An easy way to solve fixed-position headers overlapping with content.
tags:
  - continuous-improvement
  - TIL
  - CSS
  - scroll-padding
---

A common problem when using fixed-position headers is that it can overlap with on-page links.

For example, you might want your blog to contain a footnote, but when the user clicks on that footnote, the content is hidden behind your header:

<iframe height="350" style="width: 100%;" scrolling="no" title="Fixed header overlapping on-page links: problem" src="https://codepen.io/jlewin/embed/mdeZgZG?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jlewin/pen/mdeZgZG'>Fixed header overlapping on-page links: problem</a> by Jack Lewin
  (<a href='https://codepen.io/jlewin'>@jlewin</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Previously, you might have solved this by adding some height and a negative margin to the footnote links:

```
.footnote::before {
  content: "";
  display: block;
  height: 60px;
  margin-top: -60px;
}
```

Today I discovered the [`scroll-padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding) property, which enables you to solve this in a generic way, using a single rule:

```
html {
  scroll-padding-top: 60px;
}
```

Pretty neat! You can see this in action here:

<iframe height="350" style="width: 100%;" scrolling="no" title="Fixed header overlapping on-page links: solution using `scroll-padding-top`" src="https://codepen.io/jlewin/embed/vYNqPpL?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/jlewin/pen/vYNqPpL'>Fixed header overlapping on-page links: solution using `scroll-padding-top`</a> by Jack Lewin
  (<a href='https://codepen.io/jlewin'>@jlewin</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Browser compatability for `scroll-padding` is _reasonably_ good too, although it's not supported in IE. [Can I use](https://caniuse.com/#feat=mdn-css_properties_scroll-padding) currently has support down as 88% usage-relative. If you're okay with dropping support for older browsers, this is a nice way to solve a fixed header overlapping on-page anchors.

