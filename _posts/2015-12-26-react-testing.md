---
layout: post
title: Simply test react components
description: "Test react component output with shallow rendering"
tags: [javascript, react, testing]
comments: false
---

With react v0.13 they introduced 'shallow rendering', all basic html inside a component is rendered and no sub components are rendered.

We now have the power to run unit tests in node without the need for a 'DOM'. This allows us to help keep our focus and testing confined to a specific component.

#####Example `<List/>` component:
<script src="https://gist.github.com/hartzis/b1ed6d811e6948b293b9.js"></script>

When we write unit tests for `<List/>` our tests should only focus on its output and not what `<Item>` does with the item data.

For these small testing examples we are going to use [airbnb's](http://nerds.airbnb.com/) newly open sourced react testing library [enzyme](https://github.com/airbnb/enzyme) to test our react components.

#####Example tests for `<List/>`:
<script src="https://gist.github.com/hartzis/d9c5f448eecdf3475d48.js"></script>

These tests focus specifically on `<List/>` and what list is outputing, and they do not concern themselves with what `<Item/>` is going to create. We can now write specific unit tests for `<Item/>`.

#####Example test for `<Item/>`:
<script src="https://gist.github.com/hartzis/e5f889cc4b0c75849ba8.js"></script>

#####Sum

This is intended to be an easily digestible and simple intro to testing react components. Unit tests for react components can be quick and simple while adding confidence to your code base.

Please check out the repo [simple-react-enzyme-examples](https://github.com/hartzis/simple-react-enzyme-examples) if you'd like to run/check out these examples!
