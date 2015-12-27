---
layout: post
title: Simply test react components
description: "Test react component output with shallow rendering"
tags: [javascript, react, testing]
comments: false
---

With react v0.13 they introduced 'shallow rendering', all basic html inside a component is rendered and no sub components are rendered. This allows us to help keep our focus and testing confined to a specific component.

For example if we had `<List/>` component:
<script src="https://gist.github.com/hartzis/b1ed6d811e6948b293b9.js"></script>

When we write tests for `<List/>` our tests should only focus on its output and not what `<Item>` does with the list item.
